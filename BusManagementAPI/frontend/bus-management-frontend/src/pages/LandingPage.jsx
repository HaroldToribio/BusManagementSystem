import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBus, FaCalendarAlt, FaTicketAlt, FaRoute, FaPlus, FaList, FaEdit } from 'react-icons/fa';
import { LanguageContext, translations } from '../context/LanguageContext';

const LandingPage = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const content = translations[language].landing;
  const navLabels = translations[language].nav;

  const features = content.features.map((feature) => ({
    ...feature,
    Icon: {
      bus: FaBus,
      route: FaRoute,
      schedule: FaCalendarAlt,
      reservation: FaTicketAlt
    }[feature.icon] || FaBus
  }));

  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>{content.title}</h1>
          <p className="hero-subtitle">{content.subtitle}</p>
        </div>
        <div className="hero-image">
          <FaBus className="bus-icon" />
        </div>
      </header>

      <section className="description-section">
        <div className="description-card">
          <h2>{content.aboutTitle}</h2>
          <p>{content.aboutText}</p>
        </div>
      </section>

      <section className="features-section">
        <h2>{content.featuresTitle}</h2>
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.Icon;
            return (
              <div className="feature-card" key={index}>
                <Icon className="feature-icon" style={{ color: feature.color }} />
                <h3>{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-details">
                  <h4>{content.featureDetailsLabel}</h4>
                  <p>{feature.details}</p>
                  <div className="feature-actions">
                    <FaPlus className="action-icon" />
                    <span>{content.featureActionAdd}</span>
                  </div>
                  <div className="feature-actions">
                    <FaList className="action-icon" />
                    <span>{content.featureActionManage}</span>
                  </div>
                  <div className="feature-actions">
                    <FaEdit className="action-icon" />
                    <span>{content.featureActionEdit}</span>
                  </div>
                </div>
                <Link to={feature.path} className="feature-link" style={{ background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}dd 100%)` }}>
                  {feature.linkText}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="footer">
        <p>{content.footer}</p>
      </footer>
    </div>
  );
};

export default LandingPage;