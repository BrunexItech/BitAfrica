import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import ResetPassword from './pages/ResetPassword';


// Page Components
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Company from './pages/Company';
import Academy from './pages/Academy';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';

// Authentication Pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';

// Solution Detail Pages
import AIAnalytics from './pages/solutions/AIAnalytics';
import Automation from './pages/solutions/Automation';
import Cybersecurity from './pages/solutions/Cybersecurity';
import DevSolutions from './pages/solutions/DevSolutions';
import MachineLearning from './pages/solutions/MachineLearning';
import CloudAI from './pages/solutions/CloudAI';

// Dashboard Placeholder
import Dashboard from './pages/Dashboard';

// Error Pages
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
        <Header />
        <main className="flex-grow">
          <ScrollToTop /> {/* Add this line */}
          <Routes>
            {/* ========== PUBLIC ROUTES ========== */}
            
            {/* Main Navigation Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/company" element={<Company />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Authentication Routes */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:uid/:token" element={<ResetPassword />} />

            
            {/* Sign Up Routes */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup/enterprise" element={<SignUp />} />
            <Route path="/signup/partner" element={<SignUp />} />
            
            {/* ========== SOLUTION DETAIL ROUTES ========== */}
            
            <Route path="/solutions/ai-analytics" element={<AIAnalytics />} />
            <Route path="/solutions/automation" element={<Automation />} />
            <Route path="/solutions/cybersecurity" element={<Cybersecurity />} />
            <Route path="/solutions/dev-solutions" element={<DevSolutions />} />
            <Route path="/solutions/machine-learning" element={<MachineLearning />} />
            <Route path="/solutions/cloud-ai" element={<CloudAI />} />
            
            {/* ========== SERVICE DETAIL ROUTES ========== */}
            
            <Route path="/services/ai-consulting" element={<Services />} />
            <Route path="/services/cloud-migration" element={<Services />} />
            <Route path="/services/digital-transformation" element={<Services />} />
            <Route path="/services/tech-infrastructure" element={<Services />} />
            <Route path="/services/support-maintenance" element={<Services />} />
            
            {/* ========== INDUSTRY DETAIL ROUTES ========== */}
            
            <Route path="/industries/finance-banking" element={<Industries />} />
            <Route path="/industries/healthcare" element={<Industries />} />
            <Route path="/industries/retail-ecommerce" element={<Industries />} />
            <Route path="/industries/manufacturing" element={<Industries />} />
            <Route path="/industries/education" element={<Industries />} />
            <Route path="/industries/government" element={<Industries />} />
            
            {/* ========== COMPANY DETAIL ROUTES ========== */}
            
            <Route path="/company/about-us" element={<Company />} />
            <Route path="/company/leadership" element={<Company />} />
            <Route path="/company/careers" element={<Company />} />
            <Route path="/company/partners" element={<Company />} />
            <Route path="/company/newsroom" element={<Company />} />
            
            {/* ========== DASHBOARD ROUTE ========== */}
            
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* ========== ERROR ROUTE ========== */}
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton /> {/* Add this line */}
      </div>
    </Router>
  );
}

export default App;