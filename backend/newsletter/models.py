from django.db import models

# Create your models here.
from django.db import models
from django.core.validators import EmailValidator

class Subscriber(models.Model):
    email = models.EmailField(
        max_length=255, 
        unique=True,
        validators=[EmailValidator()]
    )
    subscribed_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    source = models.CharField(max_length=100, default='website_footer')  # Track where they subscribed from
    
    class Meta:
        verbose_name = "Newsletter Subscriber"
        verbose_name_plural = "Newsletter Subscribers"
        ordering = ['-subscribed_at']
    
    def __str__(self):
        return self.email