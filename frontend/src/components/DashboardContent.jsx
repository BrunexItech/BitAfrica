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
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} px-2 xs:px-3 sm:px-4 md:p-6 select-none overflow-x-hidden`}>
        <div className="max-w-full sm:max-w-4xl mx-auto">
          {/* Header - MOBILE FIX: Better stacking and text handling */}
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 mb-4 xs:mb-6">
            <button
              onClick={resetToDashboard}
              className={`flex items-center justify-center xs:justify-start ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors select-none text-xs xs:text-sm sm:text-base w-full xs:w-auto`}
            >
              <ArrowLeft className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 mr-1 xs:mr-2" />
              <span className="truncate">Back to Dashboard</span>
            </button>
            <div className={`text-xs xs:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none text-center xs:text-right whitespace-nowrap`}>
              Module {currentModuleIndex + 1} of {modules.length}
            </div>
          </div>

          {/* Course Info Card - MOBILE FIX: Better text wrapping */}
          <div className={`rounded-lg xs:rounded-xl sm:rounded-xl p-3 xs:p-4 sm:p-6 mb-4 xs:mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} select-none overflow-hidden`}>
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 mb-3 xs:mb-4">
              <div className="flex-1 min-w-0">
                <h1 className={`text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-1 xs:mb-2 break-words ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
                  {selectedCourse.title}
                </h1>
                <p className={`mb-3 xs:mb-4 text-xs xs:text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none break-words`}>
                  {selectedCourse.description}
                </p>
              </div>
              <div className={`px-2 xs:px-3 sm:px-4 py-1 xs:py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} border ${courseColor.border} select-none flex-shrink-0 self-start max-w-full overflow-hidden`}>
                <span className={`font-medium text-xs xs:text-sm sm:text-base ${courseColor.text} select-none truncate block`}>
                  {selectedCourse.category}
                </span>
              </div>
            </div>

            {/* Module Progress Dots - MOBILE FIX: Better wrapping */}
            <div className="mb-4 xs:mb-6">
              <div className="flex flex-wrap justify-center xs:justify-start gap-1 xs:gap-1.5 sm:gap-2 mb-3 xs:mb-4 select-none">
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
                      className={`w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs font-medium transition-all select-none flex-shrink-0 ${
                        isCurrent 
                          ? 'bg-blue-600 text-white ring-1 xs:ring-2 ring-blue-300 dark:ring-blue-700 shadow-lg' 
                          : isCompleted
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 hover:scale-110'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:scale-110'
                      }`}
                      title={`Module ${index + 1}: ${module.title} ${isCompleted ? '(Completed)' : ''}`}
                    >
                      {isCompleted ? <Check className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" /> : index + 1}
                    </button>
                  );
                })}
              </div>
              
              <div className="flex flex-wrap items-center justify-center xs:justify-start gap-2 xs:gap-3 text-xs select-none">
                <span className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'} whitespace-nowrap`}>
                  <Clock className="h-3 w-3 xs:h-4 xs:w-4 mr-1 flex-shrink-0" />
                  {currentModule.estimated_time || 10} min
                </span>
                <span className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'} whitespace-nowrap`}>
                  <FileText className="h-3 w-3 xs:h-4 xs:w-4 mr-1 flex-shrink-0" />
                  <span className="hidden xs:inline">{completedModulesCount} of {modules.length} modules completed</span>
                  <span className="xs:hidden">{completedModulesCount}/{modules.length} modules</span>
                </span>
                <span className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'} whitespace-nowrap`}>
                  <TrendingUp className="h-3 w-3 xs:h-4 xs:w-4 mr-1 flex-shrink-0" />
                  {Math.round((completedModulesCount / (modules.length || 1)) * 100)}% complete
                </span>
              </div>
            </div>

            {/* Module Progress Bar */}
            <div className="mb-2">
              <div className="flex justify-between text-xs xs:text-sm mb-1 select-none">
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Module Progress</span>
                <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none`}>
                  {Math.round((completedModulesCount / (modules.length || 1)) * 100)}%
                </span>
              </div>
              <div className={`h-1.5 xs:h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                  style={{ width: `${(completedModulesCount / (modules.length || 1)) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Module Content Card - MOBILE FIX: Better text handling */}
          <div className={`rounded-lg xs:rounded-xl sm:rounded-xl p-3 xs:p-4 sm:p-6 mb-4 xs:mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}>
            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 xs:gap-3 mb-4 xs:mb-6">
              <div className="flex-1 min-w-0">
                <h2 className={`text-base xs:text-lg sm:text-xl md:text-2xl font-bold mb-1 xs:mb-2 break-words ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
                  {currentModule.title}
                </h2>
                <div className={`flex items-center text-xs xs:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none whitespace-nowrap`}>
                  <Clock className="h-3 w-3 xs:h-4 xs:w-4 mr-1 flex-shrink-0" />
                  Estimated time: {currentModule.estimated_time || 10} minutes
                </div>
              </div>
              {isCurrentModuleCompleted && (
                <span className="flex items-center px-2 xs:px-3 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 select-none text-xs xs:text-sm self-start xs:self-auto whitespace-nowrap mt-2 xs:mt-0">
                  <Check className="h-3 w-3 xs:h-4 xs:w-4 mr-1 flex-shrink-0" />
                  Completed
                </span>
              )}
            </div>

            {/* Lesson Content - ALLOW TEXT SELECTION HERE ONLY */}
            <div className="mb-4 xs:mb-6 sm:mb-8" style={{ userSelect: 'text' }}>
              <div className={`whitespace-pre-line leading-relaxed text-sm xs:text-base sm:text-lg break-words ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {currentModule.content}
              </div>
            </div>

            {/* Code Example - MOBILE FIX: Better overflow handling */}
            {currentModule.code_example && (
              <div className="mb-4 xs:mb-6 sm:mb-8" style={{ userSelect: 'text' }}>
                <div className="flex items-center mb-2 xs:mb-3 sm:mb-4">
                  <Terminal className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 mr-2 xs:mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <h3 className={`text-sm xs:text-base sm:text-lg font-semibold break-words ${darkMode ? 'text-white' : 'text-gray-900'}`}>Code Example</h3>
                </div>
                <div className={`p-2 xs:p-3 sm:p-4 rounded-lg border ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} overflow-auto`}>
                  <pre className="overflow-x-auto text-xs xs:text-sm">
                    <code className={`break-all ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                      {currentModule.code_example}
                    </code>
                  </pre>
                </div>
              </div>
            )}

            {/* Completion Success Animation - MOBILE FIX: Better modal sizing */}
            {showCompletionSuccess && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-2 xs:p-3 sm:p-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 md:p-8 text-center shadow-2xl animate-scale-up select-none w-full max-w-[90vw] xs:max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-6">
                    <Check className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-green-600 dark:text-green-400 animate-bounce" />
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 xs:mb-2 break-words">Module Completed! 🎉</h3>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 xs:mb-4 sm:mb-6 break-words">
                    {isLastModule ? 'Course completed!' : 'Moving to next module...'}
                  </p>
                  <div className="w-20 xs:w-24 sm:w-32 h-1 xs:h-1.5 sm:h-2 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto overflow-hidden">
                    <div className="h-full bg-green-500 animate-progress"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Course Completion Modal - MOBILE FIX: Better modal sizing */}
            {showCourseCompletionModal && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 p-2 xs:p-3 sm:p-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 md:p-8 text-center shadow-2xl max-w-[90vw] xs:max-w-xs sm:max-w-sm md:max-w-md w-full animate-scale-up select-none">
                  <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-6">
                    <Trophy className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 xs:mb-2 sm:mb-3 break-words">
                    Course Completed! 🎊
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-2 xs:mb-3 sm:mb-4 break-words">
                    Congratulations! You've completed all {modules.length} modules of "{selectedCourse.title}".
                  </p>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 xs:mb-4 sm:mb-6 md:mb-8 break-words">
                    Ready to test your knowledge with a quiz?
                  </p>
                  <div className="flex flex-col gap-1 xs:gap-2 sm:gap-3">
                    <button
                      onClick={resetToDashboard}
                      className="px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors select-none text-xs xs:text-sm sm:text-base break-words"
                    >
                      Return to Dashboard
                    </button>
                    <button
                      onClick={() => {
                        setShowCourseCompletionModal(false);
                        startQuiz(selectedCourse.id);
                      }}
                      className="px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 transition-colors flex items-center justify-center select-none text-xs xs:text-sm sm:text-base break-words"
                    >
                      <Brain className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 mr-1 xs:mr-2 flex-shrink-0" />
                      Take Quiz Now
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons - MOBILE FIX: Better stacking */}
            <div className="flex flex-col sm:flex-row justify-between pt-4 xs:pt-6 border-t dark:border-gray-700 gap-2 xs:gap-3 sm:gap-4">
              <button
                onClick={previousModule}
                disabled={currentModuleIndex === 0}
                className={`px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg flex items-center justify-center select-none text-xs xs:text-sm sm:text-base w-full sm:w-auto ${
                  currentModuleIndex === 0
                    ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
                }`}
              >
                <ArrowLeft className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 mr-1 xs:mr-2 flex-shrink-0" />
                <span className="truncate">Previous Module</span>
              </button>

              <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 w-full sm:w-auto">
                {!isCurrentModuleCompleted ? (
                  <button
                    onClick={markModuleCompleted}
                    disabled={moduleLoading || showCompletionSuccess}
                    className="px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed select-none text-xs xs:text-sm sm:text-base w-full"
                  >
                    {moduleLoading ? (
                      <>
                        <Loader2 className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 mr-1 xs:mr-2 animate-spin flex-shrink-0" />
                        <span className="truncate">Saving...</span>
                      </>
                    ) : showCompletionSuccess ? (
                      <>
                        <Check className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 mr-1 xs:mr-2 flex-shrink-0" />
                        <span className="truncate">Completed!</span>
                      </>
                    ) : (
                      <>
                        <Check className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 mr-1 xs:mr-2 flex-shrink-0" />
                        <span className="truncate">Mark as Completed</span>
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={isLastModule ? () => setShowCourseCompletionModal(true) : nextModule}
                    className="px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center justify-center transition-colors select-none text-xs xs:text-sm sm:text-base w-full"
                  >
                    {isLastModule ? (
                      <>
                        <span className="truncate">Finish Course</span>
                        <Trophy className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 ml-1 xs:ml-2 flex-shrink-0" />
                      </>
                    ) : (
                      <>
                        <span className="truncate">Next Module</span>
                        <ChevronRight className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 ml-1 xs:ml-2 flex-shrink-0" />
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
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} px-2 xs:px-3 sm:px-4 md:p-6 select-none overflow-x-hidden`}>
        <div className="max-w-full sm:max-w-4xl mx-auto">
          {/* Header - MOBILE FIX: Better stacking */}
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 mb-4 xs:mb-6">
            <button
              onClick={resetToDashboard}
              className={`flex items-center justify-center xs:justify-start ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors select-none text-xs xs:text-sm sm:text-base w-full xs:w-auto`}
            >
              <ArrowLeft className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 mr-1 xs:mr-2" />
              <span className="truncate">Back to Dashboard</span>
            </button>
            <div className={`text-xs xs:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none text-center xs:text-right whitespace-nowrap`}>
              Question {currentQuestion + 1} of {quizQuestions.length}
            </div>
          </div>

          {/* Quiz Card - MOBILE FIX: Better text handling */}
          <div className={`rounded-lg xs:rounded-xl sm:rounded-xl p-3 xs:p-4 sm:p-6 mb-4 xs:mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} select-none overflow-hidden`}>
            <div className="mb-4 xs:mb-6">
              <h1 className={`text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-1 xs:mb-2 break-words ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
                Quiz: {selectedCourse.title}
              </h1>
              <p className={`mb-3 xs:mb-4 text-xs xs:text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none break-words`}>
                Test your knowledge of {selectedCourse.category}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-4 xs:mb-6 sm:mb-8">
              <div className="flex justify-between text-xs xs:text-sm mb-1 xs:mb-2 select-none">
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Progress</span>
                <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none`}>
                  Score: <span className="text-blue-600 dark:text-blue-400">{score}</span>
                </span>
              </div>
              <div className={`h-1.5 xs:h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Quiz Results View WITH ANSWER EXPLANATIONS - MOBILE FIX: Better text wrapping */}
            {quizResults ? (
              <div>
                <div className="text-center py-4 xs:py-6 sm:py-8">
                  <div className={`w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full mx-auto mb-3 xs:mb-4 sm:mb-6 flex items-center justify-center ${
                    quizResults.percentage >= 70 
                      ? 'bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-2 xs:border-4 border-green-200 dark:border-green-800' 
                      : 'bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border-2 xs:border-4 border-yellow-200 dark:border-yellow-800'
                  }`}>
                    {quizResults.percentage >= 70 ? (
                      <Trophy className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-green-600 dark:text-green-400" />
                    ) : (
                      <Brain className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-yellow-600 dark:text-yellow-400" />
                    )}
                  </div>
                  
                  <h2 className={`text-xl xs:text-2xl sm:text-3xl font-bold mb-2 xs:mb-3 sm:mb-4 break-words ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
                    {quizResults.percentage >= 70 ? 'Quiz Passed! 🎉' : 'Good Effort! 💪'}
                  </h2>
                  <p className={`text-base xs:text-lg sm:text-xl mb-3 xs:mb-4 sm:mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none break-words`}>
                    You scored <span className="font-bold">{quizResults.correct_answers}</span> out of <span className="font-bold">{quizResults.total_questions}</span> questions
                  </p>
                  
                  <div className={`text-3xl xs:text-4xl sm:text-5xl font-bold mb-4 xs:mb-6 sm:mb-8 ${
                    quizResults.percentage >= 90 ? 'text-green-600 dark:text-green-400' :
                    quizResults.percentage >= 70 ? 'text-blue-600 dark:text-blue-400' :
                    quizResults.percentage >= 50 ? 'text-yellow-600 dark:text-yellow-400' :
                    'text-red-600 dark:text-red-400'
                  } select-none`}>
                    {quizResults.percentage.toFixed(0)}%
                  </div>
                </div>

                {/* Question Breakdown with Explanations - MOBILE FIX: Better text handling */}
                <div className="mb-4 xs:mb-6 sm:mb-8">
                  <h3 className={`text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4 sm:mb-6 break-words ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
                    Question Breakdown
                  </h3>
                  <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                    {quizResults.details?.map((detail, index) => (
                      <div 
                        key={index}
                        className={`p-2 xs:p-3 sm:p-4 rounded-lg ${
                          detail.is_correct 
                            ? darkMode ? 'bg-green-900/30 border border-green-800' : 'bg-green-50 border border-green-200'
                            : darkMode ? 'bg-red-900/30 border border-red-800' : 'bg-red-50 border border-red-200'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1 xs:mb-2">
                          <span className={`font-medium text-xs xs:text-sm sm:text-base break-words ${darkMode ? 'text-gray-100' : 'text-gray-900'} select-none`}>
                            Question {index + 1}
                          </span>
                          <span className={`text-xs px-1 xs:px-2 py-0.5 xs:py-1 rounded-full flex-shrink-0 ${
                            detail.is_correct 
                              ? darkMode ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-800'
                              : darkMode ? 'bg-red-800 text-red-200' : 'bg-red-100 text-red-800'
                          } select-none`}>
                            {detail.is_correct ? 'Correct ✓' : 'Incorrect ✗'}
                          </span>
                        </div>
                        <p className={`text-xs xs:text-sm mb-1 break-words ${darkMode ? 'text-gray-200' : 'text-gray-700'} select-none`}>
                          <span className="font-medium">Your answer:</span> Option {String.fromCharCode(64 + detail.selected_option)}
                          {!detail.is_correct && (
                            <span className={`ml-1 ${darkMode ? 'text-green-300' : 'text-green-700'} select-none`}>
                              (Correct: Option {String.fromCharCode(64 + detail.correct_option)})
                            </span>
                          )}
                        </p>
                        {!detail.is_correct && detail.explanation && (
                          <div className={`mt-1 xs:mt-2 p-2 xs:p-3 rounded ${darkMode ? 'bg-gray-700/70' : 'bg-gray-100'}`}>
                            <p className={`text-xs xs:text-sm font-medium mb-0.5 xs:mb-1 ${darkMode ? 'text-blue-300' : 'text-blue-700'} select-none`}>
                              Explanation:
                            </p>
                            <p className={`text-xs xs:text-sm break-words ${darkMode ? 'text-gray-200' : 'text-gray-700'}`} style={{ userSelect: 'text' }}>
                              {detail.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    )) || (
                      <div className="text-center py-4">
                        <p className={`text-xs xs:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          No quiz details available
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons - MOBILE FIX: Better stacking */}
                <div className="flex flex-col sm:flex-row justify-center gap-1 xs:gap-2 sm:gap-3 pt-4 xs:pt-6 border-t dark:border-gray-700">
                  <button
                    onClick={resetToDashboard}
                    className="px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors select-none text-xs xs:text-sm sm:text-base break-words"
                  >
                    Return to Dashboard
                  </button>
                  
                  {quizResults.percentage < 70 && (
                    <button
                      onClick={retakeQuiz}
                      className="px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 transition-colors select-none text-xs xs:text-sm sm:text-base break-words"
                    >
                      Retake Quiz
                    </button>
                  )}
                  
                  <button
                    onClick={() => startLearning(selectedCourse.id)}
                    className="px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors select-none text-xs xs:text-sm sm:text-base break-words"
                  >
                    Review Course
                  </button>
                </div>
              </div>
            ) : (
              /* Quiz Question View - MOBILE FIX: Better text wrapping */
              <>
                <h3 className={`text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4 sm:mb-6 break-words ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
                  {currentQuizQuestion?.question || 'Question not available'}
                </h3>
                
                <div className="space-y-1 xs:space-y-2 sm:space-y-3 mb-4 xs:mb-6 sm:mb-8">
                  {currentQuizQuestion?.options?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswerSelect(currentQuestion, index)}
                      className={`w-full text-left p-2 xs:p-3 sm:p-4 rounded-lg border transition-all select-none break-words ${
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
                        <div className={`w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center mr-2 xs:mr-3 sm:mr-4 flex-shrink-0 ${
                          selectedAnswers[currentQuestion] === index
                            ? 'border-blue-500 bg-blue-500 text-white'
                            : darkMode ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-700'
                        } select-none`}>
                          <span className="font-medium text-xs xs:text-sm sm:text-base">{String.fromCharCode(65 + index)}</span>
                        </div>
                        <span className={`text-xs xs:text-sm sm:text-base break-words ${darkMode ? 'text-gray-200' : 'text-gray-800'} select-none`}>
                          {option || 'Option not available'}
                        </span>
                      </div>
                    </button>
                  )) || <p className={`text-xs xs:text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'} text-center`}>No options available</p>}
                </div>
                
                <div className="flex flex-col xs:flex-row xs:justify-between gap-2 xs:gap-3">
                  <button
                    onClick={() => {
                      if (currentQuestion > 0) {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setCurrentQuestion(prev => prev - 1);
                      }
                    }}
                    disabled={currentQuestion === 0}
                    className={`px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg select-none text-xs xs:text-sm sm:text-base w-full xs:w-auto ${
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
                      className={`px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg select-none text-xs xs:text-sm sm:text-base w-full xs:w-auto ${
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
                      className={`px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg select-none text-xs xs:text-sm sm:text-base w-full xs:w-auto ${
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
    <div className="flex select-none overflow-x-hidden">
      {/* Sidebar - MOBILE FIX: Hidden on small screens */}
      {sidebarOpen && (
        <aside className={`w-48 lg:w-56 xl:w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'} min-h-screen sticky top-16 hidden lg:block select-none`}>
          <div className="p-4 lg:p-6">
            <h2 className={`font-semibold text-base lg:text-lg mb-4 lg:mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'} select-none break-words`}>
              <Home size={18} className="mr-2 lg:mr-3 flex-shrink-0" />
              Navigation
            </h2>
            <nav className="space-y-1 lg:space-y-2 mb-6 lg:mb-8 select-none">
              <a href="#" className={`flex items-center p-2 lg:p-3 rounded-lg ${darkMode ? 'bg-blue-900/30 text-blue-300 border border-blue-800' : 'bg-blue-50 text-blue-700 border border-blue-200'} select-none text-sm lg:text-base break-words`}>
                <BookOpen size={18} className="mr-2 lg:mr-3 flex-shrink-0" />
                Learning Dashboard
              </a>
              <a href="#" className={`flex items-center p-2 lg:p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} select-none text-sm lg:text-base break-words`}>
                <BarChart size={18} className="mr-2 lg:mr-3 flex-shrink-0" />
                Progress Analytics
              </a>
              <a href="#" className={`flex items-center p-2 lg:p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} select-none text-sm lg:text-base break-words`}>
                <Award size={18} className="mr-2 lg:mr-3 flex-shrink-0" />
                Achievements
              </a>
              <a href="#" className={`flex items-center p-2 lg:p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} select-none text-sm lg:text-base break-words`}>
                <Calendar size={18} className="mr-2 lg:mr-3 flex-shrink-0" />
                Study Plan
              </a>
            </nav>

            {/* Progress Overview */}
            <div className="mb-6 lg:mb-8 select-none">
              <h3 className={`font-semibold mb-3 lg:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} select-none text-sm lg:text-base break-words`}>Progress Overview</h3>
              <div className="space-y-3 lg:space-y-4 select-none">
                <div>
                  <div className="flex justify-between text-xs lg:text-sm mb-1 select-none">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Overall Progress</span>
                    <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none`}>{overallProgress}%</span>
                  </div>
                  <div className={`h-1.5 lg:h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                      style={{ width: `${overallProgress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between select-none">
                  <span className={`text-xs lg:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} break-words`}>Completed Modules</span>
                  <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none whitespace-nowrap`}>
                    {stats?.completed_modules || 0}/{stats?.total_modules || 0}
                  </span>
                </div>
                <div className="flex items-center justify-between select-none">
                  <span className={`text-xs lg:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} break-words`}>Learning Streak</span>
                  <span className={`font-semibold flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none whitespace-nowrap`}>
                    <Flame size={14} className="mr-1 text-orange-500 flex-shrink-0" />
                    {stats?.learning_streak || 0} days
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="select-none">
              <h3 className={`font-semibold mb-3 lg:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} select-none text-sm lg:text-base break-words`}>Recent Achievements</h3>
              <div className="space-y-1 lg:space-y-2 select-none">
                {achievements.slice(0, 3).map(achievement => {
                  if (!achievement) return null;
                  return (
                    <div key={achievement.id} className={`flex items-center p-2 lg:p-3 rounded-lg ${darkMode ? achievement.is_earned ? 'bg-yellow-900/20 border border-yellow-800' : 'bg-gray-700' : achievement.is_earned ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-100'} ${!achievement.is_earned && 'opacity-60'} select-none overflow-hidden`}>
                      <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mr-2 lg:mr-3 flex-shrink-0 ${achievement.is_earned ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200' : 'bg-gray-200 text-gray-400 dark:bg-gray-600 dark:text-gray-500'} select-none`}>
                        <span className="text-sm lg:text-lg">{achievement.icon || '🏆'}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium text-xs lg:text-sm truncate ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>{achievement.name || 'Achievement'}</p>
                        <p className={`text-xs truncate ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none`}>{achievement.description || ''}</p>
                      </div>
                      {achievement.is_earned && <CheckCircle size={14} className="ml-1 lg:ml-2 text-green-500 flex-shrink-0" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Main Content - MOBILE FIX: Better overflow handling */}
      <main className={`flex-1 px-2 xs:px-3 sm:px-4 md:p-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} select-none overflow-x-hidden`}>
        {/* Welcome Section - MOBILE FIX: Better text wrapping */}
        <div className={`rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 md:p-8 mb-4 xs:mb-6 sm:mb-8 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50/80'} border ${darkMode ? 'border-blue-800/30' : 'border-blue-200'} shadow-lg select-none overflow-hidden`}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 xs:gap-4 sm:gap-6">
            <div className="flex-1 min-w-0">
              <h1 className={`text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 xs:mb-2 sm:mb-3 break-words ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
                Welcome back, {getUserDisplayName()} 👋
              </h1>
              <p className={`mb-3 xs:mb-4 sm:mb-6 text-sm xs:text-base sm:text-lg ${darkMode ? 'text-blue-200' : 'text-blue-800'} select-none break-words`}>
                {stats?.completed_modules || 0} modules completed • Level {stats?.level || 1}
              </p>
              <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-3 sm:gap-4 select-none">
                <div className="flex items-center select-none min-w-0">
                  <div className={`w-20 xs:w-24 sm:w-28 md:w-32 ${darkMode ? 'bg-blue-800/40' : 'bg-blue-100'} rounded-full h-1.5 xs:h-2 sm:h-3 mr-2 xs:mr-3 flex-shrink-0`}>
                    <div 
                      className={`h-1.5 xs:h-2 sm:h-3 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} transition-all duration-500`}
                      style={{ width: `${overallProgress}%` }}
                    ></div>
                  </div>
                  <span className={`text-xs xs:text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-800'} select-none truncate`}>
                    {overallProgress}% Overall Progress
                  </span>
                </div>
                <span className={`flex items-center text-xs xs:text-sm ${darkMode ? 'text-blue-300' : 'text-blue-800'} select-none whitespace-nowrap`}>
                  <Trophy size={14} className="mr-1 xs:mr-2 flex-shrink-0" />
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
              className={`px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg select-none text-xs xs:text-sm sm:text-base w-full lg:w-auto mt-3 lg:mt-0 ${
                !courses || courses.length === 0 
                  ? 'opacity-50 cursor-not-allowed bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400' 
                  : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white'
              }`}
            >
              {!courses || courses.length === 0 ? 'No Courses Available' : 'Continue Learning'}
            </button>
          </div>
        </div>

        {/* Quick Stats - MOBILE FIX: Better grid and text handling */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-6 sm:mb-8 select-none">
          <div className={`p-2 xs:p-3 sm:p-4 rounded-lg xs:rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none overflow-hidden`}>
            <div className="flex items-center select-none">
              <div className={`p-1 xs:p-1.5 sm:p-2 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mr-2 xs:mr-3 flex-shrink-0`}>
                <BookOpen className={`h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />
              </div>
              <div className="min-w-0">
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none truncate`}>Active Courses</p>
                <p className={`text-lg xs:text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none truncate`}>{stats?.enrolled_courses || 0}</p>
              </div>
            </div>
          </div>
          
          <div className={`p-2 xs:p-3 sm:p-4 rounded-lg xs:rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none overflow-hidden`}>
            <div className="flex items-center select-none">
              <div className={`p-1 xs:p-1.5 sm:p-2 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-100'} mr-2 xs:mr-3 flex-shrink-0`}>
                <CheckCircle className={`h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 ${darkMode ? 'text-green-400' : 'text-green-700'}`} />
              </div>
              <div className="min-w-0">
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none truncate`}>Completed Modules</p>
                <p className={`text-lg xs:text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none truncate`}>{stats?.completed_modules || 0}</p>
              </div>
            </div>
          </div>
          
          <div className={`p-2 xs:p-3 sm:p-4 rounded-lg xs:rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none overflow-hidden`}>
            <div className="flex items-center select-none">
              <div className={`p-1 xs:p-1.5 sm:p-2 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'} mr-2 xs:mr-3 flex-shrink-0`}>
                <Brain className={`h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`} />
              </div>
              <div className="min-w-0">
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none truncate`}>Quiz Accuracy</p>
                <p className={`text-lg xs:text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none truncate`}>{stats?.quiz_accuracy?.toFixed(0) || 0}%</p>
              </div>
            </div>
          </div>
          
          <div className={`p-2 xs:p-3 sm:p-4 rounded-lg xs:rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none overflow-hidden`}>
            <div className="flex items-center select-none">
              <div className={`p-1 xs:p-1.5 sm:p-2 rounded-lg ${darkMode ? 'bg-yellow-900/30' : 'bg-yellow-100'} mr-2 xs:mr-3 flex-shrink-0`}>
                <Award className={`h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 ${darkMode ? 'text-yellow-400' : 'text-yellow-700'}`} />
              </div>
              <div className="min-w-0">
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none truncate`}>Learning Level</p>
                <p className={`text-lg xs:text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none truncate`}>{stats?.level || 1}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Best Action - MOBILE FIX: Better text wrapping */}
        {courses && courses.length > 0 && (
          <div className={`mb-4 xs:mb-6 sm:mb-8 p-3 xs:p-4 sm:p-5 rounded-lg xs:rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50/80 border-blue-200'} border shadow-lg select-none overflow-hidden`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 xs:gap-3 sm:gap-4">
              <div className="flex items-center mb-2 md:mb-0 min-w-0">
                <div className={`p-1.5 xs:p-2 sm:p-3 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mr-2 xs:mr-3 sm:mr-4 flex-shrink-0`}>
                  <TargetIcon className={`h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />
                </div>
                <div className="min-w-0">
                  <h3 className={`font-semibold text-sm xs:text-base sm:text-lg mb-0.5 xs:mb-1 break-words ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
                    Continue Your Learning Journey
                  </h3>
                  <p className={`text-xs xs:text-sm sm:text-base break-words ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Based on your progress, we recommend continuing with your next course.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => {
                  const nextCourse = getNextRecommendedCourse();
                  if (nextCourse) startLearning(nextCourse.id);
                }}
                className="px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg select-none text-xs xs:text-sm sm:text-base w-full md:w-auto mt-2 md:mt-0"
              >
                Start Learning Now
              </button>
            </div>
          </div>
        )}

        {/* Search and Filter - MOBILE FIX: Better layout */}
        <div className="mb-4 xs:mb-6 select-none">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 xs:mb-6">
            <div className="flex-1 min-w-0">
              <div className="relative flex items-center">
                <Search className="absolute left-2 xs:left-3 text-gray-400 dark:text-gray-500" size={16} />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && setSearchFocused(true)}
                  className={`w-full pl-7 xs:pl-9 sm:pl-10 pr-16 xs:pr-20 sm:pr-24 py-2 xs:py-2.5 sm:py-3 rounded-lg border text-xs xs:text-sm sm:text-base ${darkMode ? 'border-gray-700 bg-gray-800 text-gray-200' : 'border-gray-200 bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500 select-text break-words`}
                  style={{ userSelect: 'text' }}
                />
                <div className="absolute right-0 flex">
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="p-1.5 xs:p-2 sm:p-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 select-none"
                    >
                      <X size={16} />
                    </button>
                  )}
                  <button
                    onClick={() => setSearchFocused(!searchFocused)}
                    className={`px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 rounded-r-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-colors select-none`}
                  >
                    <Search size={16} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col xs:flex-row gap-1 xs:gap-2 select-none">
              {/* Sort Options - MOBILE FIX: Better dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowSortOptions(!showSortOptions)}
                  className={`flex items-center px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 rounded-lg border text-xs xs:text-sm ${darkMode ? 'border-gray-600 bg-gray-800 hover:bg-gray-700' : 'border-gray-300 bg-white hover:bg-gray-50'} transition-colors select-none w-full xs:w-auto`}
                >
                  {sortBy === 'alphabetical' ? <SortAsc size={12} className="mr-1 xs:mr-2" /> :
                   sortBy === 'progress' ? <TrendingUpIcon size={12} className="mr-1 xs:mr-2" /> :
                   <SortDesc size={12} className="mr-1 xs:mr-2" />}
                  <span className={`truncate ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none`}>
                    {sortBy === 'alphabetical' ? 'A-Z' :
                     sortBy === 'progress' ? 'Progress' : 'Recent'}
                  </span>
                </button>
                
                {showSortOptions && (
                  <div className={`absolute left-0 right-0 mt-1 rounded-lg shadow-lg border py-1 z-50 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-blue-50 border-blue-200'} select-none min-w-full`}>
                    <button
                      onClick={() => { setSortBy('alphabetical'); setShowSortOptions(false); }}
                      className={`flex items-center w-full px-2 xs:px-3 py-1.5 xs:py-2 text-left text-xs xs:text-sm ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-blue-100'} ${sortBy === 'alphabetical' ? (darkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-800') : (darkMode ? 'text-gray-300' : 'text-gray-700')} select-none break-words`}
                    >
                      <SortAsc size={10} className="mr-1 xs:mr-2 sm:mr-3 flex-shrink-0" />
                      Alphabetical (A-Z)
                    </button>
                    <button
                      onClick={() => { setSortBy('progress'); setShowSortOptions(false); }}
                      className={`flex items-center w-full px-2 xs:px-3 py-1.5 xs:py-2 text-left text-xs xs:text-sm ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-blue-100'} ${sortBy === 'progress' ? (darkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-800') : (darkMode ? 'text-gray-300' : 'text-gray-700')} select-none break-words`}
                    >
                      <TrendingUpIcon size={10} className="mr-1 xs:mr-2 sm:mr-3 flex-shrink-0" />
                      Progress (Highest)
                    </button>
                    <button
                      onClick={() => { setSortBy('recent'); setShowSortOptions(false); }}
                      className={`flex items-center w-full px-2 xs:px-3 py-1.5 xs:py-2 text-left text-xs xs:text-sm ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-blue-100'} ${sortBy === 'recent' ? (darkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-800') : (darkMode ? 'text-gray-300' : 'text-gray-700')} select-none break-words`}
                    >
                      <SortDesc size={10} className="mr-1 xs:mr-2 sm:mr-3 flex-shrink-0" />
                      Recently Added
                    </button>
                  </div>
                )}
              </div>

              {/* Status Filter - MOBILE FIX: Better scrolling */}
              <div className="flex overflow-x-auto pb-1 select-none gap-0.5">
                {['all', 'in-progress', 'completed', 'not-started'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 text-xs xs:text-sm font-medium capitalize whitespace-nowrap ${filterStatus === status 
                      ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700 border border-blue-300' 
                      : darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } ${status === 'all' ? 'rounded-l-lg' : ''} ${status === 'not-started' ? 'rounded-r-lg' : ''} select-none flex-shrink-0`}
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

        {/* Courses Section - MOBILE FIX: Better text handling */}
        <div className="mb-4 xs:mb-6 sm:mb-8 select-none">
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 xs:gap-2 mb-3 xs:mb-4 sm:mb-6 select-none">
            <h2 className={`text-lg xs:text-xl sm:text-2xl font-bold break-words ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
              My Learning Courses
            </h2>
            <span className={`text-xs xs:text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none whitespace-nowrap`}>
              {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
            </span>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-6 xs:py-8 sm:py-12 select-none">
              <BookOpen className="h-10 w-10 xs:h-12 xs:w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-2 xs:mb-3 sm:mb-4" />
              <h3 className={`text-base xs:text-lg sm:text-xl font-semibold mb-1 xs:mb-2 break-words ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
                No courses found
              </h3>
              <p className={`text-xs xs:text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'} select-none break-words`}>
                {searchQuery ? 'Try a different search term' : 'No courses available yet'}
              </p>
            </div>
          ) : (
            <div className="space-y-1.5 xs:space-y-1 select-none">
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
                    {/* Course Title Row - MOBILE FIX: Better layout */}
                    <button
                      onClick={() => toggleCourseExpansion(course.id)}
                      className={`w-full text-left px-3 xs:px-4 sm:px-6 py-2 xs:py-3 sm:py-4 flex items-center justify-between ${darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-blue-50/30'} transition-colors border-b ${isExpanded ? (darkMode ? 'border-gray-700' : 'border-blue-200') : 'border-transparent'} group overflow-hidden`}
                    >
                      <div className="flex items-center flex-1 min-w-0">
                        <div className={`p-1 xs:p-1.5 sm:p-2 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mr-2 xs:mr-3 border ${courseColor.border} group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-colors flex-shrink-0`}>
                          {courseColor.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-sm xs:text-base sm:text-lg font-semibold truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {course.title || 'Untitled Course'}
                          </h3>
                          <div className="flex flex-wrap items-center gap-1 xs:gap-2 mt-0.5 xs:mt-1">
                            <span className={`text-xs px-1 xs:px-1.5 sm:px-2 py-0.5 xs:py-1 rounded-full flex items-center ${statusBadge.className} truncate max-w-[100px] xs:max-w-none`}>
                              {statusBadge.icon}
                              <span className="truncate">{statusBadge.text}</span>
                            </span>
                            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate max-w-[80px] xs:max-w-none`}>
                              {course.category}
                            </span>
                            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap`}>
                              <Clock size={10} className="mr-0.5 flex-shrink-0" />
                              {course.estimated_time || 60} min
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center ml-1 xs:ml-2 sm:ml-4">
                        <div className="hidden xs:block w-12 xs:w-16 sm:w-20 md:w-24 h-1 xs:h-1.5 sm:h-2 rounded-full bg-gray-200 dark:bg-gray-700 mr-1 xs:mr-2 sm:mr-4 flex-shrink-0">
                          <div 
                            className={`h-full rounded-full ${progressPercentage === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                        <span className={`text-xs xs:text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} w-6 xs:w-8 sm:w-10 text-right group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap`}>
                          {Math.round(progressPercentage)}%
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="ml-0.5 xs:ml-1 sm:ml-3 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" size={16} />
                        ) : (
                          <ChevronDown className="ml-0.5 xs:ml-1 sm:ml-3 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" size={16} />
                        )}
                      </div>
                    </button>

                    {/* Expanded Content - MOBILE FIX: Better text handling */}
                    {isExpanded && (
                      <div className={`px-3 xs:px-4 sm:px-6 py-2 xs:py-3 sm:py-4 ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-blue-50/30 border-blue-100'} border-t`}>
                        {/* Course Description */}
                        <p className={`text-xs xs:text-sm mb-2 xs:mb-3 sm:mb-4 break-words ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {course.description || 'No description available'}
                        </p>

                        {/* Quick Actions - MOBILE FIX: Better stacking */}
                        <div className="flex flex-col sm:flex-row gap-1.5 xs:gap-2 sm:gap-3 mb-2 xs:mb-3 sm:mb-4">
                          <button
                            onClick={() => startLearning(course.id)}
                            className="px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors flex items-center justify-center text-xs xs:text-sm font-medium flex-1 break-words"
                          >
                            {course.completed_modules === course.total_modules ? 'Review Course' : 
                            (course.completed_modules || 0) > 0 ? 'Continue Learning' : 'Start Learning'}
                            <BookOpen size={12} className="ml-1 xs:ml-2 flex-shrink-0" />
                          </button>
                          
                          {(course.completed_modules || 0) > 0 && (
                            <button
                              onClick={() => startQuiz(course.id)}
                              className="px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 transition-colors flex items-center justify-center text-xs xs:text-sm font-medium break-words"
                            >
                              <Brain size={12} className="mr-1 xs:mr-2 flex-shrink-0" />
                              Take Quiz
                            </button>
                          )}
                        </div>

                        {/* Modules List - MOBILE FIX: Better spacing */}
                        <div className="mb-2 xs:mb-3 sm:mb-4">
                          <h4 className={`text-xs xs:text-sm font-semibold mb-1 xs:mb-2 break-words ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Modules ({course.completed_modules || 0}/{course.total_modules || 0} completed)
                          </h4>
                          <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                            {Array.from({ length: course.total_modules || 0 }).map((_, index) => {
                              const moduleNumber = index + 1;
                              const isCompleted = index < (course.completed_modules || 0);
                              return (
                                <button
                                  key={index}
                                  onClick={() => startLearning(course.id, index)}
                                  className={`w-full text-left px-2 xs:px-3 py-1 xs:py-1.5 sm:py-2 rounded-lg flex items-center justify-between ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-blue-100/50'} transition-colors hover:text-blue-600 dark:hover:text-blue-400 overflow-hidden`}
                                >
                                  <div className="flex items-center min-w-0">
                                    <div className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mr-1 xs:mr-2 sm:mr-3 flex-shrink-0 ${isCompleted ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}>
                                      {isCompleted ? <Check size={8} className="xs:h-2 xs:w-2 sm:h-3 sm:w-3" /> : moduleNumber}
                                    </div>
                                    <span className={`text-xs xs:text-sm truncate ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                      Module {moduleNumber}
                                    </span>
                                  </div>
                                  <ChevronRight size={12} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Progress Details - MOBILE FIX: Better stacking */}
                        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} flex flex-col xs:flex-row xs:justify-between gap-0.5 xs:gap-0`}>
                          <span className="truncate">{course.completed_modules || 0}/{course.total_modules || 0} modules completed</span>
                          <span className="truncate">{Math.round(progressPercentage)}% overall progress</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Progress Analytics - MOBILE FIX: Better grid */}
        <div className={`rounded-lg xs:rounded-xl sm:rounded-xl p-3 xs:p-4 sm:p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none overflow-hidden`}>
          <h2 className={`text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-6 flex items-center break-words ${darkMode ? 'text-white' : 'text-gray-900'} select-none`}>
            <BarChart3 size={18} className="mr-2 xs:mr-3 flex-shrink-0" />
            Learning Analytics
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 lg:gap-6 select-none">
            <div className={`p-2 xs:p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-blue-50'} border ${darkMode ? 'border-gray-600' : 'border-blue-100'} overflow-hidden`}>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 xs:mr-3 text-blue-700 dark:text-blue-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className={`text-xs xs:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} select-none truncate`}>Total Study Time</p>
                  <p className={`text-base xs:text-lg sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none truncate`}>
                    {Math.round((stats?.completed_modules || 0) * 15)} min
                  </p>
                </div>
              </div>
            </div>
            <div className={`p-2 xs:p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-green-50'} border ${darkMode ? 'border-gray-600' : 'border-green-100'} overflow-hidden`}>
              <div className="flex items-center">
                <CheckCircle size={16} className="mr-2 xs:mr-3 text-green-700 dark:text-green-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className={`text-xs xs:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} select-none truncate`}>Quiz Accuracy</p>
                  <p className={`text-base xs:text-lg sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none truncate`}>
                    {stats?.quiz_accuracy?.toFixed(1) || 0}%
                  </p>
                </div>
              </div>
            </div>
            <div className={`p-2 xs:p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-purple-50'} border ${darkMode ? 'border-gray-600' : 'border-purple-100'} overflow-hidden`}>
              <div className="flex items-center">
                <Award size={16} className="mr-2 xs:mr-3 text-purple-700 dark:text-purple-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className={`text-xs xs:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} select-none truncate`}>Achievements</p>
                  <p className={`text-base xs:text-lg sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none truncate`}>
                    {stats?.achievements_earned || 0}/{stats?.total_achievements || 0}
                  </p>
                </div>
              </div>
            </div>
            <div className={`p-2 xs:p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-orange-50'} border ${darkMode ? 'border-gray-600' : 'border-orange-100'} overflow-hidden`}>
              <div className="flex items-center">
                <Flame size={16} className="mr-2 xs:mr-3 text-orange-700 dark:text-orange-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className={`text-xs xs:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} select-none truncate`}>Learning Streak</p>
                  <p className={`text-base xs:text-lg sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} select-none truncate`}>
                    {stats?.learning_streak || 0} days
                  </p>
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