from django.urls import path
from .views import (
    CourseListView, CourseDetailView, ModuleListView,
    QuizQuestionsView, SubmitQuizView, UpdateProgressView,
    UserProgressView, AchievementsView, DashboardStatsView
)

urlpatterns = [
    path('courses/', CourseListView.as_view(), name='course-list'),
    path('courses/<int:pk>/', CourseDetailView.as_view(), name='course-detail'),
    path('courses/<int:course_id>/modules/', ModuleListView.as_view(), name='module-list'),
    path('courses/<int:course_id>/quiz/', QuizQuestionsView.as_view(), name='quiz-questions'),
    path('quiz/submit/', SubmitQuizView.as_view(), name='submit-quiz'),
    path('progress/update/', UpdateProgressView.as_view(), name='update-progress'),
    path('progress/user/', UserProgressView.as_view(), name='user-progress'),
    path('achievements/', AchievementsView.as_view(), name='achievements'),
    path('dashboard/stats/', DashboardStatsView.as_view(), name='dashboard-stats'),
    
]