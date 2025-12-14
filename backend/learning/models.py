from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=100, default='Programming')
    difficulty = models.CharField(max_length=20, choices=[
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced')
    ], default='beginner')
    estimated_time = models.IntegerField(help_text="Estimated minutes to complete", default=60)
    order = models.IntegerField(default=0, help_text="Display order")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'created_at']

    def __str__(self):
        return self.title

class Module(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='modules')
    title = models.CharField(max_length=200)
    content = models.TextField(help_text="Main lesson content (Markdown supported)")
    code_example = models.TextField(blank=True, help_text="Code example (optional)")
    order = models.IntegerField(default=0)
    estimated_time = models.IntegerField(default=10, help_text="Minutes to complete")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order']
        unique_together = ['course', 'order']

    def __str__(self):
        return f"{self.course.title} - {self.title}"

class QuizQuestion(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='quiz_questions')
    question = models.TextField()
    option_1 = models.CharField(max_length=200)
    option_2 = models.CharField(max_length=200)
    option_3 = models.CharField(max_length=200, blank=True)
    option_4 = models.CharField(max_length=200, blank=True)
    correct_option = models.IntegerField(choices=[
        (1, 'Option 1'),
        (2, 'Option 2'),
        (3, 'Option 3'),
        (4, 'Option 4')
    ])
    explanation = models.TextField(help_text="Explanation for the correct answer")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Q: {self.question[:50]}..."

class UserProgress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='learning_progress')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='user_progress')
    module = models.ForeignKey(Module, on_delete=models.CASCADE, null=True, blank=True)
    completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(null=True, blank=True)
    quiz_score = models.IntegerField(default=0, help_text="Score out of 100")
    last_accessed = models.DateTimeField(auto_now=True)
    
    class Meta:
        unique_together = ['user', 'course', 'module']
        verbose_name_plural = 'User Progress'

    def __str__(self):
        return f"{self.user.email} - {self.course.title}"

class UserQuizAttempt(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='quiz_attempts')
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    score = models.IntegerField(help_text="Score percentage")
    total_questions = models.IntegerField()
    correct_answers = models.IntegerField()
    attempted_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-attempted_at']

    def __str__(self):
        return f"{self.user.email} - {self.course.title} - {self.score}%"

class Achievement(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.CharField(max_length=50, default="🏆")
    condition_type = models.CharField(max_length=50, choices=[
        ('course_complete', 'Complete a Course'),
        ('quiz_master', 'Quiz Master (90%+ score)'),
        ('streak', 'Learning Streak'),
        ('module_count', 'Complete X Modules')
    ])
    condition_value = models.IntegerField(default=1)
    
    def __str__(self):
        return self.name

class UserAchievement(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='achievements')
    achievement = models.ForeignKey(Achievement, on_delete=models.CASCADE)
    earned_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ['user', 'achievement']

    def __str__(self):
        return f"{self.user.email} - {self.achievement.name}"