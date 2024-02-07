from django.db import models

# Create your models here.

# job/models.py

from django.db import models
from django.contrib.auth.models import User

class JobListing(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    # Add other fields as needed

class Application(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    job_listing = models.ForeignKey(JobListing, on_delete=models.CASCADE)
    # Add other fields as needed
