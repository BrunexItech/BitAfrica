import React, { useState, useEffect } from 'react';
import {
  Menu,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  Search,
  CheckCircle,
  PlayCircle,
  Lock,
  Code,
  Brain,
  Shield,
  Zap,
  ChevronRight,
  Home,
  BookOpen,
  TrendingUp,
  Award,
  Star,
  Moon,
  Sun,
  X,
  ChevronLeft,
  Target,
  BarChart3,
  Clock,
  Calendar
} from 'lucide-react';

const Dashboard = () => {
  // State management
  const [user, setUser] = useState({
    name: 'Sharif',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sharif',
    completedCourses: 12,
    totalCourses: 24,
    streak: 7,
    level: 'Intermediate'
  });

  const [topics, setTopics] = useState([
    {
      id: 1,
      title: 'Web Development',
      icon: <Code size={24} />,
      description: 'Build modern web applications',
      status: 'in-progress',
      progress: 65,
      modules: 12,
      completed: 8,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 2,
      title: 'Machine Learning',
      icon: <Brain size={24} />,
      description: 'AI and data science fundamentals',
      status: 'not-started',
      progress: 0,
      modules: 15,
      completed: 0,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 3,
      title: 'AI & Neural Networks',
      icon: <Target size={24} />,
      description: 'Advanced artificial intelligence',
      status: 'completed',
      progress: 100,
      modules: 10,
      completed: 10,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 4,
      title: 'Cybersecurity',
      icon: <Shield size={24} />,
      description: 'Security best practices',
      status: 'in-progress',
      progress: 30,
      modules: 8,
      completed: 3,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      id: 5,
      title: 'Automation',
      icon: <Zap size={24} />,
      description: 'Automate workflows with scripts',
      status: 'not-started',
      progress: 0,
      modules: 6,
      completed: 0,
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      id: 6,
      title: 'Cloud Computing',
      icon: <TrendingUp size={24} />,
      description: 'Scalable infrastructure',
      status: 'in-progress',
      progress: 45,
      modules: 14,
      completed: 7,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    }
  ]);

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample quiz questions
  const questionBank = {
    1: [
      {
        id: 1,
        question: 'What does JSX stand for in React?',
        options: [
          'JavaScript XML',
          'Java Standard Extension',
          'JavaScript Extension',
          'JS XML'
        ],
        correctAnswer: 0,
        explanation: 'JSX stands for JavaScript XML. It allows writing HTML structures in JavaScript.'
      },
      {
        id: 2,
        question: 'Which hook is used for state management in functional components?',
        options: [
          'useEffect',
          'useState',
          'useContext',
          'useReducer'
        ],
        correctAnswer: 1,
        explanation: 'useState hook is used for managing state in functional components.'
      }
    ],
    2: [
      {
        id: 1,
        question: 'What is supervised learning?',
        options: [
          'Learning without labeled data',
          'Learning with labeled data',
          'Reinforcement learning',
          'Unsupervised clustering'
        ],
        correctAnswer: 1,
        explanation: 'Supervised learning uses labeled datasets to train algorithms.'
      }
    ]
  };

  // Mock achievements
  const achievements = [
    { id: 1, title: 'Quick Learner', icon: <Zap size={16} />, earned: true },
    { id: 2, title: 'Perfect Score', icon: <Star size={16} />, earned: true },
    { id: 3, title: '7 Day Streak', icon: <Award size={16} />, earned: true },
    { id: 4, title: 'Completionist', icon: <CheckCircle size={16} />, earned: false },
    { id: 5, title: 'Early Bird', icon: <Clock size={16} />, earned: false },
  ];

  // Calculate overall progress
  const overallProgress = Math.round(
    topics.reduce((acc, topic) => acc + topic.progress, 0) / topics.length
  );

  // Start quiz for selected topic
  const startQuiz = (topicId) => {
    const selected = topics.find(t => t.id === topicId);
    setSelectedTopic(selected);
    setQuizQuestions(questionBank[topicId] || []);
    setQuizStarted(true);
    setQuizCompleted(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  // Handle quiz answer
  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setQuizCompleted(true);
      // Update topic progress if quiz completed successfully
      if ((score + 1) / quizQuestions.length >= 0.7) {
        updateTopicProgress(selectedTopic.id);
      }
    }
  };

  // Update topic progress after successful quiz
  const updateTopicProgress = (topicId) => {
    setTopics(prev => prev.map(topic => 
      topic.id === topicId 
        ? { ...topic, progress: Math.min(100, topic.progress + 20) }
        : topic
    ));
  };

  // Filter topics based on search and status
  const filteredTopics = topics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         topic.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || 
                         (filterStatus === 'completed' && topic.status === 'completed') ||
                         (filterStatus === 'in-progress' && topic.status === 'in-progress') ||
                         (filterStatus === 'not-started' && topic.status === 'not-started');
    return matchesSearch && matchesStatus;
  });

  // Get status badge
  const getStatusBadge = (status) => {
    const config = {
      'completed': { text: 'Completed', className: 'bg-green-100 text-green-800' },
      'in-progress': { text: 'In Progress', className: 'bg-blue-100 text-blue-800' },
      'not-started': { text: 'Not Started', className: 'bg-gray-100 text-gray-800' }
    };
    return config[status] || config['not-started'];
  };

  // Get next recommended topic
  const getNextRecommendedTopic = () => {
    return topics.find(topic => topic.status === 'not-started') || 
           topics.find(topic => topic.status === 'in-progress');
  };

  // Mobile responsiveness effect
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left section */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Menu size={24} />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Code size={20} className="text-white" />
                </div>
                <span className="font-bold text-xl">DevLearn</span>
              </div>
            </div>

            {/* Search bar */}
            <div className="flex-1 max-w-2xl mx-4 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search topics, modules, or quizzes..."
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <Settings size={20} />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <HelpCircle size={20} />
              </button>
              <div className="flex items-center space-x-2 pl-2 border-l dark:border-gray-700">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full border-2 border-blue-500"
                />
                <span className="hidden md:inline font-medium">{user.name}</span>
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <LogOut size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile search */}
          <div className="mt-3 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search topics..."
                className={`w-full pl-10 pr-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

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
                    <span className="font-semibold">{user.completedCourses}/{user.totalCourses}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Learning Streak</span>
                    <span className="font-semibold flex items-center">
                      <Zap size={16} className="mr-1 text-yellow-500" />
                      {user.streak} days
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Achievements</h3>
                <div className="space-y-2">
                  {achievements.map(achievement => (
                    <div key={achievement.id} className={`flex items-center p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} ${!achievement.earned && 'opacity-50'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${achievement.earned ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-400'}`}>
                        {achievement.icon}
                      </div>
                      <span className="text-sm">{achievement.title}</span>
                      {achievement.earned && <CheckCircle size={16} className="ml-auto text-green-500" />}
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
                  Welcome back, {user.name} 👋
                </h1>
                <p className="text-blue-100 mb-4">
                  Keep building, you're doing great! Today's tip: "Consistency beats intensity."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="w-24 bg-blue-900/30 rounded-full h-2 mr-2">
                      <div 
                        className="bg-white h-2 rounded-full"
                        style={{ width: `${(user.completedCourses / user.totalCourses) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">
                      {Math.round((user.completedCourses / user.totalCourses) * 100)}% Profile Complete
                    </span>
                  </div>
                  <span className="flex items-center text-sm">
                    <Award size={16} className="mr-1" />
                    Level: {user.level}
                  </span>
                </div>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Continue Learning
              </button>
            </div>
          </div>

          {/* Next Best Action */}
          <div className={`mb-8 p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-50 to-emerald-50'} border ${darkMode ? 'border-gray-700' : 'border-green-200'}`}>
            <div className="flex items-center">
              <Target className={`mr-3 ${darkMode ? 'text-green-400' : 'text-green-600'}`} size={24} />
              <div className="flex-1">
                <h3 className="font-semibold">Next Recommended Topic</h3>
                <p className="text-sm opacity-75">
                  Based on your progress, we recommend starting with:
                </p>
              </div>
              <button 
                onClick={() => {
                  const nextTopic = getNextRecommendedTopic();
                  if (nextTopic) startQuiz(nextTopic.id);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Start Now
              </button>
            </div>
          </div>

          {/* Topics Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Learning Topics</h2>
              <div className="flex space-x-2">
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
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTopics.map((topic) => (
                <div
                  key={topic.id}
                  className={`rounded-xl border ${topic.borderColor} ${darkMode ? 'bg-gray-800' : topic.bgColor} p-6 transition-transform hover:scale-[1.02] hover:shadow-lg`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${topic.color}`}>
                      {topic.icon}
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusBadge(topic.status).className}`}>
                      {getStatusBadge(topic.status).text}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {topic.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{topic.progress}%</span>
                      </div>
                      <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${topic.color}`}
                          style={{ width: `${topic.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>{topic.completed}/{topic.modules} modules</span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {Math.round((topic.modules - topic.completed) * 45)} min remaining
                      </span>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <button
                        onClick={() => startQuiz(topic.id)}
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                      >
                        {topic.status === 'completed' ? 'Review' : 
                         topic.status === 'in-progress' ? 'Continue' : 'Start'}
                        <ChevronRight size={20} className="ml-2" />
                      </button>
                      <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors`}>
                        <BookOpen size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quiz Section */}
          {quizStarted && !quizCompleted && (
            <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${darkMode ? 'bg-gray-900/90' : 'bg-black/50'}`}>
              <div className={`w-full max-w-2xl rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Quiz: {selectedTopic?.title}</h2>
                  <button
                    onClick={() => setQuizStarted(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                    <span>Score: {score}/{quizQuestions.length}</span>
                  </div>
                  <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-6">
                    {quizQuestions[currentQuestion]?.question}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {quizQuestions[currentQuestion]?.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className={`p-4 rounded-xl text-left transition-all ${darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 border border-gray-600' 
                          : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                        } hover:border-blue-500 hover:scale-[1.02]`}
                      >
                        <div className="flex items-center">
                          <div className={`w-6 h-6 rounded-full border mr-3 flex items-center justify-center ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                            {String.fromCharCode(65 + index)}
                          </div>
                          <span>{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                    disabled={currentQuestion === 0}
                    className="px-4 py-2 rounded-lg border disabled:opacity-50"
                  >
                    <ChevronLeft size={20} className="inline mr-2" />
                    Previous
                  </button>
                  <div className="text-sm opacity-75">
                    Tip: Read carefully before answering
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quiz Results */}
          {quizCompleted && (
            <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${darkMode ? 'bg-gray-900/90' : 'bg-black/50'}`}>
              <div className={`w-full max-w-md rounded-2xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl text-center`}>
                <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${score / quizQuestions.length >= 0.7 ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                  {score / quizQuestions.length >= 0.7 ? (
                    <CheckCircle size={40} />
                  ) : (
                    <Brain size={40} />
                  )}
                </div>
                
                <h2 className="text-2xl font-bold mb-2">
                  {score / quizQuestions.length >= 0.7 ? 'Quiz Completed! 🎉' : 'Keep Learning!'}
                </h2>
                
                <div className="text-4xl font-bold my-6">
                  {score}/{quizQuestions.length}
                </div>
                
                <div className={`text-lg mb-6 ${score / quizQuestions.length >= 0.7 ? 'text-green-600' : 'text-yellow-600'}`}>
                  {score / quizQuestions.length >= 0.7 
                    ? `You've mastered ${selectedTopic?.title}!`
                    : `Review ${selectedTopic?.title} concepts`}
                </div>
                
                <div className="space-y-3 mb-8">
                  {quizQuestions.map((q, index) => (
                    <div key={q.id} className="text-left p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">Q{index + 1}: {q.question}</span>
                        <span className={`text-sm px-2 py-1 rounded ${index === q.correctAnswer ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {index === q.correctAnswer ? 'Correct' : 'Incorrect'}
                        </span>
                      </div>
                      <p className="text-sm opacity-75">{q.explanation}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      setQuizStarted(false);
                      setQuizCompleted(false);
                    }}
                    className="flex-1 px-4 py-3 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setCurrentQuestion(0);
                      setScore(0);
                      setQuizCompleted(false);
                    }}
                    className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Retry Quiz
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Progress Analytics */}
          <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BarChart3 size={24} className="mr-3" />
              Learning Analytics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                <div className="flex items-center">
                  <Clock size={20} className="mr-3 text-blue-600" />
                  <div>
                    <p className="text-sm opacity-75">Total Study Time</p>
                    <p className="text-xl font-bold">42h 18m</p>
                  </div>
                </div>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                <div className="flex items-center">
                  <CheckCircle size={20} className="mr-3 text-green-600" />
                  <div>
                    <p className="text-sm opacity-75">Quiz Accuracy</p>
                    <p className="text-xl font-bold">87%</p>
                  </div>
                </div>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                <div className="flex items-center">
                  <Award size={20} className="mr-3 text-purple-600" />
                  <div>
                    <p className="text-sm opacity-75">Achievements</p>
                    <p className="text-xl font-bold">8/15</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className={`mt-12 py-8 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'} border-t`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <span className="font-bold">DevLearn</span>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Empowering developers through interactive learning
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className={`hover:text-blue-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Contact Support
              </a>
              <a href="#" className={`hover:text-blue-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Community
              </a>
              <a href="#" className={`hover:text-blue-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Resources
              </a>
              <a href="#" className={`hover:text-blue-600 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Terms & Privacy
              </a>
            </div>
          </div>
          
          <div className={`text-center mt-6 pt-6 border-t ${darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'} text-sm`}>
            © 2024 DevLearn. All rights reserved. Made with ❤️ for developers worldwide.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;