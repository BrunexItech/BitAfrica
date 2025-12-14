from django.shortcuts import render

# Create your views here.
# consultation/views.py
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ConsultationSerializer
import logging

logger = logging.getLogger(__name__)

class ConsultationView(generics.CreateAPIView):
    """
    View to handle consultation form submissions
    No authentication required - anyone can submit
    """
    permission_classes = [AllowAny]
    serializer_class = ConsultationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # Get validated data
        data = serializer.validated_data
        
        try:
            # Prepare email content
            subject = f"New Consultation Request: {data['name']} - {data['service']}"
            
            email_body = f"""
NEW CONSULTATION REQUEST - BitAfrica

=============== CLIENT INFORMATION ===============
Name: {data['name']}
Email: {data['email']}
Phone: {data.get('phone', 'Not provided')}
Company: {data.get('company', 'Not provided')}

=============== SERVICE DETAILS ===============
Service Requested: {data['service']}
Region: {data['region']}
Consultation Type: {data['consultation_type']}
Timezone: {data['timezone']}

=============== PROJECT DESCRIPTION ===============
{data['description']}

=============== TECHNICAL DETAILS ===============
Submitted: {request._request.META.get('HTTP_HOST', 'Unknown')}
IP Address: {self.get_client_ip(request)}
User Agent: {request._request.META.get('HTTP_USER_AGENT', 'Unknown')}
            """
            
            # Send email to business
            send_mail(
                subject=subject,
                message=email_body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.EMAIL_HOST_USER],  # Sends to your business email
                fail_silently=False,
            )
            
            # Optional: Send confirmation email to user
            try:
                confirmation_subject = "We've Received Your Consultation Request - BitAfrica"
                confirmation_body = f"""
Hello {data['name']},

Thank you for reaching out to BitAfrica! We've received your consultation request for "{data['service']}".

Our team will review your request and get back to you within 24-48 hours.

Here's a summary of your request:
- Service: {data['service']}
- Consultation Type: {data['consultation_type']}
- Region: {data['region']}

If you need immediate assistance, please reply to this email.

Best regards,
BitAfrica Team
                """
                
                send_mail(
                    subject=confirmation_subject,
                    message=confirmation_body,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[data['email']],
                    fail_silently=True,  # Don't fail main request if confirmation fails
                )
            except Exception as e:
                logger.warning(f"Failed to send confirmation email: {str(e)}")
            
            return Response({
                'success': True,
                'message': 'Consultation request submitted successfully! We will contact you shortly.'
            }, status=status.HTTP_200_OK)
            
        except Exception as e:
            logger.error(f"Consultation submission failed: {str(e)}")
            return Response({
                'error': 'Failed to submit consultation request. Please try again later.'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip