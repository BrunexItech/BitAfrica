from rest_framework import serializers
from django.core.validators import EmailValidator
from .models import Subscriber

class NewsletterSubscribeSerializer(serializers.Serializer):
    email = serializers.EmailField(
        required=True,
        validators=[EmailValidator()]
    )
    source = serializers.CharField(max_length=100, required=False, default='website_footer')
    
    def validate_email(self, value):
        # Check if email is already subscribed and active
        if Subscriber.objects.filter(email=value, is_active=True).exists():
            raise serializers.ValidationError("This email is already subscribed to our newsletter.")
        return value
    
    def create(self, validated_data):
        # Deactivate any existing subscription if exists
        Subscriber.objects.filter(email=validated_data['email']).update(is_active=False)
        
        # Create new subscription
        return Subscriber.objects.create(**validated_data)