from rest_framework import serializers
from .models import Course, Module, QuizQuestion, UserProgress, UserQuizAttempt, Achievement, UserAchievement
from django.contrib.auth import get_user_model

User = get_user_model()

class ModuleSerializer(serializers.ModelSerializer):
    is_completed = serializers.SerializerMethodField()
    
    class Meta:
        model = Module
        fields = ['id', 'title', 'content', 'code_example', 'order', 
                 'estimated_time', 'is_completed', 'created_at']
    
    def get_is_completed(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            try:
                progress = UserProgress.objects.get(
                    user=request.user,
                    course=obj.course,
                    module=obj
                )
                return progress.completed
            except UserProgress.DoesNotExist:
                return False
        return False

class CourseSerializer(serializers.ModelSerializer):
    progress = serializers.SerializerMethodField()
    completed_modules = serializers.SerializerMethodField()
    total_modules = serializers.SerializerMethodField()
    
    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'category', 'difficulty',
                 'estimated_time', 'progress', 'completed_modules', 
                 'total_modules', 'order', 'created_at']
    
    def get_progress(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            total = obj.modules.count()
            if total == 0:
                return 0
            completed = UserProgress.objects.filter(
                user=request.user,
                course=obj,
                completed=True
            ).count()
            return int((completed / total) * 100)
        return 0
    
    def get_completed_modules(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return UserProgress.objects.filter(
                user=request.user,
                course=obj,
                completed=True
            ).count()
        return 0
    
    def get_total_modules(self, obj):
        return obj.modules.count()

class QuizQuestionSerializer(serializers.ModelSerializer):
    options = serializers.SerializerMethodField()
    
    class Meta:
        model = QuizQuestion
        fields = ['id', 'question', 'options', 'explanation']
        read_only_fields = ['explanation']
    
    def get_options(self, obj):
        options = []
        if obj.option_1:
            options.append(obj.option_1)
        if obj.option_2:
            options.append(obj.option_2)
        if obj.option_3:
            options.append(obj.option_3)
        if obj.option_4:
            options.append(obj.option_4)
        return options

class QuizSubmissionSerializer(serializers.Serializer):
    course_id = serializers.IntegerField()
    answers = serializers.ListField(
        child=serializers.DictField()
    )
    
    def validate_answers(self, value):
        for answer in value:
            if 'question_id' not in answer or 'selected_option' not in answer:
                raise serializers.ValidationError("Each answer must contain question_id and selected_option")
            if not isinstance(answer['selected_option'], int) or answer['selected_option'] < 1:
                raise serializers.ValidationError("selected_option must be a positive integer")
        return value

class QuizResultSerializer(serializers.Serializer):
    score = serializers.IntegerField()
    total_questions = serializers.IntegerField()
    correct_answers = serializers.IntegerField()
    percentage = serializers.FloatField()
    details = serializers.ListField(child=serializers.DictField())

class ProgressUpdateSerializer(serializers.Serializer):
    course_id = serializers.IntegerField()
    module_id = serializers.IntegerField()
    completed = serializers.BooleanField(default=True)

class AchievementSerializer(serializers.ModelSerializer):
    is_earned = serializers.SerializerMethodField()
    
    class Meta:
        model = Achievement
        fields = ['id', 'name', 'description', 'icon', 
                 'condition_type', 'condition_value', 'is_earned']
    
    def get_is_earned(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return UserAchievement.objects.filter(
                user=request.user,
                achievement=obj
            ).exists()
        return False