from rest_framework import serializers
from django.core.validators import EmailValidator

class ContactSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200, required=True)
    email = serializers.EmailField(
        required=True,
        validators=[EmailValidator()]
    )
    message = serializers.CharField(required=True)
    
    def validate(self, data):
        if len(data.get('message', '')) < 10:
            raise serializers.ValidationError({
                "message": "Please provide a more detailed message (minimum 10 characters)."
            })
        return data