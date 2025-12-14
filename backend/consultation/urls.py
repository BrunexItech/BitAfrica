# consultation/urls.py
from django.urls import path
from .views import ConsultationView

urlpatterns = [
    path('submit/', ConsultationView.as_view(), name='consultation-submit'),
]