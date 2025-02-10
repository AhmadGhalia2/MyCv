import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Zumo from './pages/projects/zumo/ZumoRobot'
import JobsExperience from './pages/jobs/JobsExperience'
import Contact from './pages/contact/Contact'
import DiceGame from './pages/DiceGame/DiceGame'
import RealTimeMonitoring from './pages/projects/realTime/RealTime'
import BusBoarding from './pages/projects/BusBoarding/BusBoarding'
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [pathname]);

  return null; // This component doesn't render anything
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Ensures scrolling to the top on route change */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/zumo" element={<Zumo />} />
        <Route path="/projects/realTimeMonitoring" element={<RealTimeMonitoring />} />
        <Route path="/projects/busBoarding" element={<BusBoarding />} />
        <Route path="/jobsExperience" element={<JobsExperience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/diceGame" element={<DiceGame />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
