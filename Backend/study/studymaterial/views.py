from django.shortcuts import render
from .models import *
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from django.conf import settings
from datetime import datetime, timedelta
import hashlib
import uuid
from django.utils import timezone
# Create your views here.


class RegisterView(APIView):
    def post(self,request):
        seriailzer=UserSerializer(data=request.data)
        if seriailzer.is_valid():
            user=seriailzer.save()
            self.send_registration_email(user)
            return Response({"message":"User registration successfully done"},status=status.HTTP_201_CREATED)
        return Response(seriailzer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def send_registration_email(self,user):
        subject="WELCOME To AI STUDY HUB"
        message=f"Hello {user.firstname} {user.lastname}, \n\n Thankyou for registering on our platform! We are thrilled to have you onboard. \n\n Regards, \n The team \n\n\n This is an Auto-Generated Email"
        from_email="no-reply@studyai.com"
        recipient_list=[user.email]
        send_mail(subject,message,from_email,recipient_list,fail_silently=False)


class ProfileView(APIView):
    def get(self,request):
        user=request.user
        serializer=UserSerializer(user)
        return Response(serializer.data)
    

