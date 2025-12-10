import os
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from django.core.mail import send_mail

try:
    send_mail(
        subject='Test Email from BitAfrica',
        message='This is a test email to verify configuration.',
        from_email='bitafrica.ai@gmail.com',
        recipient_list=['brunosharif89@gmail.com'],  # Use your personal email for testing
        fail_silently=False,
    )
    print("✅ Email sent successfully!")
except Exception as e:
    print(f"❌ Error sending email: {e}")