
# Register your models here.
from django.contrib import admin
from .models import Course, Module, QuizQuestion, UserProgress, Achievement

admin.site.register(Course)
admin.site.register(Module)
admin.site.register(QuizQuestion)
admin.site.register(UserProgress)
admin.site.register(Achievement)