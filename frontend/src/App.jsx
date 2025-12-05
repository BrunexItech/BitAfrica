import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // CHANGED THIS LINE
import Header from './components/Header';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Company from './pages/Company';
import Resources from './pages/Resources';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
        <Header />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/company" element={<Company />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />

          {/* Nested Routes for Subpages */}
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/industries/:industryId" element={<Industries />} />
          <Route path="/company/:sectionId" element={<Company />} />
          <Route path="/resources/:resourceId" element={<Resources />} />
          <Route path="/solutions/:solutionId" element={<Solutions />} />
          
          {/* Optional: 404 Page */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;