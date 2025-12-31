// frontend/src/components/DashboardContent.jsx
import React, { useState, useEffect, useMemo } from 'react';
import {
  Home,
  BookOpen,
  TrendingUp,
  Award,
  Calendar,
  Clock,
  Code,
  Brain,
  Shield,
  Zap,
  Target,
  ChevronRight,
  CheckCircle,
  Star,
  BarChart3,
  X,
  ChevronLeft,
  PlayCircle,
  Lock,
  Loader2,
  ArrowLeft,
  Check,
  FileText,
  Terminal,
  AlertCircle,
  Trophy,
  Users,
  Bookmark,
  Flame,
  Target as TargetIcon,
  PieChart,
  BarChart,
  TrendingUp as TrendingUpIcon,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import learningService from '../services/learningService';
import authService from '../services/authService';

const DashboardContent = ({
  darkMode,
  sidebarOpen,
  setSidebarOpen,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  // View states
  const [currentView, setCurrentView] = useState('dashboard');
  
  // State for real data
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  
  // Learning flow states
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modules, setModules] = useState([]);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [isCurrentModuleCompleted, setIsCurrentModuleCompleted] = useState(false);
  const [moduleLoading, setModuleLoading] = useState(false);
  const [showCompletionSuccess, setShowCompletionSuccess] = useState(false);
  const [showCourseCompletionModal, setShowCourseCompletionModal] = useState(false);
  
  // Quiz states
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizResults, setQuizResults] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  
  // UI states
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('alphabetical');
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [expandedCourseId, setExpandedCourseId] = useState(null);
  
  const [error, setError] = useState(null);
  const [completedModulesCount, setCompletedModulesCount] = useState(0);

  // Fetch all data on component mount
  useEffect(() => {
    fetchDashboardData();
    const userData = authService.getCurrentUser();
    setCurrentUser(userData);
  }, []);

  // Update completed modules count when modules change
  useEffect(() => {
    if (modules.length > 0) {
      const count = modules.filter(m => m?.is_completed).length;
      setCompletedModulesCount(count);
    }
  }, [modules]);

  // Handle completion success animation
  useEffect(() => {
    if (showCompletionSuccess) {
      const timer = setTimeout(() => {
        setShowCompletionSuccess(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showCompletionSuccess]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [coursesData, statsData, achievementsData] = await Promise.all([
        learningService.getCourses(),
        learningService.getDashboardStats(),
        learningService.getAchievements()
      ]);
      
      setCourses(coursesData || []);
      setStats(statsData || {});
      setAchievements(achievementsData || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setError('Failed to load dashboard data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Reset all states when returning to dashboard - WITH SCROLL TO TOP
  const resetToDashboard = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView('dashboard');
    setSelectedCourse(null);
    setModules([]);
    setCurrentModuleIndex(0);
    setQuizQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setQuizResults(null);
    setSelectedAnswers({});
    setShowCourseCompletionModal(false);
    setExpandedCourseId(null);
  };

  // Get user display name
  const getUserDisplayName = () => {
    if (!currentUser) return 'Learner';
    
    if (currentUser.first_name && currentUser.first_name.trim()) {
      if (currentUser.last_name && currentUser.last_name.trim()) {
        return `${currentUser.first_name} ${currentUser.last_name}`;
      }
      return currentUser.first_name;
    }
    if (currentUser.fullName && currentUser.fullName.trim()) {
      return currentUser.fullName;
    }
    return currentUser.email?.split('@')[0] || 'Learner';
  };

  // Toggle course expansion
  const toggleCourseExpansion = (courseId) => {
    setExpandedCourseId(expandedCourseId === courseId ? null : courseId);
  };

  // Start learning a course - WITH SCROLL TO TOP
  const startLearning = async (courseId, moduleIndex = 0) => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      const course = courses.find(c => c.id === courseId);
      if (!course) return;
      
      setSelectedCourse(course);
      const modulesData = await learningService.getModules(courseId);
      setModules(modulesData || []);
      setCurrentModuleIndex(moduleIndex);
      
      // Check if current module is already completed
      const currentModule = modulesData?.[moduleIndex];
      setIsCurrentModuleCompleted(currentModule?.is_completed || false);
      
      setCurrentView('learning');
      setShowCourseCompletionModal(false);
      setExpandedCourseId(null);
    } catch (error) {
      console.error('Error starting learning:', error);
      alert('Failed to load course modules. Please try again.');
    }
  };

  // Start quiz for a course - WITH SCROLL TO TOP
  const startQuiz = async (courseId) => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      const course = courses.find(c => c.id === courseId);
      if (!course) return;
      
      setSelectedCourse(course);
      const questions = await learningService.getQuizQuestions(courseId);
      setQuizQuestions(questions || []);
      setCurrentQuestion(0);
      setScore(0);
      setQuizResults(null);
      setSelectedAnswers({});
      setCurrentView('quiz');
      setExpandedCourseId(null);
      
    } catch (error) {
      console.error('Error starting quiz:', error);
      alert('Failed to load quiz questions. Please try again.');
    }
  };

  // Mark current module as completed
  const markModuleCompleted = async () => {
    try {
      setModuleLoading(true);
      const currentModule = modules[currentModuleIndex];
      
      if (!currentModule || !selectedCourse) return;
      
      // Update backend
      await learningService.updateProgress(
        selectedCourse.id,
        currentModule.id,
        true
      );
      
      // Show success animation
      setShowCompletionSuccess(true);
      
      // Update frontend state IMMEDIATELY
      const updatedModules = [...modules];
      updatedModules[currentModuleIndex] = {
        ...currentModule,
        is_completed: true
      };
      setModules(updatedModules);
      
      // Update completed count IMMEDIATELY
      const newCount = completedModulesCount + 1;
      setCompletedModulesCount(newCount);
      
      // Update current module completion status
      setIsCurrentModuleCompleted(true);
      
      // Refresh dashboard data to update progress
      await fetchDashboardData();
      
      // Check if this was the last module
      const isLastModule = currentModuleIndex === modules.length - 1;
      
      if (isLastModule) {
        // For last module, show course completion modal after delay
        setTimeout(() => {
          setShowCourseCompletionModal(true);
        }, 1500);
      } else {
        // For non-last modules, auto-advance after delay
        setTimeout(() => {
          nextModule();
        }, 1500);
      }
      
    } catch (error) {
      console.error('Error marking module complete:', error);
      alert('Failed to mark module as completed. Please try again.');
    } finally {
      setModuleLoading(false);
    }
  };

  // Go to next module - WITH SCROLL TO TOP
  const nextModule = () => {
    if (currentModuleIndex < modules.length - 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      const nextIndex = currentModuleIndex + 1;
      setCurrentModuleIndex(nextIndex);
      
      // Check if the next module is already completed
      const nextModule = modules[nextIndex];
      setIsCurrentModuleCompleted(nextModule?.is_completed || false);
    }
  };

  // Go to previous module - WITH SCROLL TO TOP
  const previousModule = () => {
    if (currentModuleIndex > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      const prevIndex = currentModuleIndex - 1;
      setCurrentModuleIndex(prevIndex);
      
      // Check if the previous module is already completed
      const prevModule = modules[prevIndex];
      setIsCurrentModuleCompleted(prevModule?.is_completed || false);
    }
  };

  // Handle quiz answer selection
  const handleQuizAnswerSelect = (questionIndex, optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
  };

  // Submit quiz answers - WITH SCROLL TO TOP
  const submitQuiz = async () => {
    try {
      // Prepare answers in format expected by backend
      const answers = quizQuestions.map((q, index) => ({
        question_id: q.id,
        selected_option: (selectedAnswers[index] || 0) + 1
      }));
      
      const results = await learningService.submitQuiz(selectedCourse.id, answers);
      setQuizResults(results);
      setScore(results.correct_answers);
      
      // Scroll to top after submission
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Refresh dashboard data
      await fetchDashboardData();
    } catch (error) {
      console.error('Error submitting quiz:', error);
      alert('Failed to submit quiz. Please try again.');
    }
  };

  // Retake quiz - WITH SCROLL TO TOP
  const retakeQuiz = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setQuizResults(null);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers({});
  };

  // Get current module
  const currentModule = modules[currentModuleIndex];

  // Calculate if all modules are completed
  const allModulesCompleted = modules.length > 0 && completedModulesCount === modules.length;

  // Get next recommended course
  const getNextRecommendedCourse = () => {
    if (!courses || courses.length === 0) return null;
    
    // First, find courses in progress
    const inProgressCourse = courses.find(course => {
      const progress = (course.completed_modules / course.total_modules) * 100;
      return progress > 0 && progress < 100;
    });
    
    if (inProgressCourse) return inProgressCourse;
    
    // If no courses in progress, find first not started course
    const notStartedCourse = courses.find(course => 
      course.completed_modules === 0
    );
    
    return notStartedCourse || courses[0];
  };

  // Get course color based on category
  const getCourseColor = (course) => {
    if (!course) return { 
      bg: 'bg-gray-500',
      text: 'text-gray-700 dark:text-gray-300',
      border: 'border-gray-200 dark:border-gray-700',
      icon: <BookOpen className="text-gray-700 dark:text-gray-300" />
    };
    
    const courseCategory = course.category || '';
    
    const colors = {
      'web development': { 
        bg: 'bg-blue-500',
        text: 'text-blue-700 dark:text-blue-300',
        border: 'border-blue-200 dark:border-blue-800',
        icon: <Code className="text-blue-700 dark:text-blue-300" />
      },
      'ai & machine learning': { 
        bg: 'bg-purple-500',
        text: 'text-purple-700 dark:text-purple-300',
        border: 'border-purple-200 dark:border-purple-800',
        icon: <Brain className="text-purple-700 dark:text-purple-300" />
      },
      'cybersecurity': { 
        bg: 'bg-red-500',
        text: 'text-red-700 dark:text-red-300',
        border: 'border-red-200 dark:border-red-800',
        icon: <Shield className="text-red-700 dark:text-red-300" />
      },
      'programming': { 
        bg: 'bg-green-500',
        text: 'text-green-700 dark:text-green-300',
        border: 'border-green-200 dark:border-green-800',
        icon: <Code className="text-green-700 dark:text-green-300" />
      },
      'data science': { 
        bg: 'bg-indigo-500',
        text: 'text-indigo-700 dark:text-indigo-300',
        border: 'border-indigo-200 dark:border-indigo-800',
        icon: <TrendingUp className="text-indigo-700 dark:text-indigo-300" />
      }
    };
    
    const categoryLower = courseCategory.toLowerCase();
    return colors[categoryLower] || { 
      bg: 'bg-gray-500',
      text: 'text-gray-700 dark:text-gray-300',
      border: 'border-gray-200 dark:border-gray-700',
      icon: <BookOpen className="text-gray-700 dark:text-gray-300" />
    };
  };

  // Get status badge for a course
  const getStatusBadge = (course) => {
    if (!course) return { 
      text: 'Not Started', 
      className: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700',
      icon: <Clock size={14} className="mr-1" />
    };
    
    const completionRatio = course.total_modules > 0 
      ? course.completed_modules / course.total_modules 
      : 0;
    
    if (Math.abs(completionRatio - 1) < 0.01) {
      return { 
        text: 'Completed', 
        className: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 border border-green-200 dark:border-green-800',
        icon: <CheckCircle size={14} className="mr-1" />
      };
    } else if (completionRatio > 0) {
      return { 
        text: 'In Progress', 
        className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 border border-blue-200 dark:border-blue-800',
        icon: <TrendingUpIcon size={14} className="mr-1" />
      };
    } else {
      return { 
        text: 'Not Started', 
        className: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700',
      icon: <Clock size={14} className="mr-1" />
      };
    }
  };

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    if (!courses || courses.length === 0) return [];
    
    // Filter courses based on search and status
    const filtered = courses.filter(course => {
      if (!course) return false;
      
      const courseTitle = course.title || '';
      const courseDescription = course.description || '';
      const courseCategory = course.category || '';
      const searchLower = searchQuery.toLowerCase();
      
      const matchesSearch = searchQuery === '' || 
        courseTitle.toLowerCase().includes(searchLower) ||
        courseDescription.toLowerCase().includes(searchLower) ||
        courseCategory.toLowerCase().includes(searchLower);
      
      const completionRatio = course.total_modules > 0 
        ? course.completed_modules / course.total_modules 
        : 0;
      
      let status = 'not-started';
      if (Math.abs(completionRatio - 1) < 0.01) status = 'completed';
      else if (completionRatio > 0) status = 'in-progress';
      
      const matchesStatus = filterStatus === 'all' || 
                           (filterStatus === 'completed' && status === 'completed') ||
                           (filterStatus === 'in-progress' && status === 'in-progress') ||
                           (filterStatus === 'not-started' && status === 'not-started');
      
      return matchesSearch && matchesStatus;
    });
    
    // Sort filtered courses
    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'alphabetical':
          return (a.title || '').localeCompare(b.title || '');
        case 'progress':
          const progressA = (a.completed_modules / (a.total_modules || 1)) * 100;
          const progressB = (b.completed_modules / (b.total_modules || 1)) * 100;
          return progressB - progressA;
        case 'recent':
          return new Date(b.created_at) - new Date(a.created_at);
        default:
          return 0;
      }
    });
  }, [courses, searchQuery, filterStatus, sortBy]);

  // Calculate overall progress
  const overallProgress = stats?.overall_progress || 0;

  // Loading state
  if (loading) {
    return (
      <div className={`flex items-center justify-center min-h-[60vh] ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} select-none`}>
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Loading your learning dashboard...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={`flex items-center justify-center min-h-[60vh] ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} select-none`}>
        <div className="text-center max-w-md mx-4">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Unable to Load Dashboard</h3>
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{error}</p>
          <button
            onClick={fetchDashboardData}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Learning Mode
  if (currentView === 'learning' && selectedCourse && currentModule) {
    const courseColor = getCourseColor(selectedCourse);
    const isLastModule = currentModuleIndex === modules.length - 1;
    
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-4 md:p-6 select-none`}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={resetToDashboard}
              className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors select-none`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </button>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none`}>
              Module {currentModuleIndex + 1} of {modules.length}
            </div>
          </div>

          {/* Course Info Card */}
          <div className={`rounded-xl p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} select-none`}>
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div className="flex-1 mb-4 md:mb-0">
                <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>{selectedCourse.title}</h1>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none`}>{selectedCourse.description}</p>
              </div>
              <div className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} border ${courseColor.border} select-none`}>
                <span className={`font-medium ${courseColor.text} select-none`}>{selectedCourse.category}</span>
              </div>
            </div>

            {/* Module Progress Dots */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4 select-none">
                {modules.map((module, index) => {
                  if (!module) return null;
                  const isCompleted = module.is_completed;
                  const isCurrent = index === currentModuleIndex;
                  
                  return (
                    <button
                      key={module.id || index}
                      onClick={() => {
                        if (index !== currentModuleIndex) {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          setCurrentModuleIndex(index);
                          setIsCurrentModuleCompleted(module.is_completed || false);
                        }
                      }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all select-none ${
                        isCurrent 
                          ? 'bg-blue-600 text-white ring-2 ring-blue-300 dark:ring-blue-700 shadow-lg' 
                          : isCompleted
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 hover:scale-110'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:scale-110'
                      }`}
                      title={`Module ${index + 1}: ${module.title} ${isCompleted ? '(Completed)' : ''}`}
                    >
                      {isCompleted ? <Check className="h-5 w-5" /> : index + 1}
                    </button>
                  );
                })}
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm select-none">
                <span className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Clock className="h-4 w-4 mr-1" />
                  {currentModule.estimated_time || 10} min
                </span>
                <span className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <FileText className="h-4 w-4 mr-1" />
                  {completedModulesCount} of {modules.length} modules completed
                </span>
                <span className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {Math.round((completedModulesCount / (modules.length || 1)) * 100)}% complete
                </span>
              </div>
            </div>

            {/* Module Progress Bar */}
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1 select-none">
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Module Progress</span>
                <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none`}>{Math.round((completedModulesCount / (modules.length || 1)) * 100)}%</span>
              </div>
              <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                  style={{ width: `${(completedModulesCount / (modules.length || 1)) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Module Content Card */}
          <div className={`rounded-xl p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className={`text-xl md:text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>{currentModule.title}</h2>
                <div className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none`}>
                  <Clock className="h-4 w-4 mr-1" />
                  Estimated time: {currentModule.estimated_time || 10} minutes
                </div>
              </div>
              {isCurrentModuleCompleted && (
                <span className="flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 select-none">
                  <Check className="h-4 w-4 mr-1" />
                  Completed
                </span>
              )}
            </div>

            {/* Lesson Content - ALLOW TEXT SELECTION HERE ONLY */}
            <div className="mb-8" style={{ userSelect: 'text' }}>
              <div className={`whitespace-pre-line leading-relaxed text-lg ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {currentModule.content}
              </div>
            </div>

            {/* Code Example - ALLOW TEXT SELECTION HERE ONLY */}
            {currentModule.code_example && (
              <div className="mb-8" style={{ userSelect: 'text' }}>
                <div className="flex items-center mb-4">
                  <Terminal className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Code Example</h3>
                </div>
                <div className={`p-4 rounded-lg border ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                  <pre className="overflow-x-auto">
                    <code className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                      {currentModule.code_example}
                    </code>
                  </pre>
                </div>
              </div>
            )}

            {/* Completion Success Animation */}
            {showCompletionSuccess && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-2xl animate-scale-up select-none">
                  <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                    <Check className="h-12 w-12 text-green-600 dark:text-green-400 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Module Completed! 🎉</h3>
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
                    {isLastModule ? 'Course completed!' : 'Moving to next module...'}
                  </p>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto overflow-hidden">
                    <div className="h-full bg-green-500 animate-progress"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Course Completion Modal */}
            {showCourseCompletionModal && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 p-4">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-2xl max-w-md w-full animate-scale-up select-none">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 flex items-center justify-center mx-auto mb-6">
                    <Trophy className="h-12 w-12 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Course Completed! 🎊
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
                    Congratulations! You've completed all {modules.length} modules of "{selectedCourse.title}".
                  </p>
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-8">
                    Ready to test your knowledge with a quiz?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={resetToDashboard}
                      className="px-5 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors select-none"
                    >
                      Return to Dashboard
                    </button>
                    <button
                      onClick={() => {
                        setShowCourseCompletionModal(false);
                        startQuiz(selectedCourse.id);
                      }}
                      className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 transition-colors flex items-center justify-center select-none"
                    >
                      <Brain className="h-5 w-5 mr-2" />
                      Take Quiz Now
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between pt-6 border-t dark:border-gray-700 gap-4">
              <button
                onClick={previousModule}
                disabled={currentModuleIndex === 0}
                className={`px-6 py-3 rounded-lg flex items-center justify-center select-none ${
                  currentModuleIndex === 0
                    ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
                }`}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Previous Module
              </button>

              <div className="flex flex-col sm:flex-row gap-3">
                {!isCurrentModuleCompleted ? (
                  <button
                    onClick={markModuleCompleted}
                    disabled={moduleLoading || showCompletionSuccess}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed select-none"
                  >
                    {moduleLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : showCompletionSuccess ? (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        Completed!
                      </>
                    ) : (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        Mark as Completed
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={isLastModule ? () => setShowCourseCompletionModal(true) : nextModule}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center justify-center transition-colors select-none"
                  >
                    {isLastModule ? (
                      <>
                        Finish Course
                        <Trophy className="h-5 w-5 ml-2" />
                      </>
                    ) : (
                      <>
                        Next Module
                        <ChevronRight className="h-5 w-5 ml-2" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Mode
  if (currentView === 'quiz' && selectedCourse) {
    const currentQuizQuestion = quizQuestions[currentQuestion];
    const isLastQuestion = currentQuestion === quizQuestions.length - 1;
    
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-4 md:p-6 select-none`}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={resetToDashboard}
              className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors select-none`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </button>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none`}>
              Question {currentQuestion + 1} of {quizQuestions.length}
            </div>
          </div>

          {/* Quiz Card */}
          <div className={`rounded-xl p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} select-none`}>
            <div className="mb-6">
              <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>Quiz: {selectedCourse.title}</h1>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none`}>Test your knowledge of {selectedCourse.category}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2 select-none">
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Progress</span>
                <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none`}>
                  Score: <span className="text-blue-600 dark:text-blue-400">{score}</span>
                </span>
              </div>
              <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Quiz Results View WITH ANSWER EXPLANATIONS */}
            {quizResults ? (
              <div>
                <div className="text-center py-8">
                  <div className={`w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center ${
                    quizResults.percentage >= 70 
                      ? 'bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-4 border-green-200 dark:border-green-800' 
                      : 'bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border-4 border-yellow-200 dark:border-yellow-800'
                  }`}>
                    {quizResults.percentage >= 70 ? (
                      <Trophy className="h-16 w-16 text-green-600 dark:text-green-400" />
                    ) : (
                      <Brain className="h-16 w-16 text-yellow-600 dark:text-yellow-400" />
                    )}
                  </div>
                  
                  <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
                    {quizResults.percentage >= 70 ? 'Quiz Passed! 🎉' : 'Good Effort! 💪'}
                  </h2>
                  <p className={`text-xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none`}>
                    You scored <span className="font-bold">{quizResults.correct_answers}</span> out of <span className="font-bold">{quizResults.total_questions}</span> questions
                  </p>
                  
                  <div className={`text-5xl font-bold mb-8 ${
                    quizResults.percentage >= 90 ? 'text-green-600 dark:text-green-400' :
                    quizResults.percentage >= 70 ? 'text-blue-600 dark:text-blue-400' :
                    quizResults.percentage >= 50 ? 'text-yellow-600 dark:text-yellow-400' :
                    'text-red-600 dark:text-red-400'
                  } select-none`}>
                    {quizResults.percentage.toFixed(0)}%
                  </div>
                </div>

                {/* Question Breakdown with Explanations */}
                <div className="mb-8">
                  <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>Question Breakdown</h3>
                  <div className="space-y-4">
                    {quizResults.details?.map((detail, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg ${
                          detail.is_correct 
                            ? darkMode ? 'bg-green-900/30 border border-green-800' : 'bg-green-50 border border-green-200'
                            : darkMode ? 'bg-red-900/30 border border-red-800' : 'bg-red-50 border border-red-200'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className={`font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} select-none`}>Question {index + 1}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            detail.is_correct 
                              ? darkMode ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-800'
                              : darkMode ? 'bg-red-800 text-red-200' : 'bg-red-100 text-red-800'
                          } select-none`}>
                            {detail.is_correct ? 'Correct ✓' : 'Incorrect ✗'}
                          </span>
                        </div>
                        <p className={`text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'} select-none`}>
                          <span className="font-medium">Your answer:</span> Option {String.fromCharCode(64 + detail.selected_option)}
                          {!detail.is_correct && (
                            <span className={`ml-2 ${darkMode ? 'text-green-300' : 'text-green-700'} select-none`}>
                              (Correct: Option {String.fromCharCode(64 + detail.correct_option)})
                            </span>
                          )}
                        </p>
                        {!detail.is_correct && detail.explanation && (
                          <div className={`mt-2 p-3 rounded ${darkMode ? 'bg-gray-700/70' : 'bg-gray-100'}`}>
                            <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-blue-300' : 'text-blue-700'} select-none`}>Explanation:</p>
                            <p className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`} style={{ userSelect: 'text' }}>
                              {detail.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    )) || (
                      <div className="text-center py-4">
                        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>No quiz details available</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 pt-6 border-t dark:border-gray-700">
                  <button
                    onClick={resetToDashboard}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors select-none"
                  >
                    Return to Dashboard
                  </button>
                  
                  {quizResults.percentage < 70 && (
                    <button
                      onClick={retakeQuiz}
                      className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 transition-colors select-none"
                    >
                      Retake Quiz
                    </button>
                  )}
                  
                  <button
                    onClick={() => startLearning(selectedCourse.id)}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors select-none"
                  >
                    Review Course
                  </button>
                </div>
              </div>
            ) : (
              /* Quiz Question View */
              <>
                <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
                  {currentQuizQuestion?.question || 'Question not available'}
                </h3>
                
                <div className="space-y-3 mb-8">
                  {currentQuizQuestion?.options?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswerSelect(currentQuestion, index)}
                      className={`w-full text-left p-4 rounded-lg border transition-all select-none ${
                        selectedAnswers[currentQuestion] === index
                          ? darkMode 
                            ? 'border-blue-500 bg-blue-900/30' 
                            : 'border-blue-400 bg-blue-50'
                          : darkMode 
                            ? 'border-gray-700 hover:border-blue-500 hover:bg-blue-900/20 text-gray-300' 
                            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-800'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center mr-4 ${
                          selectedAnswers[currentQuestion] === index
                            ? 'border-blue-500 bg-blue-500 text-white'
                            : darkMode ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-700'
                        } select-none`}>
                          <span className="font-medium">{String.fromCharCode(65 + index)}</span>
                        </div>
                        <span className={`${darkMode ? 'text-gray-200' : 'text-gray-800'} select-none`}>{option || 'Option not available'}</span>
                      </div>
                    </button>
                  )) || <p className={darkMode ? 'text-gray-500' : 'text-gray-600'}>No options available</p>}
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      if (currentQuestion > 0) {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setCurrentQuestion(prev => prev - 1);
                      }
                    }}
                    disabled={currentQuestion === 0}
                    className={`px-6 py-3 rounded-lg select-none ${
                      currentQuestion === 0
                        ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800 text-gray-400'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    Previous
                  </button>
                  
                  {!isLastQuestion ? (
                    <button
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setCurrentQuestion(prev => prev + 1);
                      }}
                      disabled={selectedAnswers[currentQuestion] === undefined}
                      className={`px-6 py-3 rounded-lg select-none ${
                        selectedAnswers[currentQuestion] === undefined
                          ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800 text-gray-400'
                          : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800'
                      }`}
                    >
                      Next Question
                    </button>
                  ) : (
                    <button
                      onClick={submitQuiz}
                      disabled={selectedAnswers[currentQuestion] === undefined}
                      className={`px-6 py-3 rounded-lg select-none ${
                        selectedAnswers[currentQuestion] === undefined
                          ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800 text-gray-400'
                          : 'bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800'
                      }`}
                    >
                      Submit Quiz
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Dashboard View (Main Content)
  return (
    <div className="flex select-none">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className={`w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'} min-h-screen sticky top-16 hidden md:block select-none`}>
          <div className="p-6">
            <h2 className={`font-semibold text-lg mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
              <Home size={20} className="mr-3" />
              Navigation
            </h2>
            <nav className="space-y-2 mb-8 select-none">
              <a href="#" className={`flex items-center p-3 rounded-lg ${darkMode ? 'bg-blue-900/30 text-blue-300 border border-blue-800' : 'bg-blue-50 text-blue-700 border border-blue-200'} select-none`}>
                <BookOpen size={20} className="mr-3" />
                Learning Dashboard
              </a>
              <a href="#" className={`flex items-center p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} select-none`}>
                <BarChart size={20} className="mr-3" />
                Progress Analytics
              </a>
              <a href="#" className={`flex items-center p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} select-none`}>
                <Award size={20} className="mr-3" />
                Achievements
              </a>
              <a href="#" className={`flex items-center p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} select-none`}>
                <Calendar size={20} className="mr-3" />
                Study Plan
              </a>
            </nav>

            {/* Progress Overview */}
            <div className="mb-8 select-none">
              <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>Progress Overview</h3>
              <div className="space-y-4 select-none">
                <div>
                  <div className="flex justify-between text-sm mb-1 select-none">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Overall Progress</span>
                    <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none`}>{overallProgress}%</span>
                  </div>
                  <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                      style={{ width: `${overallProgress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between select-none">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Completed Modules</span>
                  <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none`}>
                    {stats?.completed_modules || 0}/{stats?.total_modules || 0}
                  </span>
                </div>
                <div className="flex items-center justify-between select-none">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Learning Streak</span>
                  <span className={`font-semibold flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none`}>
                    <Flame size={16} className="mr-1 text-orange-500" />
                    {stats?.learning_streak || 0} days
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="select-none">
              <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>Recent Achievements</h3>
              <div className="space-y-2 select-none">
                {achievements.slice(0, 3).map(achievement => {
                  if (!achievement) return null;
                  return (
                    <div key={achievement.id} className={`flex items-center p-3 rounded-lg ${darkMode ? achievement.is_earned ? 'bg-yellow-900/20 border border-yellow-800' : 'bg-gray-700' : achievement.is_earned ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-100'} ${!achievement.is_earned && 'opacity-60'} select-none`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${achievement.is_earned ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200' : 'bg-gray-200 text-gray-400 dark:bg-gray-600 dark:text-gray-500'} select-none`}>
                        <span className="text-lg">{achievement.icon || '🏆'}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium text-sm truncate ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>{achievement.name || 'Achievement'}</p>
                        <p className={`text-xs truncate ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none`}>{achievement.description || ''}</p>
                      </div>
                      {achievement.is_earned && <CheckCircle size={16} className="ml-2 text-green-500 flex-shrink-0" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main className={`flex-1 p-4 md:p-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} select-none`}>
        {/* Welcome Section */}
        <div className={`rounded-2xl p-6 md:p-8 mb-8 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50/80'} border ${darkMode ? 'border-blue-800/30' : 'border-blue-200'} shadow-lg select-none`}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
                Welcome back, {getUserDisplayName()} 👋
              </h1>
              <p className={`mb-6 text-lg ${darkMode ? 'text-blue-200' : 'text-blue-800'} select-none`}>
                {stats?.completed_modules || 0} modules completed • Level {stats?.level || 1}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 select-none">
                <div className="flex items-center select-none">
                  <div className={`w-32 ${darkMode ? 'bg-blue-800/40' : 'bg-blue-100'} rounded-full h-3 mr-3`}>
                    <div 
                      className={`h-3 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} transition-all duration-500`}
                      style={{ width: `${overallProgress}%` }}
                    ></div>
                  </div>
                  <span className={`text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-800'} select-none`}>
                    {overallProgress}% Overall Progress
                  </span>
                </div>
                <span className={`flex items-center text-sm ${darkMode ? 'text-blue-300' : 'text-blue-800'} select-none`}>
                  <Trophy size={18} className="mr-2" />
                  {stats?.achievements_earned || 0} Achievements Earned
                </span>
              </div>
            </div>
            <button 
              onClick={() => {
                const nextCourse = getNextRecommendedCourse();
                if (nextCourse) startLearning(nextCourse.id);
              }}
              disabled={!courses || courses.length === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg select-none ${
                !courses || courses.length === 0 
                  ? 'opacity-50 cursor-not-allowed bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400' 
                  : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white'
              }`}
            >
              {!courses || courses.length === 0 ? 'No Courses Available' : 'Continue Learning'}
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 select-none">
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none`}>
            <div className="flex items-center select-none">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mr-3`}>
                <BookOpen className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none`}>Active Courses</p>
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>{stats?.enrolled_courses || 0}</p>
              </div>
            </div>
          </div>
          
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none`}>
            <div className="flex items-center select-none">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-100'} mr-3`}>
                <CheckCircle className={`h-6 w-6 ${darkMode ? 'text-green-400' : 'text-green-700'}`} />
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none`}>Completed Modules</p>
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>{stats?.completed_modules || 0}</p>
              </div>
            </div>
          </div>
          
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none`}>
            <div className="flex items-center select-none">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'} mr-3`}>
                <Brain className={`h-6 w-6 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`} />
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none`}>Quiz Accuracy</p>
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>{stats?.quiz_accuracy?.toFixed(0) || 0}%</p>
              </div>
            </div>
          </div>
          
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none`}>
            <div className="flex items-center select-none">
              <div className={`p-2 rounded-lg ${darkMode ? 'bg-yellow-900/30' : 'bg-yellow-100'} mr-3`}>
                <Award className={`h-6 w-6 ${darkMode ? 'text-yellow-400' : 'text-yellow-700'}`} />
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none`}>Learning Level</p>
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>{stats?.level || 1}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Best Action */}
        {courses && courses.length > 0 && (
          <div className={`mb-8 p-5 rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50/80 border-blue-200'} border shadow-lg select-none`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mr-4`}>
                  <TargetIcon className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg mb-1 ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>Continue Your Learning Journey</h3>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    Based on your progress, we recommend continuing with your next course.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => {
                  const nextCourse = getNextRecommendedCourse();
                  if (nextCourse) startLearning(nextCourse.id);
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg select-none"
              >
                Start Learning Now
              </button>
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-6 select-none">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex-1">
              <div className="relative flex items-center">
                <Search className="absolute left-3 text-gray-400 dark:text-gray-500" size={20} />
                <input
                  type="text"
                  placeholder="Search courses by title, description, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && setSearchFocused(true)}
                  className={`w-full pl-10 pr-24 py-3 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-800 text-gray-200' : 'border-gray-200 bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500 select-text`}
                  style={{ userSelect: 'text' }}
                />
                <div className="absolute right-0 flex">
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="p-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 select-none"
                    >
                      <X size={20} />
                    </button>
                  )}
                  <button
                    onClick={() => setSearchFocused(!searchFocused)}
                    className={`px-4 py-3 rounded-r-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-colors select-none`}
                  >
                    <Search size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 select-none">
              {/* Sort Options - FIXED DARK/LIGHT THEME VISIBILITY */}
              <div className="relative">
                <button
                  onClick={() => setShowSortOptions(!showSortOptions)}
                  className={`flex items-center px-4 py-2.5 rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800 hover:bg-gray-700' : 'border-gray-300 bg-white hover:bg-gray-50'} transition-colors select-none`}
                >
                  {sortBy === 'alphabetical' ? <SortAsc size={16} className="mr-2" /> :
                   sortBy === 'progress' ? <TrendingUpIcon size={16} className="mr-2" /> :
                   <SortDesc size={16} className="mr-2" />}
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'} select-none>
                    {sortBy === 'alphabetical' ? 'A-Z' :
                     sortBy === 'progress' ? 'Progress' : 'Recent'}
                  </span>
                </button>
                
                {showSortOptions && (
                  <div className={`absolute left-0 right-0 mt-1 rounded-lg shadow-lg border py-1 z-50 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-blue-50 border-blue-200'} select-none`}>
                    <button
                      onClick={() => { setSortBy('alphabetical'); setShowSortOptions(false); }}
                      className={`flex items-center w-full px-3 py-2 text-left text-sm ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-blue-100'} ${sortBy === 'alphabetical' ? (darkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-800') : (darkMode ? 'text-gray-300' : 'text-gray-700')} select-none`}
                    >
                      <SortAsc size={14} className="mr-3" />
                      Alphabetical (A-Z)
                    </button>
                    <button
                      onClick={() => { setSortBy('progress'); setShowSortOptions(false); }}
                      className={`flex items-center w-full px-3 py-2 text-left text-sm ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-blue-100'} ${sortBy === 'progress' ? (darkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-800') : (darkMode ? 'text-gray-300' : 'text-gray-700')} select-none`}
                    >
                      <TrendingUpIcon size={14} className="mr-3" />
                      Progress (Highest)
                    </button>
                    <button
                      onClick={() => { setSortBy('recent'); setShowSortOptions(false); }}
                      className={`flex items-center w-full px-3 py-2 text-left text-sm ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-blue-100'} ${sortBy === 'recent' ? (darkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-800') : (darkMode ? 'text-gray-300' : 'text-gray-700')} select-none`}
                    >
                      <SortDesc size={14} className="mr-3" />
                      Recently Added
                    </button>
                  </div>
                )}
              </div>

              {/* Status Filter */}
              <div className="flex overflow-x-auto select-none">
                {['all', 'in-progress', 'completed', 'not-started'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`px-4 py-2.5 text-sm font-medium capitalize whitespace-nowrap ${filterStatus === status 
                      ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700 border border-blue-300' 
                      : darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } ${status === 'all' ? 'rounded-l-lg' : ''} ${status === 'not-started' ? 'rounded-r-lg' : ''} select-none`}
                  >
                    {status === 'all' ? 'All' : 
                     status === 'in-progress' ? 'In Progress' : 
                     status.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Courses Section - PROFESSIONAL VERTICAL LAYOUT WITH BLUE HOVER EFFECTS */}
        <div className="mb-8 select-none">
          <div className="flex items-center justify-between mb-6 select-none">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>My Learning Courses</h2>
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'} select-none>
              {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
            </span>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-12 select-none">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>No courses found</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'} select-none>
                {searchQuery ? 'Try a different search term' : 'No courses available yet'}
              </p>
            </div>
          ) : (
            <div className="space-y-1 select-none">
              {filteredCourses.map((course) => {
                if (!course) return null;
                const courseColor = getCourseColor(course);
                const statusBadge = getStatusBadge(course);
                const isExpanded = expandedCourseId === course.id;
                const progressPercentage = course.total_modules > 0 
                  ? (course.completed_modules / course.total_modules) * 100 
                  : 0;
                
                return (
                  <div
                    key={course.id}
                    className={`border ${darkMode ? 'border-gray-700' : 'border-gray-200'} ${isExpanded ? 'rounded-lg' : 'rounded-lg'} overflow-hidden transition-all duration-300 select-none hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md`}
                  >
                    {/* Course Title Row - Click to Expand WITH BLUE HOVER EFFECT */}
                    <button
                      onClick={() => toggleCourseExpansion(course.id)}
                      className={`w-full text-left px-6 py-4 flex items-center justify-between ${darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-blue-50/30'} transition-colors border-b ${isExpanded ? (darkMode ? 'border-gray-700' : 'border-blue-200') : 'border-transparent'} group`}
                    >
                      <div className="flex items-center flex-1 min-w-0">
                        <div className={`p-2 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mr-3 border ${courseColor.border} group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-colors`}>
                          {courseColor.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-lg font-semibold truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {course.title || 'Untitled Course'}
                          </h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className={`text-xs px-2 py-1 rounded-full flex items-center ${statusBadge.className}`}>
                              {statusBadge.icon}
                              {statusBadge.text}
                            </span>
                            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                              {course.category}
                            </span>
                            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                              <Clock size={10} className="mr-1" />
                              {course.estimated_time || 60} min
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center ml-4">
                        <div className="w-24 h-2 rounded-full bg-gray-200 dark:bg-gray-700 mr-4">
                          <div 
                            className={`h-full rounded-full ${progressPercentage === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                        <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} w-10 text-right group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                          {Math.round(progressPercentage)}%
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="ml-3 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" size={20} />
                        ) : (
                          <ChevronDown className="ml-3 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" size={20} />
                        )}
                      </div>
                    </button>

                    {/* Expanded Content - FIXED DARK/LIGHT THEME VISIBILITY */}
                    {isExpanded && (
                      <div className={`px-6 py-4 ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-blue-50/30 border-blue-100'} border-t`}>
                        {/* Course Description */}
                        <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {course.description || 'No description available'}
                        </p>

                        {/* Quick Actions */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-4">
                          <button
                            onClick={() => startLearning(course.id)}
                            className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors flex items-center justify-center text-sm font-medium flex-1"
                          >
                            {course.completed_modules === course.total_modules ? 'Review Course' : 
                            (course.completed_modules || 0) > 0 ? 'Continue Learning' : 'Start Learning'}
                            <BookOpen size={16} className="ml-2" />
                          </button>
                          
                          {(course.completed_modules || 0) > 0 && (
                            <button
                              onClick={() => startQuiz(course.id)}
                              className="px-4 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 transition-colors flex items-center justify-center text-sm font-medium"
                            >
                              <Brain size={16} className="mr-2" />
                              Take Quiz
                            </button>
                          )}
                        </div>

                        {/* Modules List */}
                        <div className="mb-4">
                          <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Modules ({course.completed_modules || 0}/{course.total_modules || 0} completed)
                          </h4>
                          <div className="space-y-2">
                            {Array.from({ length: course.total_modules || 0 }).map((_, index) => {
                              const moduleNumber = index + 1;
                              const isCompleted = index < (course.completed_modules || 0);
                              return (
                                <button
                                  key={index}
                                  onClick={() => startLearning(course.id, index)}
                                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-blue-100/50'} transition-colors hover:text-blue-600 dark:hover:text-blue-400`}
                                >
                                  <div className="flex items-center">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${isCompleted ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}>
                                      {isCompleted ? <Check size={12} /> : moduleNumber}
                                    </div>
                                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                      Module {moduleNumber}
                                    </span>
                                  </div>
                                  <ChevronRight size={16} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Progress Details */}
                        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} flex justify-between`}>
                          <span>{course.completed_modules || 0}/{course.total_modules || 0} modules completed</span>
                          <span>{Math.round(progressPercentage)}% overall progress</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Progress Analytics */}
        <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none`}>
          <h2 className={`text-2xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
            <BarChart3 size={24} className="mr-3" />
            Learning Analytics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-blue-50'} border ${darkMode ? 'border-gray-600' : 'border-blue-100'}`}>
              <div className="flex items-center">
                <Clock size={20} className="mr-3 text-blue-700 dark:text-blue-400" />
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} select-none`}>Total Study Time</p>
                  <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>{Math.round((stats?.completed_modules || 0) * 15)} min</p>
                </div>
              </div>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-green-50'} border ${darkMode ? 'border-gray-600' : 'border-green-100'}`}>
              <div className="flex items-center">
                <CheckCircle size={20} className="mr-3 text-green-700 dark:text-green-400" />
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} select-none`}>Quiz Accuracy</p>
                  <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>{stats?.quiz_accuracy?.toFixed(1) || 0}%</p>
                </div>
              </div>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-purple-50'} border ${darkMode ? 'border-gray-600' : 'border-purple-100'}`}>
              <div className="flex items-center">
                <Award size={20} className="mr-3 text-purple-700 dark:text-purple-400" />
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} select-none`}>Achievements</p>
                  <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>{stats?.achievements_earned || 0}/{stats?.total_achievements || 0}</p>
                </div>
              </div>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-orange-50'} border ${darkMode ? 'border-gray-600' : 'border-orange-100'}`}>
              <div className="flex items-center">
                <Flame size={20} className="mr-3 text-orange-700 dark:text-orange-400" />
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} select-none`}>Learning Streak</p>
                  <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>{stats?.learning_streak || 0} days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardContent;