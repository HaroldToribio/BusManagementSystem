import React, { useContext } from 'react';
import ReservationList from '../Components/ReservationList';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LanguageContext, translations } from '../context/LanguageContext';

const ReservationsPage = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">
          <FaArrowLeft /> {t.nav.backToHome}
        </Link>
        <h1>{t.pages.reservationsTitle}</h1>
      </div>

      <div className="content-card">
        <ReservationList />
      </div>
    </div>
  );
};

export default ReservationsPage;