from django.db.models import Avg
from django.shortcuts import render

# Create your views here.
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Count, Q
from .models import Course, Module, QuizQuestion, UserProgress, UserQuizAttempt, Achievement, UserAchievement
from .serializers import (
    CourseSerializer, ModuleSerializer, QuizQuestionSerializer,
    QuizSubmissionSerializer, QuizResultSerializer, ProgressUpdateSerializer,
    AchievementSerializer
)
import logging

logger = logging.getLogger(__name__)

class CourseListView(generics.ListAPIView):
    """List all available courses with user progress"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CourseSerializer
    queryset = Course.objects.filter(is_active=True)
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

class CourseDetailView(generics.RetrieveAPIView):
    """Get course details with modules"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CourseSerializer
    queryset = Course.objects.filter(is_active=True)
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

class ModuleListView(generics.ListAPIView):
    """Get all modules for a course"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ModuleSerializer
    
    def get_queryset(self):
        course_id = self.kwargs['course_id']
        return Module.objects.filter(course_id=course_id).order_by('order')
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

class QuizQuestionsView(generics.ListAPIView):
    """Get quiz questions for a course"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = QuizQuestionSerializer
    
    def get_queryset(self):
        course_id = self.kwargs['course_id']
        return QuizQuestion.objects.filter(course_id=course_id)

class SubmitQuizView(APIView):
    """Submit quiz answers and get results"""
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        serializer = QuizSubmissionSerializer(data=request.data)
        if serializer.is_valid():
            course_id = serializer.validated_data['course_id']
            answers = serializer.validated_data['answers']
            
            # Get all questions for the course
            questions = QuizQuestion.objects.filter(course_id=course_id)
            question_dict = {q.id: q for q in questions}
            
            # Calculate score
            correct_count = 0
            total_questions = len(questions)
            details = []
            
            for answer in answers:
                question_id = answer['question_id']
                selected_option = answer['selected_option']
                
                if question_id in question_dict:
                    question = question_dict[question_id]
                    is_correct = (selected_option == question.correct_option)
                    
                    if is_correct:
                        correct_count += 1
                    
                    details.append({
                        'question_id': question_id,
                        'question': question.question,
                        'selected_option': selected_option,
                        'correct_option': question.correct_option,
                        'is_correct': is_correct,
                        'explanation': question.explanation
                    })
            
            # Calculate percentage
            percentage = (correct_count / total_questions * 100) if total_questions > 0 else 0
            
            # Save quiz attempt
            UserQuizAttempt.objects.create(
                user=request.user,
                course_id=course_id,
                score=percentage,
                total_questions=total_questions,
                correct_answers=correct_count
            )
            
            # Check for achievements
            self.check_achievements(request.user, course_id, percentage)
            
            result_data = {
                'score': correct_count,
                'total_questions': total_questions,
                'correct_answers': correct_count,
                'percentage': percentage,
                'details': details
            }
            
            return Response(result_data, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def check_achievements(self, user, course_id, percentage):
        """Check and award achievements"""
        # Quiz Master achievement (score >= 90%)
        if percentage >= 90:
            achievement, created = Achievement.objects.get_or_create(
                condition_type='quiz_master',
                condition_value=90,
                defaults={
                    'name': 'Quiz Master',
                    'description': 'Score 90% or higher on a quiz',
                    'icon': '🎯'
                }
            )
            
            if created or not UserAchievement.objects.filter(user=user, achievement=achievement).exists():
                UserAchievement.objects.create(user=user, achievement=achievement)
        
        # Course completion achievement
        completed_modules = UserProgress.objects.filter(
            user=user,
            course_id=course_id,
            completed=True
        ).count()
        
        total_modules = Module.objects.filter(course_id=course_id).count()
        
        if completed_modules == total_modules and total_modules > 0:
            achievement, created = Achievement.objects.get_or_create(
                condition_type='course_complete',
                condition_value=1,
                defaults={
                    'name': 'Course Completer',
                    'description': 'Complete an entire course',
                    'icon': '🏆'
                }
            )
            
            if created or not UserAchievement.objects.filter(user=user, achievement=achievement).exists():
                UserAchievement.objects.create(user=user, achievement=achievement)

class UpdateProgressView(APIView):
    """Update user progress for a module"""
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        serializer = ProgressUpdateSerializer(data=request.data)
        if serializer.is_valid():
            course_id = serializer.validated_data['course_id']
            module_id = serializer.validated_data['module_id']
            completed = serializer.validated_data['completed']
            
            # Update or create progress record
            progress, created = UserProgress.objects.update_or_create(
                user=request.user,
                course_id=course_id,
                module_id=module_id,
                defaults={
                    'completed': completed,
                    'completed_at': timezone.now() if completed else None
                }
            )
            
            # Check for module completion achievement
            if completed:
                completed_count = UserProgress.objects.filter(
                    user=request.user,
                    completed=True
                ).count()
                
                # Achievement for completing X modules
                if completed_count >= 5:
                    achievement, created = Achievement.objects.get_or_create(
                        condition_type='module_count',
                        condition_value=5,
                        defaults={
                            'name': 'Quick Learner',
                            'description': 'Complete 5 modules',
                            'icon': '🚀'
                        }
                    )
                    
                    if created or not UserAchievement.objects.filter(user=request.user, achievement=achievement).exists():
                        UserAchievement.objects.create(user=request.user, achievement=achievement)
            
            return Response({
                'message': 'Progress updated successfully',
                'progress_id': progress.id
            }, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserProgressView(generics.ListAPIView):
    """Get user's overall progress"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CourseSerializer
    
    def get_queryset(self):
        # Get courses where user has progress
        return Course.objects.filter(
            is_active=True,
            user_progress__user=self.request.user
        ).distinct()
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

class AchievementsView(generics.ListAPIView):
    """Get user's achievements"""
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = AchievementSerializer
    
    def get_queryset(self):
        return Achievement.objects.all()
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

class DashboardStatsView(APIView):
    """Get dashboard statistics for the user"""
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        user = request.user
        
        # Calculate stats
        total_courses = Course.objects.filter(is_active=True).count()
        enrolled_courses = UserProgress.objects.filter(user=user).values('course').distinct().count()
        completed_modules = UserProgress.objects.filter(user=user, completed=True).count()
        total_modules = Module.objects.count()
        
        # Calculate overall progress
        if total_modules > 0:
            overall_progress = int((completed_modules / total_modules) * 100)
        else:
            overall_progress = 0
        
        # Get latest quiz attempts
        latest_attempts = UserQuizAttempt.objects.filter(user=user).order_by('-attempted_at')[:5]
        quiz_accuracy = latest_attempts.aggregate(avg_score=Avg('score'))['avg_score'] or 0
        
        # Get achievements count
        achievements_count = UserAchievement.objects.filter(user=user).count()
        total_achievements = Achievement.objects.count()
        
        # Calculate learning streak (simplified - last 7 days with activity)
        from datetime import timedelta
        from django.utils import timezone
        
        seven_days_ago = timezone.now() - timedelta(days=7)
        recent_activity = UserProgress.objects.filter(
            user=user,
            last_accessed__gte=seven_days_ago
        ).dates('last_accessed', 'day').distinct().count()
        
        return Response({
            'total_courses': total_courses,
            'enrolled_courses': enrolled_courses,
            'completed_modules': completed_modules,
            'total_modules': total_modules,
            'overall_progress': overall_progress,
            'quiz_accuracy': quiz_accuracy,
            'achievements_earned': achievements_count,
            'total_achievements': total_achievements,
            'learning_streak': recent_activity,
            'level': min(10, completed_modules // 5 + 1)  # Simple level calculation
        }, status=status.HTTP_200_OK)