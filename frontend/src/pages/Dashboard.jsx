// frontend/src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import DashboardContent from '../components/DashboardContent';

const Dashboard = () => {
  // State management
  const [user, setUser] = useState({
    name: 'Sharif',
    completedCourses: 12,
    totalCourses: 24,
    streak: 7,
    level: 'Intermediate'
  });

  const [topics, setTopics] = useState([
    {
      id: 1,
      title: 'Web Development',
      icon: 'code',
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
      icon: 'brain',
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
      icon: 'target',
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
      icon: 'shield',
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
      icon: 'zap',
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
      icon: 'trending-up',
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

  // Start quiz for selected topic
  const startQuiz = (topicId) => {
    const selected = topics.find(t => t.id === topicId);
    setSelectedTopic(selected);
    
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

  // Convert icon strings to JSX elements for topics
  const topicsWithIcons = topics.map(topic => {
    const iconMap = {
      'code': <div>💻</div>,
      'brain': <div>🧠</div>,
      'target': <div>🎯</div>,
      'shield': <div>🛡️</div>,
      'zap': <div>⚡</div>,
      'trending-up': <div>📈</div>
    };
    
    return {
      ...topic,
      icon: iconMap[topic.icon] || <div>📚</div>
    };
  });

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Dashboard Header */}
      <DashboardHeader 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      {/* Dashboard Content */}
      <DashboardContent
        darkMode={darkMode}
        user={user}
        topics={topicsWithIcons}
        setTopics={setTopics}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        quizQuestions={quizQuestions}
        setQuizQuestions={setQuizQuestions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        quizStarted={quizStarted}
        setQuizStarted={setQuizStarted}
        quizCompleted={quizCompleted}
        setQuizCompleted={setQuizCompleted}
        score={score}
        setScore={setScore}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        searchQuery={searchQuery}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        startQuiz={startQuiz}
        handleAnswer={handleAnswer}
        updateTopicProgress={updateTopicProgress}
      />
    </div>
  );
};

export default Dashboard;