from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .serializers import RegisterSerializer, LoginSerializer
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.utils.http import urlsafe_base64_decode
from django.conf import settings




User = get_user_model() 

class RegisterView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        # Generate tokens for the new user
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'user': {
                'id': user.id,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
            },
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'message': 'User registered successfully'
        }, status=status.HTTP_201_CREATED)

class LoginView(generics.GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        email = serializer.validated_data['email']
        password = serializer.validated_data['password']
        
        user = authenticate(request, username=email, password=password)
        
        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                'user': {
                    'id': user.id,
                    'email': user.email,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                },
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'message': 'Login successful'
            })
        else:
            return Response({
                'error': 'Invalid credentials'
            }, status=status.HTTP_401_UNAUTHORIZED)
            
            


class ForgotPasswordView(generics.GenericAPIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        email = request.data.get('email')
        
        try:
            # Use filter().first() instead of get() to handle duplicates
            user = User.objects.filter(email=email).first()
            
            if not user:
                return Response({
                    'message': 'If an account exists with this email, you will receive reset instructions'
                }, status=status.HTTP_200_OK)
            
            # Generate token and uid
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            
            # Create reset link - ADD # FOR HashRouter
            reset_url = f"{settings.FRONTEND_URL}/#/reset-password/{uid}/{token}/"
            
            # Send email
            send_mail(
                subject='BitAfrica Password Reset Request',
                message=f'''
Hello {user.first_name or user.email},

You requested a password reset for your BitAfrica account.

Click here to reset your password: {reset_url}

This link will expire in 24 hours.

If you didn't request this, please ignore this email.

Best regards,
BitAfrica Team
                ''',
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[email],
                fail_silently=False,
            )
            
            return Response({
                'message': 'Password reset email sent successfully',
                'detail': 'Check your email for reset instructions'
            }, status=status.HTTP_200_OK)
            
        except Exception as e:
            print(f"Forgot password error: {e}")
            return Response({
                'error': 'Failed to process reset request'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 
            
            
            

class ResetPasswordView(generics.GenericAPIView):
    permission_classes = [AllowAny]
    
    def post(self, request, uidb64, token):
        try:
            # Decode uid and get user
            uid = urlsafe_base64_decode(uidb64).decode()
            user = User.objects.get(pk=uid)
            
            # Verify token
            if not default_token_generator.check_token(user, token):
                return Response({
                    'error': 'Invalid or expired reset link'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            # Get new password from request
            new_password = request.data.get('new_password')
            confirm_password = request.data.get('confirm_password')
            
            if not new_password or not confirm_password:
                return Response({
                    'error': 'Both password fields are required'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            if new_password != confirm_password:
                return Response({
                    'error': 'Passwords do not match'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            # Validate password strength
            try:
                validate_password(new_password, user)
            except ValidationError as e:
                return Response({
                    'error': ' '.join(e.messages)
                }, status=status.HTTP_400_BAD_REQUEST)
            
            # Set new password
            user.set_password(new_password)
            user.save()
            
            return Response({
                'message': 'Password reset successful. You can now login with your new password.'
            }, status=status.HTTP_200_OK)
            
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            return Response({
                'error': 'Invalid reset link'
            }, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({
                'error': f'Password reset failed: {str(e)}'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)