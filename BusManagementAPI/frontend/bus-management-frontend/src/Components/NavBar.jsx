import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBus, FaCalendarAlt, FaTicketAlt, FaRoute, FaHome, FaMoon, FaSun } from 'react-icons/fa';
import { LanguageContext, translations } from '../context/LanguageContext';

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language].nav;

  const navItems = [
    { path: '/', icon: FaHome, label: t.home },
    { path: '/buses', icon: FaBus, label: t.buses },
    { path: '/routes', icon: FaRoute, label: t.routes },
    { path: '/schedules', icon: FaCalendarAlt, label: t.schedules },
    { path: '/reservations', icon: FaTicketAlt, label: t.reservations }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <FaBus className="brand-icon" />
          <span>{t.brand}</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`navbar-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon className="nav-icon" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="navbar-actions">
          <div className="navbar-language">
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              aria-label={t.english}
            >
              EN
            </button>
            <button
              className={`lang-btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => setLanguage('es')}
              aria-label={t.spanish}
            >
              ES
            </button>
          </div>

          <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label={t.themeToggle}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;