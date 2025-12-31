from django.contrib import admin
from .models import Subscriber

@admin.register(Subscriber)
class SubscriberAdmin(admin.ModelAdmin):
    list_display = ('email', 'subscribed_at', 'is_active', 'source')
    list_filter = ('is_active', 'subscribed_at', 'source')
    search_fields = ('email',)
    readonly_fields = ('subscribed_at',)
    actions = ['activate_subscribers', 'deactivate_subscribers']
    
    def activate_subscribers(self, request, queryset):
        updated = queryset.update(is_active=True)
        self.message_user(request, f'{updated} subscribers activated.')
    
    def deactivate_subscribers(self, request, queryset):
        updated = queryset.update(is_active=False)
        self.message_user(request, f'{updated} subscribers deactivated.')
    
    activate_subscribers.short_description = "Activate selected subscribers"
    deactivate_subscribers.short_description = "Deactivate selected subscribers"