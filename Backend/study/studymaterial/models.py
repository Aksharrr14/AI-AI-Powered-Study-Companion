from django.db import models
from django.contrib.auth.hashers import make_password

class User(models.Model):
    username = models.CharField(max_length=255, unique=True)
    firstname = models.CharField(max_length=200)
    middlename = models.CharField(max_length=200, blank=True, null=True)
    lastname = models.CharField(max_length=200)
    age = models.PositiveIntegerField()
    student_class = models.PositiveIntegerField(blank=True)  
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)  
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(blank=True, null=True)

    def set_password(self, raw_password):
        self.password = make_password(raw_password)  # Hash the password
        self.save()

    def __str__(self):
        return f'{self.firstname} {self.lastname} ({self.username})'
