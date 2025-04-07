import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

import BeeMonitor from './pages/projects/BeeMonitor';
import PortfolioOptimiser from './pages/projects/PortfolioOptimiser';
import RatTracker from './pages/projects/RatTracker';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/bee-monitor" element={<BeeMonitor />} />
        <Route path="/projects/rat-tracker" element={<RatTracker />} />
        <Route path="/projects/portfolio-optimiser" element={<PortfolioOptimiser />} />
      </Routes>
    </>
  );
}

export default App;