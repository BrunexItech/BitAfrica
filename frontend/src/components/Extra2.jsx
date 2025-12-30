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
  ChevronDown,
  ChevronUp,
  Filter,
  SortAsc,
  SortDesc,
  PartyPopper,
  Sparkles
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
  // State for real data
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  
  // Learning flow states
  const [learningMode, setLearningMode] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modules, setModules] = useState([]);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [isCurrentModuleCompleted, setIsCurrentModuleCompleted] = useState(false);
  const [moduleLoading, setModuleLoading] = useState(false);
  const [showCompletionSuccess, setShowCompletionSuccess] = useState(false);
  const [showCourseCompletionModal, setShowCourseCompletionModal] = useState(false);
  
  // Quiz states
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResults, setQuizResults] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  
  // UI states
  const [courseListView, setCourseListView] = useState('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('alphabetical');
  const [expandedLetters, setExpandedLetters] = useState(new Set());
  const [showSortOptions, setShowSortOptions] = useState(false);
  
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

  // Start learning a course - show modules first
  const startLearning = async (courseId) => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      const course = courses.find(c => c.id === courseId);
      if (!course) return;
      
      setSelectedCourse(course);
      const modulesData = await learningService.getModules(courseId);
      setModules(modulesData || []);
      setCurrentModuleIndex(0);
      
      // Check if current module is already completed
      const currentModule = modulesData?.[0];
      setIsCurrentModuleCompleted(currentModule?.is_completed || false);
      
      setLearningMode(true);
      setQuizStarted(false);
      setQuizCompleted(false);
      setQuizResults(null);
      setSelectedAnswers({});
      setCourseListView('detail');
      setShowCourseCompletionModal(false);
    } catch (error) {
      console.error('Error starting learning:', error);
      alert('Failed to load course modules. Please try again.');
    }
  };

  // Start quiz for a course - FIXED: Properly handles quiz start from any context
  const startQuiz = async (courseId) => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      const course = courses.find(c => c.id === courseId);
      if (!course) return;
      
      setSelectedCourse(course);
      const questions = await learningService.getQuizQuestions(courseId);
      setQuizQuestions(questions || []);
      setQuizStarted(true);
      setCurrentQuestion(0);
      setScore(0);
      setQuizCompleted(false);
      setQuizResults(null);
      setSelectedAnswers({});
      
      // FIXED: Only exit learning mode if we're currently in it
      if (learningMode) {
        setLearningMode(false);
      }
      
    } catch (error) {
      console.error('Error starting quiz:', error);
      alert('Failed to load quiz questions. Please try again.');
    }
  };

  // Open course detail view from list
  const openCourseDetail = (course) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedCourse(course);
    setCourseListView('detail');
  };

  // Return to course list view
  const backToCourseList = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedCourse(null);
    setCourseListView('list');
  };

  // Toggle letter expansion
  const toggleLetterExpansion = (letter) => {
    setExpandedLetters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(letter)) {
        newSet.delete(letter);
      } else {
        newSet.add(letter);
      }
      return newSet;
    });
  };

  // Mark current module as completed - WITH SMOOTH TRANSITION & REAL-TIME UPDATE
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

  // Go to next module
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

  // Go to previous module
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

  // Show course completion modal and handle quiz start
  const handleCourseCompletion = () => {
    setShowCourseCompletionModal(true);
  };

  // Handle quiz answer selection
  const handleQuizAnswerSelect = (questionIndex, optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
  };

  // Submit quiz answers
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
      setQuizCompleted(true);
      
      // Refresh dashboard data
      await fetchDashboardData();
    } catch (error) {
      console.error('Error submitting quiz:', error);
      alert('Failed to submit quiz. Please try again.');
    }
  };

  // Retake quiz
  const retakeQuiz = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setQuizCompleted(false);
    setQuizResults(null);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers({});
  };

  // Exit quiz - FIXED: Better post-quiz experience
  const exitQuiz = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Show success message if quiz was passed
    if (quizResults?.percentage >= 70) {
      setTimeout(() => {
        alert(`🎉 Excellent! You passed the quiz with ${quizResults.percentage}%!\n\nReturning to dashboard...`);
      }, 300);
    }
    
    setQuizStarted(false);
    setQuizCompleted(false);
    setQuizResults(null);
    setSelectedAnswers({});
    setShowCourseCompletionModal(false);
    
    // Return to course list view if we were in learning mode
    if (learningMode) {
      setLearningMode(false);
      setCourseListView('list');
    }
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

  // Group courses by first letter for alphabetical display
  const groupedCourses = useMemo(() => {
    if (!courses || courses.length === 0) return {};
    
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
    const sorted = [...filtered].sort((a, b) => {
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
    
    // Group by first letter
    const groups = {};
    sorted.forEach(course => {
      if (!course || !course.title) return;
      const firstLetter = course.title.charAt(0).toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(course);
    });
    
    return groups;
  }, [courses, searchQuery, filterStatus, sortBy]);

  // Get course color based on category
  const getCourseColor = (course) => {
    if (!course) return { 
      gradient: 'from-gray-500 to-gray-700', 
      bg: 'bg-gray-500',
      light: 'bg-gray-50 dark:bg-gray-800/80',
      border: 'border-gray-200 dark:border-gray-700',
      icon: <BookOpen className="text-gray-700 dark:text-gray-300" />
    };
    
    const courseCategory = course.category || '';
    
    const colors = {
      'web development': { 
        gradient: 'from-blue-500 to-cyan-500', 
        bg: 'bg-blue-500',
        light: 'bg-blue-50 dark:bg-blue-900/60',
        border: 'border-blue-200 dark:border-blue-800',
        icon: <Code className="text-blue-700 dark:text-blue-300" />
      },
      'ai & machine learning': { 
        gradient: 'from-purple-500 to-pink-500', 
        bg: 'bg-purple-500',
        light: 'bg-purple-50 dark:bg-purple-900/60',
        border: 'border-purple-200 dark:border-purple-800',
        icon: <Brain className="text-purple-700 dark:text-purple-300" />
      },
      'cybersecurity': { 
        gradient: 'from-red-500 to-orange-500', 
        bg: 'bg-red-500',
        light: 'bg-red-50 dark:bg-red-900/60',
        border: 'border-red-200 dark:border-red-800',
        icon: <Shield className="text-red-700 dark:text-red-300" />
      },
      'programming': { 
        gradient: 'from-green-500 to-teal-500', 
        bg: 'bg-green-500',
        light: 'bg-green-50 dark:bg-green-900/60',
        border: 'border-green-200 dark:border-green-800',
        icon: <Code className="text-green-700 dark:text-green-300" />
      },
      'data science': { 
        gradient: 'from-indigo-500 to-purple-500', 
        bg: 'bg-indigo-500',
        light: 'bg-indigo-50 dark:bg-indigo-900/60',
        border: 'border-indigo-200 dark:border-indigo-800',
        icon: <TrendingUp className="text-indigo-700 dark:text-indigo-300" />
      }
    };
    
    const categoryLower = courseCategory.toLowerCase();
    return colors[categoryLower] || { 
      gradient: 'from-gray-500 to-gray-700', 
      bg: 'bg-gray-500',
      light: 'bg-gray-50 dark:bg-gray-800/80',
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

  // Calculate overall progress
  const overallProgress = stats?.overall_progress || 0;

  // Loading state
  if (loading) {
    return (
      <div className={`flex items-center justify-center min-h-[60vh] ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} select-none`} style={{ userSelect: 'none' }}>
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
      <div className={`flex items-center justify-center min-h-[60vh] ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} select-none`} style={{ userSelect: 'none' }}>
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

  // Learning Mode - Show Module Content
  if (learningMode && selectedCourse && currentModule) {
    const courseColor = getCourseColor(selectedCourse);
    const isLastModule = currentModuleIndex === modules.length - 1;
    
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-3 md:p-4 lg:p-6 select-none`} style={{ userSelect: 'none' }}>
        <div className="max-w-4xl mx-auto">
          {/* Header - MOBILE OPTIMIZED */}
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setLearningMode(false);
                setCourseListView('list');
              }}
              className={`flex items-center text-sm md:text-base ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors select-none`}
              style={{ userSelect: 'none' }}
            >
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Back to Dashboard</span>
              <span className="sm:hidden">Back</span>
            </button>
            <div className={`text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none`} style={{ userSelect: 'none' }}>
              Module {currentModuleIndex + 1} of {modules.length}
            </div>
          </div>

          {/* Course Info Card - MOBILE OPTIMIZED */}
          <div className={`rounded-xl p-4 md:p-6 mb-4 md:mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} select-none`} style={{ userSelect: 'none' }}>
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-3 md:mb-4">
              <div className="flex-1 mb-3 md:mb-0">
                <h1 className={`text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 md:mb-2 break-words overflow-wrap-anywhere ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedCourse.title}
                </h1>
                <p className={`text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3 md:mb-4 break-words overflow-wrap-anywhere`}>
                  {selectedCourse.description}
                </p>
              </div>
              <div className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg ${courseColor.light} border ${courseColor.border} select-none self-start`} style={{ userSelect: 'none' }}>
                <span className={`font-medium text-xs md:text-sm ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {selectedCourse.category}
                </span>
              </div>
            </div>

            {/* Module Progress Dots - MOBILE OPTIMIZED */}
            <div className="mb-4 md:mb-6">
              <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
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
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-medium transition-all select-none ${
                        isCurrent 
                          ? 'bg-blue-600 text-white ring-2 ring-blue-300 dark:ring-blue-700 shadow-lg' 
                          : isCompleted
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 hover:scale-110'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:scale-110'
                      }`}
                      style={{ userSelect: 'none' }}
                      title={`Module ${index + 1}: ${module.title} ${isCompleted ? '(Completed)' : ''}`}
                    >
                      {isCompleted ? <Check className="h-3 w-3 md:h-5 md:w-5" /> : index + 1}
                    </button>
                  );
                })}
              </div>
              
              {/* REAL-TIME PROGRESS TEXT - UPDATES IMMEDIATELY */}
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm select-none" style={{ userSelect: 'none' }}>
                <span className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                  {currentModule.estimated_time || 10} min
                </span>
                <span className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <FileText className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                  {completedModulesCount} of {modules.length} modules completed
                </span>
                <span className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <TrendingUp className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                  {Math.round((completedModulesCount / (modules.length || 1)) * 100)}% complete
                </span>
              </div>
            </div>

            {/* Module Progress Bar */}
            <div className="mb-2">
              <div className="flex justify-between text-xs md:text-sm mb-1 select-none" style={{ userSelect: 'none' }}>
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Module Progress</span>
                <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {Math.round((completedModulesCount / (modules.length || 1)) * 100)}%
                </span>
              </div>
              <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                  style={{ width: `${(completedModulesCount / (modules.length || 1)) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Module Content Card - MOBILE OPTIMIZED */}
          <div className={`rounded-xl p-4 md:p-6 mb-4 md:mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6">
              <div className="mb-3 sm:mb-0">
                <h2 className={`text-base md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 break-words overflow-wrap-anywhere ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {currentModule.title}
                </h2>
                <div className={`flex items-center text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} select-none`} style={{ userSelect: 'none' }}>
                  <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                  Estimated time: {currentModule.estimated_time || 10} minutes
                </div>
              </div>
              {isCurrentModuleCompleted && (
                <span className="flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 text-xs md:text-sm self-start">
                  <Check className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                  Completed
                </span>
              )}
            </div>

            {/* Lesson Content - ALLOW TEXT SELECTION HERE */}
            <div className="mb-6 md:mb-8" style={{ userSelect: 'text' }}>
              <div className={`whitespace-pre-line leading-relaxed text-sm md:text-base lg:text-lg break-words overflow-wrap-anywhere ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {currentModule.content}
              </div>
            </div>

            {/* Code Example - ALLOW TEXT SELECTION HERE */}
            {currentModule.code_example && (
              <div className="mb-6 md:mb-8" style={{ userSelect: 'text' }}>
                <div className="flex items-center mb-3 md:mb-4">
                  <Terminal className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3 text-blue-600 dark:text-blue-400" />
                  <h3 className={`text-base md:text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Code Example</h3>
                </div>
                <div className={`p-3 md:p-4 rounded-lg border ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                  <pre className="overflow-x-auto text-xs md:text-sm">
                    <code className={`${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                      {currentModule.code_example}
                    </code>
                  </pre>
                </div>
              </div>
            )}

            {/* Completion Success Animation */}
            {showCompletionSuccess && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 text-center shadow-2xl animate-scale-up mx-4 max-w-sm md:max-w-md">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Check className="h-8 w-8 md:h-12 md:w-12 text-green-600 dark:text-green-400 animate-bounce" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2">Module Completed! 🎉</h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
                    {isLastModule ? 'Course completed!' : 'Moving to next module...'}
                  </p>
                  <div className="w-24 md:w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto overflow-hidden">
                    <div className="h-full bg-green-500 animate-progress"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Course Completion Modal - FIXED: Quiz button now works correctly */}
            {showCourseCompletionModal && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 p-4">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 text-center shadow-2xl max-w-sm md:max-w-md w-full animate-scale-up">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <PartyPopper className="h-10 w-10 md:h-12 md:w-12 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                    Course Completed! 🎊
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
                    Congratulations! You've completed all {modules.length} modules of "{selectedCourse.title}".
                  </p>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
                    Ready to test your knowledge with a quiz?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        setShowCourseCompletionModal(false);
                        setLearningMode(false);
                        setCourseListView('list');
                      }}
                      className="px-4 py-2.5 md:px-5 md:py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm md:text-base"
                    >
                      Return to Dashboard
                    </button>
                    <button
                      onClick={() => {
                        setShowCourseCompletionModal(false);
                        setLearningMode(false); // Exit learning mode
                        startQuiz(selectedCourse.id); // Directly open quiz
                      }}
                      className="px-4 py-2.5 md:px-5 md:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 transition-colors text-sm md:text-base flex items-center justify-center"
                    >
                      <Brain className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      Take Quiz Now
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons - MOBILE OPTIMIZED */}
            <div className="flex flex-col sm:flex-row justify-between pt-4 md:pt-6 border-t dark:border-gray-700 gap-3 md:gap-4">
              <button
                onClick={previousModule}
                disabled={currentModuleIndex === 0}
                className={`px-4 py-2.5 md:px-6 md:py-3 rounded-lg flex items-center justify-center text-sm md:text-base select-none ${
                  currentModuleIndex === 0
                    ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
                }`}
                style={{ userSelect: 'none' }}
              >
                <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                Previous
              </button>

              <div className="flex flex-col sm:flex-row gap-3">
                {!isCurrentModuleCompleted ? (
                  <button
                    onClick={markModuleCompleted}
                    disabled={moduleLoading || showCompletionSuccess}
                    className="px-4 py-2.5 md:px-6 md:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 flex items-center justify-center text-sm md:text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed select-none"
                    style={{ userSelect: 'none' }}
                  >
                    {moduleLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : showCompletionSuccess ? (
                      <>
                        <Check className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                        Completed!
                      </>
                    ) : (
                      <>
                        <Check className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                        Mark as Completed
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={isLastModule ? handleCourseCompletion : nextModule}
                    className="px-4 py-2.5 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center justify-center text-sm md:text-base transition-colors select-none"
                    style={{ userSelect: 'none' }}
                  >
                    {isLastModule ? (
                      <>
                        Finish Course
                        <Trophy className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2" />
                      </>
                    ) : (
                      <>
                        Next Module
                        <ChevronRight className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2" />
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

  // Course Detail View (from list tap)
  if (courseListView === 'detail' && selectedCourse) {
    const courseColor = getCourseColor(selectedCourse);
    const statusBadge = getStatusBadge(selectedCourse);
    const progressPercentage = selectedCourse.total_modules > 0 
      ? (selectedCourse.completed_modules / selectedCourse.total_modules) * 100 
      : 0;
    
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-3 md:p-4 lg:p-6 select-none`} style={{ userSelect: 'none' }}>
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={backToCourseList}
            className={`flex items-center mb-4 md:mb-6 text-sm md:text-base ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors select-none`}
            style={{ userSelect: 'none' }}
          >
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
            Back to Courses
          </button>

          {/* Course Detail Card */}
          <div className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg overflow-hidden select-none`} style={{ userSelect: 'none' }}>
            {/* Course Header */}
            <div className={`p-4 md:p-6 lg:p-8 ${courseColor.light} border-b ${courseColor.border}`}>
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-3 md:mb-4">
                <div className="flex items-start mb-3 md:mb-0">
                  <div className={`p-2 md:p-3 rounded-lg ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} border ${courseColor.border} mr-3 md:mr-4`}>
                    {courseColor.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h1 className={`text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 md:mb-2 break-words overflow-wrap-anywhere ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedCourse.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <span className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded-full border ${courseColor.border} ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {selectedCourse.category}
                      </span>
                      <span className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded-full flex items-center ${statusBadge.className}`}>
                        {statusBadge.icon}
                        {statusBadge.text}
                      </span>
                      <span className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                        {selectedCourse.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className={`text-sm md:text-base lg:text-lg ${darkMode ? 'text-gray-200' : 'text-gray-700'} break-words overflow-wrap-anywhere`}>
                {selectedCourse.description}
              </p>
            </div>

            {/* Course Stats */}
            <div className="p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6 lg:mb-8">
                <div className={`p-3 md:p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <div className="flex items-center">
                    <FileText className={`h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                    <div>
                      <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Modules</p>
                      <p className={`text-lg md:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedCourse.completed_modules || 0}/{selectedCourse.total_modules || 0}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className={`p-3 md:p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <div className="flex items-center">
                    <Clock className={`h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                    <div>
                      <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Time</p>
                      <p className={`text-lg md:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedCourse.estimated_time || 60} min
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className={`p-3 md:p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <div className="flex items-center">
                    <TrendingUp className={`h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                    <div>
                      <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your Progress</p>
                      <p className={`text-lg md:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {Math.round(progressPercentage)}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4 md:mb-6 lg:mb-8">
                <div className="flex justify-between text-xs md:text-sm mb-1 md:mb-2 select-none" style={{ userSelect: 'none' }}>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Course Progress</span>
                  <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
                <div className={`h-2 md:h-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${courseColor.gradient} transition-all duration-500`}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Buttons - MOBILE OPTIMIZED */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={() => startLearning(selectedCourse.id)}
                  className="flex-1 px-4 py-3 md:px-6 md:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors flex items-center justify-center text-sm md:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl select-none"
                  style={{ userSelect: 'none' }}
                >
                  {selectedCourse.completed_modules === selectedCourse.total_modules ? (
                    <>
                      <BookOpen className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mr-2 md:mr-3" />
                      <span className="truncate">Review Course</span>
                    </>
                  ) : (selectedCourse.completed_modules || 0) > 0 ? (
                    <>
                      <PlayCircle className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mr-2 md:mr-3" />
                      <span className="truncate">Continue Learning</span>
                    </>
                  ) : (
                    <>
                      <PlayCircle className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mr-2 md:mr-3" />
                      <span className="truncate">Start Learning</span>
                    </>
                  )}
                </button>
                
                {(selectedCourse.completed_modules || 0) > 0 && (
                  <button
                    onClick={() => startQuiz(selectedCourse.id)}
                    className="px-4 py-3 md:px-6 md:py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 transition-colors flex items-center justify-center text-sm md:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl select-none"
                    style={{ userSelect: 'none' }}
                  >
                    <Brain className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mr-2 md:mr-3" />
                    <span className="truncate">Take Quiz</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main dashboard content
  return (
    <div className="flex select-none" style={{ userSelect: 'none' }}>
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className={`w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'} min-h-screen sticky top-16 hidden lg:block select-none`} style={{ userSelect: 'none' }}>
          <div className="p-4 md:p-6">
            <h2 className={`font-semibold text-lg mb-4 md:mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <Home size={20} className="mr-3" />
              Navigation
            </h2>
            <nav className="space-y-2 mb-6 md:mb-8">
              <a href="#" className={`flex items-center p-3 rounded-lg ${darkMode ? 'bg-blue-900/30 text-blue-300 border border-blue-800' : 'bg-blue-50 text-blue-700 border border-blue-200'}`}>
                <BookOpen size={20} className="mr-3" />
                Learning Dashboard
              </a>
              <a href="#" className={`flex items-center p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}>
                <BarChart size={20} className="mr-3" />
                Progress Analytics
              </a>
              <a href="#" className={`flex items-center p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}>
                <Award size={20} className="mr-3" />
                Achievements
              </a>
              <a href="#" className={`flex items-center p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}>
                <Calendar size={20} className="mr-3" />
                Study Plan
              </a>
            </nav>

            {/* Progress Overview */}
            <div className="mb-6 md:mb-8">
              <h3 className={`font-semibold mb-3 md:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Progress Overview</h3>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Overall Progress</span>
                    <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{overallProgress}%</span>
                  </div>
                  <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                      style={{ width: `${overallProgress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Completed Modules</span>
                  <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {stats?.completed_modules || 0}/{stats?.total_modules || 0}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Learning Streak</span>
                  <span className={`font-semibold flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Flame size={16} className="mr-1 text-orange-500" />
                    {stats?.learning_streak || 0} days
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div>
              <h3 className={`font-semibold mb-3 md:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Recent Achievements</h3>
              <div className="space-y-2">
                {achievements.slice(0, 3).map(achievement => {
                  if (!achievement) return null;
                  return (
                    <div key={achievement.id} className={`flex items-center p-3 rounded-lg ${darkMode ? achievement.is_earned ? 'bg-yellow-900/20 border border-yellow-800' : 'bg-gray-700' : achievement.is_earned ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-100'} ${!achievement.is_earned && 'opacity-60'}`}>
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 ${achievement.is_earned ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200' : 'bg-gray-200 text-gray-400 dark:bg-gray-600 dark:text-gray-500'}`}>
                        <span className="text-sm md:text-lg">{achievement.icon || '🏆'}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium text-xs md:text-sm truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {achievement.name || 'Achievement'}
                        </p>
                        <p className={`text-xs truncate ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {achievement.description || ''}
                        </p>
                      </div>
                      {achievement.is_earned && <CheckCircle size={14} className="ml-2 text-green-500 flex-shrink-0" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main className={`flex-1 p-3 md:p-4 lg:p-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        {/* Welcome Section - MOBILE OPTIMIZED */}
        <div className={`rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 mb-4 md:mb-6 lg:mb-8 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50/80'} border ${darkMode ? 'border-blue-800/30' : 'border-blue-200'} shadow-lg select-none`} style={{ userSelect: 'none' }}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="mb-4 lg:mb-0">
              <h1 className={`text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 md:mb-2 lg:mb-3 break-words overflow-wrap-anywhere ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Welcome back, {getUserDisplayName()} 👋
              </h1>
              <p className={`mb-3 md:mb-4 lg:mb-6 text-sm md:text-base lg:text-lg ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                {stats?.completed_modules || 0} modules completed • Level {stats?.level || 1}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3 lg:gap-4">
                <div className="flex items-center">
                  <div className={`w-20 md:w-24 lg:w-32 ${darkMode ? 'bg-blue-800/40' : 'bg-blue-100'} rounded-full h-2 md:h-3 mr-2 md:mr-3`}>
                    <div 
                      className={`h-full rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} transition-all duration-500`}
                      style={{ width: `${overallProgress}%` }}
                    ></div>
                  </div>
                  <span className={`text-xs md:text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                    {overallProgress}% Overall
                  </span>
                </div>
                <span className={`flex items-center text-xs md:text-sm ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                  <Trophy size={14} className="mr-1 md:mr-2" />
                  {stats?.achievements_earned || 0} Achievements
                </span>
              </div>
            </div>
            <button 
              onClick={() => {
                const nextCourse = getNextRecommendedCourse();
                if (nextCourse) startLearning(nextCourse.id);
              }}
              disabled={!courses || courses.length === 0}
              className={`px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg select-none text-sm md:text-base ${
                !courses || courses.length === 0 
                  ? 'opacity-50 cursor-not-allowed bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400' 
                  : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white'
              }`}
              style={{ userSelect: 'none' }}
            >
              {!courses || courses.length === 0 ? 'No Courses' : 'Continue Learning'}
            </button>
          </div>
        </div>

        {/* Quick Stats - MOBILE OPTIMIZED */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 mb-4 md:mb-6 lg:mb-8">
          <div className={`p-3 md:p-4 rounded-lg md:rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none`} style={{ userSelect: 'none' }}>
            <div className="flex items-center">
              <div className={`p-1.5 md:p-2 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mr-2 md:mr-3`}>
                <BookOpen className={`h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />
              </div>
              <div>
                <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Active Courses</p>
                <p className={`text-lg md:text-xl lg:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stats?.enrolled_courses || 0}</p>
              </div>
            </div>
          </div>
          
          <div className={`p-3 md:p-4 rounded-lg md:rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none`} style={{ userSelect: 'none' }}>
            <div className="flex items-center">
              <div className={`p-1.5 md:p-2 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-100'} mr-2 md:mr-3`}>
                <CheckCircle className={`h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ${darkMode ? 'text-green-400' : 'text-green-700'}`} />
              </div>
              <div>
                <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Completed Modules</p>
                <p className={`text-lg md:text-xl lg:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stats?.completed_modules || 0}</p>
              </div>
            </div>
          </div>
          
          <div className={`p-3 md:p-4 rounded-lg md:rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none`} style={{ userSelect: 'none' }}>
            <div className="flex items-center">
              <div className={`p-1.5 md:p-2 rounded-lg ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'} mr-2 md:mr-3`}>
                <Brain className={`h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`} />
              </div>
              <div>
                <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Quiz Accuracy</p>
                <p className={`text-lg md:text-xl lg:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stats?.quiz_accuracy?.toFixed(0) || 0}%</p>
              </div>
            </div>
          </div>
          
          <div className={`p-3 md:p-4 rounded-lg md:rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none`} style={{ userSelect: 'none' }}>
            <div className="flex items-center">
              <div className={`p-1.5 md:p-2 rounded-lg ${darkMode ? 'bg-yellow-900/30' : 'bg-yellow-100'} mr-2 md:mr-3`}>
                <Award className={`h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ${darkMode ? 'text-yellow-400' : 'text-yellow-700'}`} />
              </div>
              <div>
                <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Learning Level</p>
                <p className={`text-lg md:text-xl lg:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stats?.level || 1}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Best Action - MOBILE OPTIMIZED */}
        {courses && courses.length > 0 && (
          <div className={`mb-4 md:mb-6 lg:mb-8 p-3 md:p-4 lg:p-5 rounded-lg md:rounded-xl ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50/80 border-blue-200'} border shadow-lg select-none`} style={{ userSelect: 'none' }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center mb-3 md:mb-0">
                <div className={`p-2 md:p-3 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} mr-2 md:mr-3 lg:mr-4`}>
                  <TargetIcon className={`h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`} />
                </div>
                <div>
                  <h3 className={`font-semibold text-sm md:text-base lg:text-lg mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Continue Learning</h3>
                  <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} break-words`}>
                    Based on your progress, we recommend continuing with your next course.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => {
                  const nextCourse = getNextRecommendedCourse();
                  if (nextCourse) startLearning(nextCourse.id);
                }}
                className="px-3 py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg text-xs md:text-sm lg:text-base mt-3 md:mt-0"
              >
                Start Learning Now
              </button>
            </div>
          </div>
        )}

        {/* Search and Filter - MOBILE OPTIMIZED */}
        <div className="mb-4 md:mb-6 lg:mb-8">
          <div className="flex flex-col gap-3 md:gap-4 mb-4 md:mb-6">
            {/* Search Bar - OPTIMIZED FOR MOBILE */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4 md:h-5 md:w-5" />
                <input
                  type="text"
                  placeholder="Search courses by title or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-9 md:pl-10 pr-8 md:pr-10 py-2.5 md:py-3 text-sm md:text-base rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-800 text-gray-200' : 'border-gray-200 bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  style={{ userSelect: 'auto' }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X size={16} className="md:h-5 md:w-5" />
                  </button>
                )}
              </div>
            </div>
            
            {/* Filter Controls - MOBILE OPTIMIZED */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              {/* Sort Options - MOBILE FRIENDLY */}
              <div className="relative">
                <button
                  onClick={() => setShowSortOptions(!showSortOptions)}
                  className={`flex items-center justify-between w-full sm:w-auto px-3 py-2 md:px-4 md:py-2.5 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-800 hover:bg-gray-700' : 'border-gray-200 bg-white hover:bg-gray-50'} transition-colors select-none text-xs md:text-sm`}
                  style={{ userSelect: 'none' }}
                >
                  <div className="flex items-center">
                    {sortBy === 'alphabetical' ? <SortAsc size={14} className="mr-2" /> :
                     sortBy === 'progress' ? <TrendingUpIcon size={14} className="mr-2" /> :
                     <SortDesc size={14} className="mr-2" />}
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {sortBy === 'alphabetical' ? 'A-Z' :
                       sortBy === 'progress' ? 'Progress' : 'Recent'}
                    </span>
                  </div>
                  <ChevronDown size={14} className="ml-2" />
                </button>
                
                {showSortOptions && (
                  <div className={`absolute left-0 right-0 sm:right-auto sm:left-auto sm:right-0 mt-1 sm:mt-2 w-full sm:w-48 rounded-lg shadow-lg border py-1 z-50 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} select-none`} style={{ userSelect: 'none' }}>
                    <button
                      onClick={() => { setSortBy('alphabetical'); setShowSortOptions(false); }}
                      className={`flex items-center w-full px-3 py-2 text-left text-xs md:text-sm ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} ${sortBy === 'alphabetical' ? (darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-50 text-blue-700') : (darkMode ? 'text-gray-300' : 'text-gray-700')}`}
                    >
                      <SortAsc size={12} className="mr-2 md:mr-3" />
                      Alphabetical (A-Z)
                    </button>
                    <button
                      onClick={() => { setSortBy('progress'); setShowSortOptions(false); }}
                      className={`flex items-center w-full px-3 py-2 text-left text-xs md:text-sm ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} ${sortBy === 'progress' ? (darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-50 text-blue-700') : (darkMode ? 'text-gray-300' : 'text-gray-700')}`}
                    >
                      <TrendingUpIcon size={12} className="mr-2 md:mr-3" />
                      Progress (Highest)
                    </button>
                    <button
                      onClick={() => { setSortBy('recent'); setShowSortOptions(false); }}
                      className={`flex items-center w-full px-3 py-2 text-left text-xs md:text-sm ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} ${sortBy === 'recent' ? (darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-50 text-blue-700') : (darkMode ? 'text-gray-300' : 'text-gray-700')}`}
                    >
                      <SortDesc size={12} className="mr-2 md:mr-3" />
                      Recently Added
                    </button>
                  </div>
                )}
              </div>

              {/* Status Filter - MOBILE FRIENDLY */}
              <div className="flex overflow-x-auto pb-1 md:pb-0">
                {['all', 'in-progress', 'completed', 'not-started'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`px-3 py-1.5 md:px-4 md:py-2.5 text-xs md:text-sm font-medium capitalize whitespace-nowrap select-none ${filterStatus === status 
                      ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700 border border-blue-300' 
                      : darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } ${status === 'all' ? 'rounded-l-lg' : ''} ${status === 'not-started' ? 'rounded-r-lg' : ''}`}
                    style={{ userSelect: 'none' }}
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

        {/* Courses Section - ALPHABETICAL LIST VIEW - FULLY RESPONSIVE */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 lg:mb-8">
            <h2 className={`text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-0 ${darkMode ? 'text-white' : 'text-gray-900'} break-words`}>
              My Learning Courses
            </h2>
            <span className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {Object.values(groupedCourses).flat().length} course{Object.values(groupedCourses).flat().length !== 1 ? 's' : ''} found
            </span>
          </div>

          {Object.keys(groupedCourses).length === 0 ? (
            <div className="text-center py-8 md:py-12 lg:py-16 rounded-xl border dark:border-gray-700 select-none" style={{ userSelect: 'none' }}>
              <BookOpen className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-gray-400 mx-auto mb-3 md:mb-4 lg:mb-6" />
              <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {searchQuery ? 'No matching courses found' : 'No courses available yet'}
              </h3>
              <p className={`text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-md mx-auto px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} break-words`}>
                {searchQuery ? 'Try adjusting your search terms or filters' : 'Check back soon for new learning materials!'}
              </p>
              {searchQuery && (
                <button
                  onClick={() => { setSearchQuery(''); setFilterStatus('all'); }}
                  className="px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors text-sm md:text-base"
                >
                  Clear Search
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-3 md:space-y-4 lg:space-y-6">
              {Object.entries(groupedCourses)
                .sort(([letterA], [letterB]) => letterA.localeCompare(letterB))
                .map(([letter, letterCourses]) => {
                  const isExpanded = expandedLetters.has(letter) || Object.keys(groupedCourses).length <= 3;
                  
                  return (
                    <div 
                      key={letter} 
                      className={`rounded-lg md:rounded-xl border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-white'} overflow-hidden select-none`}
                      style={{ userSelect: 'none' }}
                    >
                      {/* Letter Header - MOBILE OPTIMIZED */}
                      <button
                        onClick={() => toggleLetterExpansion(letter)}
                        className={`w-full px-3 py-3 md:px-4 md:py-4 lg:px-6 lg:py-4 flex items-center justify-between ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'} transition-colors select-none`}
                        style={{ userSelect: 'none' }}
                      >
                        <div className="flex items-center">
                          <div className={`w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center mr-2 md:mr-3 lg:mr-4 ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                            <span className="text-lg md:text-xl font-bold">{letter}</span>
                          </div>
                          <div>
                            <h3 className={`text-base md:text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {letter}
                            </h3>
                            <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {letterCourses.length} course{letterCourses.length !== 1 ? 's' : ''}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className={`text-xs md:text-sm mr-2 md:mr-3 lg:mr-4 hidden sm:inline ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {isExpanded ? 'Collapse' : 'Expand'}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className={`h-4 w-4 md:h-5 md:w-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                          ) : (
                            <ChevronDown className={`h-4 w-4 md:h-5 md:w-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                          )}
                        </div>
                      </button>

                      {/* Course List */}
                      {isExpanded && (
                        <div className="border-t dark:border-gray-700">
                          {letterCourses.map((course) => {
                            if (!course) return null;
                            const courseColor = getCourseColor(course);
                            const statusBadge = getStatusBadge(course);
                            const progressPercentage = course.total_modules > 0 
                              ? (course.completed_modules / course.total_modules) * 100 
                              : 0;
                            
                            return (
                              <div
                                key={course.id}
                                onClick={() => openCourseDetail(course)}
                                className={`group p-4 md:p-5 lg:p-6 border-b last:border-b-0 ${darkMode ? 'border-gray-700 hover:bg-gray-700/30' : 'border-gray-200 hover:bg-gray-50'} cursor-pointer transition-all hover:scale-[1.005] active:scale-[0.995] select-none`}
                                style={{ userSelect: 'none' }}
                              >
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 md:gap-4">
                                  {/* Course Info - MOBILE OPTIMIZED */}
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-start mb-2 md:mb-3">
                                      <div className={`p-2 md:p-3 rounded-lg ${courseColor.light} border ${courseColor.border} mr-2 md:mr-3 lg:mr-4 flex-shrink-0`}>
                                        {courseColor.icon}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h3 className={`text-base md:text-lg lg:text-xl font-bold mb-1 md:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'} break-words overflow-wrap-anywhere`}>
                                          {course.title || 'Untitled Course'}
                                          <ChevronRight className="inline-block ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </h3>
                                        <p className={`text-xs md:text-sm mb-2 md:mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'} line-clamp-2 break-words overflow-wrap-anywhere`}>
                                          {course.description || 'No description available'}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-1 md:gap-2">
                                          <span className={`text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded-full flex items-center ${statusBadge.className}`}>
                                            {statusBadge.icon}
                                            {statusBadge.text}
                                          </span>
                                          <span className={`text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                                            {course.category}
                                          </span>
                                          <span className={`text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                                            <Clock size={10} className="inline mr-1" />
                                            {course.estimated_time || 60} min
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Progress and Actions - MOBILE OPTIMIZED */}
                                  <div className="lg:w-64 xl:w-80 flex flex-col gap-2 md:gap-3 lg:gap-4">
                                    {/* Progress Bar */}
                                    <div>
                                      <div className="flex justify-between text-xs md:text-sm mb-1 select-none" style={{ userSelect: 'none' }}>
                                        <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Progress</span>
                                        <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                          {Math.round(progressPercentage)}%
                                        </span>
                                      </div>
                                      <div className={`h-1.5 md:h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                        <div 
                                          className={`h-full rounded-full bg-gradient-to-r ${courseColor.gradient} transition-all duration-500`}
                                          style={{ width: `${progressPercentage}%` }}
                                        ></div>
                                      </div>
                                      <div className={`flex justify-between text-xs mt-0.5 select-none ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} style={{ userSelect: 'none' }}>
                                        <span>{course.completed_modules || 0}/{course.total_modules || 0} modules</span>
                                        <span>{Math.round(progressPercentage)}% complete</span>
                                      </div>
                                    </div>

                                    {/* Quick Actions - MOBILE OPTIMIZED */}
                                    <div className="flex gap-1.5 md:gap-2">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          startLearning(course.id);
                                        }}
                                        className="flex-1 px-2 py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors flex items-center justify-center text-xs md:text-sm font-medium select-none"
                                        style={{ userSelect: 'none' }}
                                      >
                                        {course.completed_modules === course.total_modules ? 'Review' : 
                                        (course.completed_modules || 0) > 0 ? 'Continue' : 'Start'}
                                      </button>
                                      {(course.completed_modules || 0) > 0 && (
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            startQuiz(course.id);
                                          }}
                                          className="px-2 py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 transition-colors flex items-center justify-center text-xs md:text-sm font-medium select-none"
                                          style={{ userSelect: 'none' }}
                                          title="Take Quiz"
                                        >
                                          <Brain size={12} className="md:h-4 md:w-4" />
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          )}
        </div>

        {/* Quiz Modal - FIXED: Proper z-index and works from any context */}
        {(quizStarted && !quizCompleted) && (
          <div className={`fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4 ${darkMode ? 'bg-gray-900/95' : 'bg-black/70'}`}>
            <div className={`w-full max-w-2xl rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 md:p-6 shadow-2xl max-h-[90vh] overflow-y-auto`}>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div>
                  <h2 className={`text-lg md:text-xl lg:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quiz: {selectedCourse?.title}</h2>
                  <p className={`text-xs md:text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Test your knowledge of {selectedCourse?.category}</p>
                </div>
                <button
                  onClick={exitQuiz}
                  className="p-1.5 md:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300"
                  aria-label="Close quiz"
                >
                  <X size={20} className="md:h-6 md:w-6" />
                </button>
              </div>
              
              {quizQuestions.length > 0 && currentQuestion < quizQuestions.length ? (
                <>
                  <div className="mb-4 md:mb-6">
                    <div className="flex justify-between text-xs md:text-sm mb-1 md:mb-2">
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                      <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Score: <span className="text-blue-600 dark:text-blue-400">{score}</span>
                      </span>
                    </div>
                    <div className={`h-1.5 md:h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mb-6 md:mb-8">
                    <h3 className={`text-base md:text-xl font-semibold mb-3 md:mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} break-words`}>
                      {quizQuestions[currentQuestion]?.question || 'Question not available'}
                    </h3>
                    
                    <div className="space-y-2 md:space-y-3">
                      {quizQuestions[currentQuestion]?.options?.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuizAnswerSelect(currentQuestion, index)}
                          className={`w-full text-left p-3 md:p-4 rounded-lg border transition-all select-none ${
                            selectedAnswers[currentQuestion] === index
                              ? darkMode 
                                ? 'border-blue-500 bg-blue-900/30' 
                                : 'border-blue-400 bg-blue-50'
                              : darkMode 
                                ? 'border-gray-700 hover:border-blue-500 hover:bg-blue-900/20 text-gray-300' 
                                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-800'
                          }`}
                          style={{ userSelect: 'none' }}
                        >
                          <div className="flex items-center">
                            <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border flex items-center justify-center mr-2 md:mr-4 ${
                              selectedAnswers[currentQuestion] === index
                                ? 'border-blue-500 bg-blue-500 text-white'
                                : darkMode ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-700'
                            }`}>
                              <span className="font-medium text-xs md:text-sm">{String.fromCharCode(65 + index)}</span>
                            </div>
                            <span className={`text-sm md:text-base ${darkMode ? 'text-gray-200' : 'text-gray-800'} break-words`}>{option || 'Option not available'}</span>
                          </div>
                        </button>
                      )) || <p className={darkMode ? 'text-gray-500' : 'text-gray-600'}>No options available</p>}
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      onClick={() => currentQuestion > 0 && setCurrentQuestion(prev => prev - 1)}
                      disabled={currentQuestion === 0}
                      className={`px-3 py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-3 rounded-lg text-xs md:text-sm ${
                        currentQuestion === 0
                          ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800 text-gray-400'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      Previous
                    </button>
                    
                    {currentQuestion < quizQuestions.length - 1 ? (
                      <button
                        onClick={() => setCurrentQuestion(prev => prev + 1)}
                        disabled={selectedAnswers[currentQuestion] === undefined}
                        className={`px-3 py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-3 rounded-lg text-xs md:text-sm ${
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
                        className={`px-3 py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-3 rounded-lg text-xs md:text-sm ${
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
              ) : (
                <div className="text-center py-8 md:py-12">
                  <Loader2 className="h-8 w-8 md:h-12 md:w-12 animate-spin text-blue-500 mx-auto mb-3 md:mb-4" />
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Loading quiz questions...</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quiz Results Modal */}
        {quizCompleted && quizResults && (
          <div className={`fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4 ${darkMode ? 'bg-gray-900/95' : 'bg-black/70'}`}>
            <div className={`w-full max-w-2xl rounded-xl shadow-2xl max-h-[90vh] flex flex-col ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              {/* Modal Header */}
              <div className="p-4 md:p-6 border-b dark:border-gray-700 flex-shrink-0">
                <div className="text-center">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center ${
                    quizResults.percentage >= 70 
                      ? 'bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-4 border-green-200 dark:border-green-800' 
                      : 'bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border-4 border-yellow-200 dark:border-yellow-800'
                  }`}>
                    {quizResults.percentage >= 70 ? (
                      <Trophy className="h-8 w-8 md:h-10 md:w-10 text-green-600 dark:text-green-400" />
                    ) : (
                      <Brain className="h-8 w-8 md:h-10 md:w-10 text-yellow-600 dark:text-yellow-400" />
                    )}
                  </div>
                  
                  <h2 className={`text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {quizResults.percentage >= 70 ? 'Quiz Passed! 🎉' : 'Good Effort! 💪'}
                  </h2>
                  <p className={`text-sm md:text-base mb-2 md:mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    You scored <span className="font-bold">{quizResults.correct_answers}</span> out of <span className="font-bold">{quizResults.total_questions}</span> questions
                  </p>
                  
                  <div className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 ${
                    quizResults.percentage >= 90 ? 'text-green-600 dark:text-green-400' :
                    quizResults.percentage >= 70 ? 'text-blue-600 dark:text-blue-400' :
                    quizResults.percentage >= 50 ? 'text-yellow-600 dark:text-yellow-400' :
                    'text-red-600 dark:text-red-400'
                  }`}>
                    {quizResults.percentage.toFixed(0)}%
                  </div>
                  
                  <div className={`p-2 md:p-3 rounded-lg ${
                    quizResults.percentage >= 70 
                      ? darkMode ? 'bg-green-900/40 border border-green-800' : 'bg-green-50 border border-green-200'
                      : darkMode ? 'bg-yellow-900/40 border border-yellow-800' : 'bg-yellow-50 border border-yellow-200'
                  }`}>
                    <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>
                      {quizResults.percentage >= 70 
                        ? `Excellent work! You have a strong understanding of ${selectedCourse?.title}.`
                        : `Keep practicing! Review the correct answers below to improve your understanding.`
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto px-3 md:px-4 lg:px-6" style={{ userSelect: 'text' }}>
                <div className="py-3 md:py-4">
                  <h3 className={`font-semibold text-base md:text-lg mb-2 md:mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Question Breakdown</h3>
                  <div className="space-y-2 md:space-y-3">
                    {quizResults.details?.map((detail, index) => (
                      <div 
                        key={index}
                        className={`p-3 md:p-4 rounded-lg ${
                          detail.is_correct 
                            ? darkMode ? 'bg-green-900/30 border border-green-800' : 'bg-green-50 border border-green-200'
                            : darkMode ? 'bg-red-900/30 border border-red-800' : 'bg-red-50 border border-red-200'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1 md:mb-2">
                          <span className={`font-medium text-sm md:text-base ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Question {index + 1}</span>
                          <span className={`text-xs md:text-sm px-1.5 py-0.5 md:px-2 md:py-1 rounded-full ${
                            detail.is_correct 
                              ? darkMode ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-800'
                              : darkMode ? 'bg-red-800 text-red-200' : 'bg-red-100 text-red-800'
                          }`}>
                            {detail.is_correct ? 'Correct ✓' : 'Incorrect ✗'}
                          </span>
                        </div>
                        <p className={`text-xs md:text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                          <span className="font-medium">Your answer:</span> Option {String.fromCharCode(64 + detail.selected_option)}
                          {!detail.is_correct && (
                            <span className={`ml-1 md:ml-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                              (Correct: Option {String.fromCharCode(64 + detail.correct_option)})
                            </span>
                          )}
                        </p>
                        {!detail.is_correct && detail.explanation && (
                          <div className={`mt-1 md:mt-2 p-2 md:p-3 rounded ${darkMode ? 'bg-gray-700/70' : 'bg-gray-100'}`}>
                            <p className={`text-xs md:text-sm font-medium mb-1 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Explanation:</p>
                            <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{detail.explanation}</p>
                          </div>
                        )}
                      </div>
                    )) || (
                      <div className="text-center py-3 md:py-4">
                        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>No quiz details available</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Fixed Footer with Action Buttons */}
              <div className="p-3 md:p-4 lg:p-6 border-t dark:border-gray-700 flex-shrink-0">
                <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-3">
                  <button
                    onClick={exitQuiz}
                    className="px-3 py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors text-xs md:text-sm font-medium flex-1 sm:flex-none"
                  >
                    Return to Dashboard
                  </button>
                  
                  {quizResults.percentage < 70 && (
                    <button
                      onClick={retakeQuiz}
                      className="px-3 py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 transition-colors text-xs md:text-sm font-medium flex-1 sm:flex-none"
                    >
                      Retake Quiz
                    </button>
                  )}
                  
                  <button
                    onClick={() => selectedCourse && startLearning(selectedCourse.id)}
                    className="px-3 py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-xs md:text-sm font-medium flex-1 sm:flex-none"
                  >
                    Review Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Progress Analytics */}
        <div className={`rounded-xl p-4 md:p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none`} style={{ userSelect: 'none' }}>
          <h2 className={`text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <BarChart3 size={20} className="mr-2 md:mr-3" />
            Learning Analytics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            <div className={`p-3 md:p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-blue-50'} border ${darkMode ? 'border-gray-600' : 'border-blue-100'}`}>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 md:mr-3 text-blue-700 dark:text-blue-400" />
                <div>
                  <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total Study Time</p>
                  <p className={`text-base md:text-lg lg:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {Math.round((stats?.completed_modules || 0) * 15)} min
                  </p>
                </div>
              </div>
            </div>
            <div className={`p-3 md:p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-green-50'} border ${darkMode ? 'border-gray-600' : 'border-green-100'}`}>
              <div className="flex items-center">
                <CheckCircle size={16} className="mr-2 md:mr-3 text-green-700 dark:text-green-400" />
                <div>
                  <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Quiz Accuracy</p>
                  <p className={`text-base md:text-lg lg:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {stats?.quiz_accuracy?.toFixed(1) || 0}%
                  </p>
                </div>
              </div>
            </div>
            <div className={`p-3 md:p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-purple-50'} border ${darkMode ? 'border-gray-600' : 'border-purple-100'}`}>
              <div className="flex items-center">
                <Award size={16} className="mr-2 md:mr-3 text-purple-700 dark:text-purple-400" />
                <div>
                  <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Achievements</p>
                  <p className={`text-base md:text-lg lg:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {stats?.achievements_earned || 0}/{stats?.total_achievements || 0}
                  </p>
                </div>
              </div>
            </div>
            <div className={`p-3 md:p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-orange-50'} border ${darkMode ? 'border-gray-600' : 'border-orange-100'}`}>
              <div className="flex items-center">
                <Flame size={16} className="mr-2 md:mr-3 text-orange-700 dark:text-orange-400" />
                <div>
                  <p className={`text-xs md:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Learning Streak</p>
                  <p className={`text-base md:text-lg lg:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
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