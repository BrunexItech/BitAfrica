from django.urls import path
from .views import RegisterView,LoginView
from .views import ForgotPasswordView
from .views import ResetPasswordView


urlpatterns=[
    path('register/',RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='Login'),
    path('forgot-password/', ForgotPasswordView.as_view(), name='forgot-password'),
    path('reset-password/<uidb64>/<token>/', ResetPasswordView.as_view(),name='reset-password')
    
]