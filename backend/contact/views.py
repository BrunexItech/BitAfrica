from django.shortcuts import render

# Create your views here.
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ContactSerializer
import logging

logger = logging.getLogger(__name__)

class ContactView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        data = serializer.validated_data
        
        try:
            # Email to business
            subject_business = f"New Contact Form: {data['name']}"
            
            email_body_business = f"""
NEW CONTACT FORM SUBMISSION - BitAfrica

=============== CONTACT INFORMATION ===============
Name: {data['name']}
Email: {data['email']}

=============== MESSAGE ===============
{data['message']}

=============== TECHNICAL DETAILS ===============
Submitted: {request._request.META.get('HTTP_HOST', 'Unknown')}
IP Address: {self.get_client_ip(request)}
User Agent: {request._request.META.get('HTTP_USER_AGENT', 'Unknown')}
            """
            
            send_mail(
                subject=subject_business,
                message=email_body_business,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.EMAIL_HOST_USER],
                fail_silently=False,
            )
            
            # Confirmation email to user
            confirmation_subject = "We've Received Your Message - BitAfrica"
            confirmation_body = f"""
Hello {data['name']},

Thank you for contacting BitAfrica! We've received your message:

"{data['message'][:100]}..."

Our team will review your message and get back to you within 24 hours.

For immediate assistance, you can also:
- Call: +254 794 913 318
- Email: bitafrica.ai@gmail.com

Best regards,
BitAfrica Team
            """
            
            send_mail(
                subject=confirmation_subject,
                message=confirmation_body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[data['email']],
                fail_silently=True,
            )
            
            return Response({
                'success': True,
                'message': 'Message sent successfully! We will contact you shortly.'
            }, status=status.HTTP_200_OK)
            
        except Exception as e:
            logger.error(f"Contact submission failed: {str(e)}")
            return Response({
                'error': 'Failed to send message. Please try again later.'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip