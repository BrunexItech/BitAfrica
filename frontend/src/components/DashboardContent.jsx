import React, { useState, useEffect } from 'react';
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
  Terminal
} from 'lucide-react';
import learningService from '../services/learningService';

const DashboardContent = ({
  darkMode,
  user,
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
  
  // Learning flow states
  const [learningMode, setLearningMode] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modules, setModules] = useState([]);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [isCurrentModuleCompleted, setIsCurrentModuleCompleted] = useState(false);
  const [moduleLoading, setModuleLoading] = useState(false);
  
  // Quiz states
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResults, setQuizResults] = useState(null);
  
  // UI states
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch data on component mount
  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [coursesData, statsData, achievementsData] = await Promise.all([
        learningService.getCourses(),
        learningService.getDashboardStats(),
        learningService.getAchievements()
      ]);
      
      setCourses(coursesData);
      setStats(statsData);
      setAchievements(achievementsData);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Start learning a course - show modules first
  const startLearning = async (courseId) => {
    try {
      const course = courses.find(c => c.id === courseId);
      if (!course) return;
      
      setSelectedCourse(course);
      const modulesData = await learningService.getModules(courseId);
      setModules(modulesData);
      setCurrentModuleIndex(0);
      
      // Check if current module is already completed
      const currentModule = modulesData[0];
      setIsCurrentModuleCompleted(currentModule?.is_completed || false);
      
      setLearningMode(true);
      setQuizStarted(false);
      setQuizCompleted(false);
      setQuizResults(null);
    } catch (error) {
      console.error('Error starting learning:', error);
    }
  };

  // Start quiz for a course
  const startQuiz = async (courseId) => {
    try {
      const course = courses.find(c => c.id === courseId);
      if (!course) return;
      
      setSelectedCourse(course);
      const questions = await learningService.getQuizQuestions(courseId);
      setQuizQuestions(questions);
      setQuizStarted(true);
      setCurrentQuestion(0);
      setScore(0);
      setQuizCompleted(false);
      setQuizResults(null);
      setLearningMode(false);
    } catch (error) {
      console.error('Error starting quiz:', error);
    }
  };

  // Mark current module as completed
  const markModuleCompleted = async () => {
    try {
      setModuleLoading(true);
      const currentModule = modules[currentModuleIndex];
      
      // Update backend
      await learningService.updateProgress(
        selectedCourse.id,
        currentModule.id,
        true
      );
      
      // Update frontend state
      setIsCurrentModuleCompleted(true);
      
      // Refresh dashboard data to update progress
      const updatedCourses = await learningService.getCourses();
      setCourses(updatedCourses);
      
      // Refresh stats
      const updatedStats = await learningService.getDashboardStats();
      setStats(updatedStats);
      
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
      const nextIndex = currentModuleIndex + 1;
      setCurrentModuleIndex(nextIndex);
      
      // Check if the next module is already completed
      const nextModule = modules[nextIndex];
      setIsCurrentModuleCompleted(nextModule?.is_completed || false);
    } else {
      // All modules completed, exit learning mode
      setLearningMode(false);
      setSelectedCourse(null);
      
      // Optionally show quiz option
      if (selectedCourse) {
        // Check if all modules are actually completed
        const allCompleted = modules.every(module => module.is_completed);
        if (allCompleted) {
          // Show quiz notification or automatically start quiz
          setTimeout(() => {
            if (window.confirm(`Congratulations! You've completed all modules. Would you like to take the quiz for ${selectedCourse.title}?`)) {
              startQuiz(selectedCourse.id);
            }
          }, 500);
        }
      }
    }
  };

  // Go to previous module
  const previousModule = () => {
    if (currentModuleIndex > 0) {
      const prevIndex = currentModuleIndex - 1;
      setCurrentModuleIndex(prevIndex);
      
      // Check if the previous module is already completed
      const prevModule = modules[prevIndex];
      setIsCurrentModuleCompleted(prevModule?.is_completed || false);
    }
  };

  // Handle quiz answer
  const handleQuizAnswer = async (selectedOption) => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Submit quiz when all questions answered
      const answers = quizQuestions.map((q, index) => ({
        question_id: q.id,
        selected_option: selectedOption + 1
      }));
      
      try {
        const results = await learningService.submitQuiz(selectedCourse.id, answers);
        setQuizResults(results);
        setScore(results.correct_answers);
        setQuizCompleted(true);
        
        // Refresh dashboard data
        fetchDashboardData();
      } catch (error) {
        console.error('Error submitting quiz:', error);
      }
    }
  };

  // Get current module
  const currentModule = modules[currentModuleIndex];

  // Calculate completed modules count
  const completedModulesCount = modules.filter(m => m.is_completed).length;
  
  // Calculate if all modules are completed
  const allModulesCompleted = modules.length > 0 && completedModulesCount === modules.length;

  // Filter courses based on search and status
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const completionRatio = course.completed_modules / course.total_modules;
    let status = 'not-started';
    if (completionRatio === 1) status = 'completed';
    else if (completionRatio > 0) status = 'in-progress';
    
    const matchesStatus = filterStatus === 'all' || 
                         (filterStatus === 'completed' && status === 'completed') ||
                         (filterStatus === 'in-progress' && status === 'in-progress') ||
                         (filterStatus === 'not-started' && status === 'not-started');
    
    return matchesSearch && matchesStatus;
  });

  // Get status badge for a course
  const getStatusBadge = (course) => {
    const completionRatio = course.completed_modules / course.total_modules;
    
    if (completionRatio === 1) {
      return { text: 'Completed', className: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' };
    } else if (completionRatio > 0) {
      return { text: 'In Progress', className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' };
    } else {
      return { text: 'Not Started', className: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' };
    }
  };

  // Get course color based on category
  const getCourseColor = (course) => {
    const colors = {
      'Web Development': { gradient: 'from-blue-500 to-cyan-500', bg: 'bg-blue-500', icon: <Code /> },
      'AI & Machine Learning': { gradient: 'from-purple-500 to-pink-500', bg: 'bg-purple-500', icon: <Brain /> },
      'Cybersecurity': { gradient: 'from-red-500 to-orange-500', bg: 'bg-red-500', icon: <Shield /> },
      'Programming': { gradient: 'from-green-500 to-teal-500', bg: 'bg-green-500', icon: <Code /> },
      'Data Science': { gradient: 'from-indigo-500 to-purple-500', bg: 'bg-indigo-500', icon: <TrendingUp /> }
    };
    
    return colors[course.category] || { 
      gradient: 'from-gray-500 to-gray-700', 
      bg: 'bg-gray-500', 
      icon: <BookOpen /> 
    };
  };

  // Calculate overall progress
  const overallProgress = stats?.overall_progress || 0;
  
  // Get next recommended course
  const getNextRecommendedCourse = () => {
    return courses.find(course => {
      const progress = course.completed_modules / course.total_modules;
      return progress > 0 && progress < 1;
    }) || courses.find(course => course.completed_modules === 0);
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300">Loading your learning dashboard...</p>
        </div>
      </div>
    );
  }

  // Learning Mode - Show Module Content
  if (learningMode && selectedCourse && currentModule) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-4 md:p-6`}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setLearningMode(false)}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </button>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Module {currentModuleIndex + 1} of {modules.length}
            </div>
          </div>

          {/* Course Info */}
          <div className={`rounded-xl p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{selectedCourse.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedCourse.description}</p>
            
            {/* Module Progress Dots */}
            <div className="flex flex-wrap gap-2 mb-4">
              {modules.map((module, index) => {
                const isCompleted = module.is_completed;
                const isCurrent = index === currentModuleIndex;
                
                return (
                  <button
                    key={module.id}
                    onClick={() => {
                      if (index !== currentModuleIndex) {
                        setCurrentModuleIndex(index);
                        setIsCurrentModuleCompleted(module.is_completed || false);
                      }
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                      isCurrent 
                        ? 'bg-blue-600 text-white ring-2 ring-blue-300' 
                        : isCompleted
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    } ${!isCurrent ? 'hover:scale-110' : ''}`}
                    title={`Module ${index + 1}: ${module.title} ${isCompleted ? '(Completed)' : ''}`}
                  >
                    {isCompleted ? <Check className="h-4 w-4" /> : index + 1}
                  </button>
                );
              })}
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {currentModule.estimated_time} min
              </span>
              <span className="flex items-center">
                <FileText className="h-4 w-4 mr-1" />
                {completedModulesCount} of {modules.length} modules completed
              </span>
            </div>
          </div>

          {/* Module Content */}
          <div className={`rounded-xl p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold">{currentModule.title}</h2>
              {isCurrentModuleCompleted && (
                <span className="flex items-center text-green-600 dark:text-green-400">
                  <Check className="h-5 w-5 mr-1" />
                  Completed
                </span>
              )}
            </div>

            {/* Lesson Content */}
            <div className="prose dark:prose-invert max-w-none mb-8">
              <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                {currentModule.content}
              </div>
            </div>

            {/* Code Example */}
            {currentModule.code_example && (
              <div className="mb-8">
                <div className="flex items-center mb-3">
                  <Terminal className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold">Code Example</h3>
                </div>
                <pre className={`p-4 rounded-lg overflow-x-auto ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
                  <code>{currentModule.code_example}</code>
                </pre>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t dark:border-gray-700">
              <button
                onClick={previousModule}
                disabled={currentModuleIndex === 0}
                className={`px-4 py-2 rounded-lg flex items-center ${currentModuleIndex === 0 
                  ? 'opacity-50 cursor-not-allowed text-gray-400' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'}`}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </button>

              <div className="flex space-x-3">
                {!isCurrentModuleCompleted ? (
                  <button
                    onClick={markModuleCompleted}
                    disabled={moduleLoading}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {moduleLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Mark as Completed
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={nextModule}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                  >
                    {currentModuleIndex < modules.length - 1 ? 'Next Module' : 'Finish Course'}
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex justify-between text-sm mb-2">
              <span>Course Progress</span>
              <span>{Math.round((completedModulesCount / modules.length) * 100)}%</span>
            </div>
            <div className={`h-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div 
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                style={{ width: `${(completedModulesCount / modules.length) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
              <span>Completed: {completedModulesCount} modules</span>
              <span>Remaining: {modules.length - completedModulesCount} modules</span>
            </div>
          </div>

          {/* Take Quiz Option (After completing all modules) */}
          {allModulesCompleted && (
            <div className={`mt-6 p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-50 to-emerald-50'} border ${darkMode ? 'border-gray-700' : 'border-green-200'}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <Target className={`mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} size={24} />
                  <div>
                    <h3 className="font-semibold">🎉 Course Completed! Ready for the Quiz?</h3>
                    <p className="text-sm opacity-75">
                      You've completed all {modules.length} modules. Test your knowledge of {selectedCourse.title}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setLearningMode(false)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    Return to Dashboard
                  </button>
                  <button 
                    onClick={() => startQuiz(selectedCourse.id)}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Take Quiz
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Original dashboard content (only show if not in learning mode)
  return (
    <div className="flex">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className={`w-64 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'} min-h-screen sticky top-16 hidden md:block`}>
          <div className="p-6">
            <h2 className="font-semibold text-lg mb-4 flex items-center">
              <Home size={20} className="mr-2" />
              Navigation
            </h2>
            <nav className="space-y-2">
              <a href="#" className={`flex items-center p-3 rounded-lg ${darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-50 text-blue-600'}`}>
                <BookOpen size={20} className="mr-3" />
                Learning Dashboard
              </a>
              <a href="#" className={`flex items-center p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <TrendingUp size={20} className="mr-3" />
                Progress Analytics
              </a>
              <a href="#" className={`flex items-center p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Award size={20} className="mr-3" />
                Achievements
              </a>
              <a href="#" className={`flex items-center p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <Calendar size={20} className="mr-3" />
                Study Plan
              </a>
            </nav>

            {/* Progress Overview */}
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Progress Overview</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Overall Progress</span>
                    <span>{overallProgress}%</span>
                  </div>
                  <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ width: `${overallProgress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Completed Courses</span>
                  <span className="font-semibold">{stats?.enrolled_courses || 0}/{stats?.total_courses || 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Learning Streak</span>
                  <span className="font-semibold flex items-center">
                    <Zap size={16} className="mr-1 text-yellow-500" />
                    {stats?.learning_streak || 0} days
                  </span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Achievements</h3>
              <div className="space-y-2">
                {achievements.slice(0, 5).map(achievement => (
                  <div key={achievement.id} className={`flex items-center p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} ${!achievement.is_earned && 'opacity-50'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${achievement.is_earned ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' : 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500'}`}>
                      <span className="text-lg">{achievement.icon}</span>
                    </div>
                    <span className="text-sm flex-1 truncate">{achievement.name}</span>
                    {achievement.is_earned && <CheckCircle size={16} className="ml-auto text-green-500 flex-shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        {/* Welcome Section */}
        <div className={`rounded-2xl p-6 mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Welcome back, {user?.name || 'Learner'} 👋
              </h1>
              <p className="text-blue-100 mb-4">
                {stats?.completed_modules || 0} modules completed • Level {stats?.level || 1}
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-24 bg-blue-900/30 rounded-full h-2 mr-2">
                    <div 
                      className="bg-white h-2 rounded-full"
                      style={{ width: `${overallProgress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm">
                    {overallProgress}% Overall Progress
                  </span>
                </div>
                <span className="flex items-center text-sm">
                  <Award size={16} className="mr-1" />
                  {stats?.achievements_earned || 0} Achievements
                </span>
              </div>
            </div>
            <button 
              onClick={() => {
                const nextCourse = getNextRecommendedCourse();
                if (nextCourse) startLearning(nextCourse.id);
              }}
              className="mt-4 md:mt-0 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Continue Learning
            </button>
          </div>
        </div>

        {/* Next Best Action */}
        {courses.length > 0 && (
          <div className={`mb-8 p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-50 to-emerald-50'} border ${darkMode ? 'border-gray-700' : 'border-green-200'}`}>
            <div className="flex items-center">
              <Target className={`mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} size={24} />
              <div className="flex-1">
                <h3 className="font-semibold">Next Recommended Topic</h3>
                <p className="text-sm opacity-75">
                  Based on your progress, we recommend continuing with your learning path.
                </p>
              </div>
              <button 
                onClick={() => {
                  const nextCourse = getNextRecommendedCourse();
                  if (nextCourse) startLearning(nextCourse.id);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Start Learning
              </button>
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <BookOpen className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
          <div className="flex border rounded-lg overflow-hidden">
            {['all', 'in-progress', 'completed', 'not-started'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1 text-sm capitalize ${filterStatus === status 
                  ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600' 
                  : darkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}
              >
                {status.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Learning Courses</h2>
            <span className="text-gray-600 dark:text-gray-300">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
            </span>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {searchQuery ? 'Try a different search term' : 'No courses available yet'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => {
                const courseColor = getCourseColor(course);
                const statusBadge = getStatusBadge(course);
                
                return (
                  <div
                    key={course.id}
                    className={`rounded-xl border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} p-6 transition-transform hover:scale-[1.02] hover:shadow-lg`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${courseColor.gradient} text-white`}>
                        {courseColor.icon}
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusBadge.className}`}>
                        {statusBadge.text}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {course.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r ${courseColor.gradient}`}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span>{course.completed_modules}/{course.total_modules} modules</span>
                        <span className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {course.estimated_time} min
                        </span>
                      </div>
                      
                      <div className="flex space-x-2 mt-4">
                        <button
                          onClick={() => startLearning(course.id)}
                          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                        >
                          {course.completed_modules === course.total_modules ? 'Review' : 
                          course.completed_modules > 0 ? 'Continue' : 'Start Learning'}
                          <BookOpen size={20} className="ml-2" />
                        </button>
                        {course.completed_modules > 0 && (
                          <button
                            onClick={() => startQuiz(course.id)}
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
                            title="Take Quiz"
                          >
                            <Brain size={20} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Progress Analytics */}
        <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BarChart3 size={24} className="mr-3" />
            Learning Analytics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <div className="flex items-center">
                <Clock size={20} className="mr-3 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-sm opacity-75">Total Study Time</p>
                  <p className="text-xl font-bold">{Math.round((stats?.completed_modules || 0) * 15)} min</p>
                </div>
              </div>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <div className="flex items-center">
                <CheckCircle size={20} className="mr-3 text-green-600 dark:text-green-400" />
                <div>
                  <p className="text-sm opacity-75">Quiz Accuracy</p>
                  <p className="text-xl font-bold">{stats?.quiz_accuracy?.toFixed(0) || 0}%</p>
                </div>
              </div>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
              <div className="flex items-center">
                <Award size={20} className="mr-3 text-purple-600 dark:text-purple-400" />
                <div>
                  <p className="text-sm opacity-75">Achievements</p>
                  <p className="text-xl font-bold">{stats?.achievements_earned || 0}/{stats?.total_achievements || 0}</p>
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