import React, { useContext, useState } from 'react';
import RoutesList from '../Components/RoutesList';
import AddRouteForm from '../Components/AddRouteForm';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LanguageContext, translations } from '../context/LanguageContext';

const RoutesPage = () => {
  const [reload, setReload] = useState(false);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const handleRouteAdded = () => {
    setReload(!reload);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">
          <FaArrowLeft /> {t.nav.backToHome}
        </Link>
        <h1>{t.pages.routesTitle}</h1>
      </div>

      <div className="content-grid">
        <div className="form-card">
          <AddRouteForm onRouteAdded={handleRouteAdded} />
        </div>
        <div className="list-card">
          <RoutesList reload={reload} />
        </div>
      </div>
    </div>
  );
};

export default RoutesPage;