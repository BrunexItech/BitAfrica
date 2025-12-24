import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Contact from './pages/Contact';

// Authentication Pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';

// Dashboard Placeholder
import Dashboard from './pages/Dashboard';

// Layouts
import AuthenticatedLayout from './components/AuthenticatedLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Error Pages
import NotFound from './pages/NotFound';

// Public Layout Component (with Header)
const PublicLayout = ({ children }) => (
  <>
    <Header />
    <main className="flex-grow pt-16"> {/* Added pt-16 to offset fixed header */}
      <ScrollToTop />
      {children}
    </main>
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 flex flex-col">
        <Routes>
          {/* ========== PUBLIC ROUTES (with Header + Footer) ========== */}
          
          {/* Main Navigation Routes */}
          <Route path="/" element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          } />
          
          <Route path="/services" element={
            <PublicLayout>
              <Services />
            </PublicLayout>
          } />
          
          <Route path="/industries" element={
            <PublicLayout>
              <Industries />
            </PublicLayout>
          } />
          
          <Route path="/company" element={
            <PublicLayout>
              <Company />
            </PublicLayout>
          } />
          
          <Route path="/academy" element={
            <PublicLayout>
              <Academy />
            </PublicLayout>
          } />
          
          <Route path="/contact" element={
            <PublicLayout>
              <Contact />
            </PublicLayout>
          } />
          
          {/* Authentication Routes */}
          <Route path="/signin" element={
            <PublicLayout>
              <SignIn />
            </PublicLayout>
          } />
          
          <Route path="/forgot-password" element={
            <PublicLayout>
              <ForgotPassword />
            </PublicLayout>
          } />
          
          <Route path="/reset-password/:uid/:token" element={
            <PublicLayout>
              <ResetPassword />
            </PublicLayout>
          } />
          
          {/* Sign Up Routes */}
          <Route path="/signup" element={
            <PublicLayout>
              <SignUp />
            </PublicLayout>
          } />
          
          <Route path="/signup/enterprise" element={
            <PublicLayout>
              <SignUp />
            </PublicLayout>
          } />
          
          <Route path="/signup/partner" element={
            <PublicLayout>
              <SignUp />
            </PublicLayout>
          } />
          
          {/* ========== SERVICE DETAIL ROUTES (with Header + Footer) ========== */}
          
          <Route path="/services/ai-consulting" element={
            <PublicLayout>
              <Services />
            </PublicLayout>
          } />
          
          <Route path="/services/cloud-migration" element={
            <PublicLayout>
              <Services />
            </PublicLayout>
          } />
          
          <Route path="/services/digital-transformation" element={
            <PublicLayout>
              <Services />
            </PublicLayout>
          } />
          
          <Route path="/services/tech-infrastructure" element={
            <PublicLayout>
              <Services />
            </PublicLayout>
          } />
          
          <Route path="/services/support-maintenance" element={
            <PublicLayout>
              <Services />
            </PublicLayout>
          } />
          
          {/* ========== INDUSTRY DETAIL ROUTES (with Header + Footer) ========== */}
          
          <Route path="/industries/finance-banking" element={
            <PublicLayout>
              <Industries />
            </PublicLayout>
          } />
          
          <Route path="/industries/healthcare" element={
            <PublicLayout>
              <Industries />
            </PublicLayout>
          } />
          
          <Route path="/industries/retail-ecommerce" element={
            <PublicLayout>
              <Industries />
            </PublicLayout>
          } />
          
          <Route path="/industries/manufacturing" element={
            <PublicLayout>
              <Industries />
            </PublicLayout>
          } />
          
          <Route path="/industries/education" element={
            <PublicLayout>
              <Industries />
            </PublicLayout>
          } />
          
          <Route path="/industries/government" element={
            <PublicLayout>
              <Industries />
            </PublicLayout>
          } />
          
          {/* ========== COMPANY DETAIL ROUTES (with Header + Footer) ========== */}
          
          <Route path="/company/about-us" element={
            <PublicLayout>
              <Company />
            </PublicLayout>
          } />
          
          <Route path="/company/leadership" element={
            <PublicLayout>
              <Company />
            </PublicLayout>
          } />
          
          <Route path="/company/careers" element={
            <PublicLayout>
              <Company />
            </PublicLayout>
          } />
          
          <Route path="/company/partners" element={
            <PublicLayout>
              <Company />
            </PublicLayout>
          } />
          
          <Route path="/company/newsroom" element={
            <PublicLayout>
              <Company />
            </PublicLayout>
          } />
          
          {/* ========== DASHBOARD ROUTE (NO Header, YES Footer, Protected) ========== */}
          
          <Route element={<AuthenticatedLayout />}>
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
          </Route>
          
          {/* ========== ERROR ROUTE (with Header + Footer) ========== */}
          
          <Route path="*" element={
            <PublicLayout>
              <NotFound />
            </PublicLayout>
          } />
        </Routes>
        
        {/* Footer is always shown at the bottom */}
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;