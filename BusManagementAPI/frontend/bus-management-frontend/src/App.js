import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import LandingPage from './pages/LandingPage';
import BusesPage from './pages/BusesPage';
import ReservationsPage from './pages/ReservationsPage';
import SchedulesPage from './pages/SchedulesPage';
import RoutesPage from './pages/RoutesPage';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <LanguageProvider>
      <Router>
        <div className={`App ${darkMode ? 'dark' : ''}`}>
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/buses" element={<BusesPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/schedules" element={<SchedulesPage />} />
            <Route path="/routes" element={<RoutesPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;