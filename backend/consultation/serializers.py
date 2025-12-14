# consultation/serializers.py
from rest_framework import serializers
from django.core.validators import EmailValidator

class ConsultationSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200, required=True)
    email = serializers.EmailField(
        required=True,
        validators=[EmailValidator()]
    )
    phone = serializers.CharField(max_length=20, required=False, allow_blank=True)
    company = serializers.CharField(max_length=200, required=False, allow_blank=True)
    service = serializers.CharField(max_length=100, required=True)
    description = serializers.CharField(required=True)
    region = serializers.CharField(max_length=100, required=True)
    consultation_type = serializers.CharField(max_length=50, required=True)
    timezone = serializers.CharField(max_length=50, default='GMT')
    
    def validate(self, data):
        # Custom validation if needed
        if len(data.get('description', '')) < 10:
            raise serializers.ValidationError({
                "description": "Please provide a more detailed description (minimum 10 characters)."
            })
        return data