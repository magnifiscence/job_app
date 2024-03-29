

from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
# Create your views here.
# job/views.py
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes, APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import JobListing, Application
from .serializers import JobListingSerializer, ApplicationSerializer
from django.contrib.auth.decorators import login_required



@api_view(['POST'])
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({'error': 'Username and password are required'}, status=400)

    user = User.objects.create_user(username=username, password=password)
    return Response({'message': 'User registered successfully'}, status=201)
  

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def job_listing(request):
    if request.method == 'GET':
        output = [{"title": output.title,
                   "location": output.location,
                   "description": output.description}
                   for output in JobListing.objects.all()]
        return Response(output)
       # job_listings = JobListing.objects.all()
       # serializer = JobListingSerializer(job_listings, many=True)
       # return Response(serializer.data)
    elif request.method == 'POST':
        serializer = JobListingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@login_required
def submit_application(request):
    serializer = ApplicationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


# views.py



def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('dashboard')
        else:
            return render(request, 'login.html', {'error': 'Invalid username or password'})
    else:
        return render(request, 'login.html')

def user_logout(request):
    logout(request)
    return redirect('login')

def user_signup(request):
    if request.method == 'POST':
        # Handle user signup form submission
        pass
    else:
        return render(request, 'signup.html')
