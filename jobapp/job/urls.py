# job/urls.py

from django.urls import path
from .views import register_user, job_listing, submit_application
from .views import user_login, user_logout, user_signup
from django.contrib.auth.views import PasswordChangeView
from django.contrib.auth.views import PasswordResetView, PasswordResetConfirmView, PasswordResetDoneView, PasswordResetCompleteView
from django.urls import path, include
from . import views


urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('create-job/', job_listing, name='job_listing'),
    path('submit-application/', submit_application, name='submit_application'),
    path('login/', user_login, name='login'),
    path('logout/', user_logout, name='logout'),
    path('signup/', user_signup, name='signup'),
    path('password_change/', PasswordChangeView.as_view(), name='password_change'),
    path('password_reset/', PasswordResetView.as_view(), name='password_reset'),
    path('password_reset/done/', PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset/done/', PasswordResetCompleteView.as_view(), name='password_reset_complete'),

    # Add other paths for additional functionalities.
]

# urls.py