from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password

User = get_user_model()  # This now correctly gets your custom User model

class RegisterSerializer(serializers.ModelSerializer):
    fullName = serializers.CharField(write_only=True, required=True)
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirmPassword = serializers.CharField(write_only=True, required=True)
    currency = serializers.CharField(max_length=10, default='USD')
    marketingEmails = serializers.BooleanField(default=True)
    acceptTerms = serializers.BooleanField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('fullName', 'email', 'password', 'confirmPassword', 
                 'currency', 'marketingEmails', 'acceptTerms')

    def validate(self, attrs):
        # Check passwords match
        if attrs['password'] != attrs['confirmPassword']:
            raise serializers.ValidationError({"confirmPassword": "Passwords do not match."})
        
        # Check terms are accepted
        if not attrs.get('acceptTerms', False):
            raise serializers.ValidationError({"acceptTerms": "You must accept the terms and conditions."})
        
        return attrs

    def create(self, validated_data):
        # Extract full name and split
        full_name = validated_data.pop('fullName')
        first_name = ''
        last_name = ''
        
        # Simple split logic - can be improved
        name_parts = full_name.split(' ', 1)
        if len(name_parts) > 0:
            first_name = name_parts[0]
        if len(name_parts) > 1:
            last_name = name_parts[1]
        
        # Remove fields not in User model
        validated_data.pop('confirmPassword')
        validated_data.pop('acceptTerms')
        currency = validated_data.pop('currency', 'USD')
        marketing_emails = validated_data.pop('marketingEmails', True)
        
        # Create user with first/last name
        user = User.objects.create_user(
            username=validated_data['email'],  # Use email as username
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=first_name,
            last_name=last_name
        )
        
        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True)