from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
from django.conf import settings
from .serializers import NewsletterSubscribeSerializer
import logging

logger = logging.getLogger(__name__)

class NewsletterSubscribeView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = NewsletterSubscribeSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        try:
            # Save the subscriber
            subscriber = serializer.save()
            
            # Send welcome email
            self.send_welcome_email(subscriber)
            
            # Send notification to admin
            self.send_admin_notification(subscriber)
            
            return Response({
                'success': True,
                'message': 'Successfully subscribed to our newsletter! Check your email for confirmation.'
            }, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            logger.error(f"Newsletter subscription failed: {str(e)}")
            return Response({
                'error': 'Failed to subscribe. Please try again later.'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def send_welcome_email(self, subscriber):
        subject = "Welcome to BitAfrica AI Newsletter! 🚀"
        
        email_body = f"""
Welcome to the BitAfrica AI Community!

Thank you for subscribing to our newsletter, {subscriber.email}!

You'll now receive:
✨ Latest updates on AI innovations in Africa
✨ Software development insights and tips
✨ Technology education opportunities
✨ Exclusive offers and promotions
✨ Industry news and trends

Stay tuned for valuable content that will help you stay ahead in the tech world.

You can unsubscribe anytime by clicking the link in any of our emails.

Best regards,
The BitAfrica AI Team

---
BitAfrica AI
Transforming Africa's Digital Future
Email: bitafrica.ai@gmail.com
Phone: +254 7949 133 18
        """
        
        send_mail(
            subject=subject,
            message=email_body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[subscriber.email],
            fail_silently=True,
        )
    
    def send_admin_notification(self, subscriber):
        subject = f"New Newsletter Subscriber: {subscriber.email}"
        
        email_body = f"""
NEW NEWSLETTER SUBSCRIPTION - BitAfrica AI

=============== SUBSCRIBER INFORMATION ===============
Email: {subscriber.email}
Subscribed At: {subscriber.subscribed_at}
Source: {subscriber.source}
Active: {subscriber.is_active}

=============== STATS ===============
Total Active Subscribers: {Subscriber.objects.filter(is_active=True).count()}
New Subscriber Today: {Subscriber.objects.filter(is_active=True, subscribed_at__date=subscriber.subscribed_at.date()).count()}

=============== TECHNICAL DETAILS ===============
IP Address: {self.get_client_ip(self.request)}
User Agent: {self.request._request.META.get('HTTP_USER_AGENT', 'Unknown')}
            """
        
        send_mail(
            subject=subject,
            message=email_body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=True,
        )
    
    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip