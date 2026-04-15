import React, { useContext, useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { LanguageContext, translations } from '../context/LanguageContext';
import FormNotification from './FormNotification';

const AddRouteForm = ({ onRouteAdded }) => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].routeForm;
  const [route, setRoute] = useState({
    origin: '',
    destination: ''
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    setRoute({ ...route, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5231/api/routes', route);
      setMessage(t.addedSuccess || 'Route added successfully');
      setMessageType('success');
      setRoute({ origin: '', destination: '' });
      onRouteAdded?.(); // Reload list
    } catch (error) {
      console.error('Error adding route:', error);
      setMessage(t.addError || 'Error adding route');
      setMessageType('error');
    }
  };

  return (
    <div className="form-container">
      <h2>{t.title}</h2>
      <FormNotification message={message} type={messageType} />
      <form onSubmit={handleSubmit} className="route-form">
        <div className="form-group">
          <label><FaMapMarkerAlt /> {t.origin}</label>
          <input
            name="origin"
            placeholder={t.placeholderOrigin}
            value={route.origin}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label><FaMapMarkerAlt /> {t.destination}</label>
          <input
            name="destination"
            placeholder={t.placeholderDestination}
            value={route.destination}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn">{t.button}</button>
      </form>
    </div>
  );
};

export default AddRouteForm;