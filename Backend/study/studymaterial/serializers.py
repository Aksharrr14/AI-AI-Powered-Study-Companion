from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username', 'firstname', 'middlename', 'lastname', 
            'age', 'student_class', 'email', 'password','date_joined',
        ]
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        # Create the user with a hashed password
        raw_password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(raw_password)
        return user