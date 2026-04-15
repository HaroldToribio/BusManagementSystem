import React, { useContext, useState } from 'react';
import AddScheduleForm from '../Components/AddScheduleForm';
import AddRouteForm from '../Components/AddRouteForm';
import RoutesList from '../Components/RoutesList';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LanguageContext, translations } from '../context/LanguageContext';

const SchedulesPage = () => {
  const [reloadRoutes, setReloadRoutes] = useState(false);
  const [reloadSchedules, setReloadSchedules] = useState(false);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const handleRouteAdded = () => {
    setReloadRoutes(!reloadRoutes);
  };

  const handleScheduleAdded = () => {
    setReloadSchedules(!reloadSchedules);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">
          <FaArrowLeft /> {t.nav.backToHome}
        </Link>
        <h1>{t.pages.schedulesTitle}</h1>
      </div>

      <div className="content-grid">
        <div className="form-card">
          <AddRouteForm onRouteAdded={handleRouteAdded} />
          <hr style={{ margin: '2rem 0' }} />
          <AddScheduleForm onScheduleAdded={handleScheduleAdded} />
        </div>
        <div className="list-card">
          <RoutesList reload={reloadRoutes} />
        </div>
      </div>
    </div>
  );
};

export default SchedulesPage;