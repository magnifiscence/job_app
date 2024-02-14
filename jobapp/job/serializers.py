# job/serializers.py

from rest_framework import serializers
from .models import JobListing, Application

class JobListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobListing
        fields = ['title', 'location', 'description']

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ['__all__']
