import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import MobileAppDevelopment from './pages/services/MobileAppDevelopment';
import WebAppDevelopment from './pages/services/WebAppDevelopment';
import CustomSoftware from './pages/services/CustomSoftware';
import DatabaseManagement from './pages/services/DatabaseManagement';
import CloudSolutions from './pages/services/CloudSolutions';
import Cybersecurity from './pages/services/Cybersecurity';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/web-app-development" element={<WebAppDevelopment />} />
            <Route path="/services/custom-software" element={<CustomSoftware />} />
            <Route path="/services/database-management" element={<DatabaseManagement />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;