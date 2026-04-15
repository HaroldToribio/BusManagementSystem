import React, { useContext, useState } from 'react';
import BusList from '../Components/BusList';
import AddBusForm from '../Components/AddBusForm';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LanguageContext, translations } from '../context/LanguageContext';

const BusesPage = () => {
  const [reload, setReload] = useState(false);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const handleBusAdded = () => {
    setReload(!reload);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">
          <FaArrowLeft /> {t.nav.backToHome}
        </Link>
        <h1>{t.pages.busesTitle}</h1>
      </div>

      <div className="content-grid">
        <div className="form-card">
          <AddBusForm onBusAdded={handleBusAdded} />
        </div>
        <div className="list-card">
          <BusList reload={reload} />
        </div>
      </div>
    </div>
  );
};

export default BusesPage;