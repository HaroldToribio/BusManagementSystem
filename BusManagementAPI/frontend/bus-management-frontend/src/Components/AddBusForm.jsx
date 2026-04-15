import React, { useContext, useState } from 'react';
import axios from 'axios';
import { FaBus, FaTag, FaUsers, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { LanguageContext, translations } from '../context/LanguageContext';
import FormNotification from './FormNotification';

const AddBusForm = ({ onBusAdded }) => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].busForm;
  const [bus, setBus] = useState({
    busNumber: '',
    model: '',
    capacity: '',
    year: '',
    status: ''
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    setBus({ ...bus, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5231/api/buses', bus);
      setMessage(t.addedSuccess || 'Bus added successfully');
      setMessageType('success');
      setBus({ busNumber: '', model: '', capacity: '', year: '', status: '' });
      onBusAdded?.(); // Recargar lista
    } catch (error) {
      console.error('Error al agregar autobús:', error);
      setMessage(t.addError || 'Error adding bus');
      setMessageType('error');
    }
  };

  return (
    <div className="form-container">
      <h2>{t.title}</h2>
      <FormNotification message={message} type={messageType} />
      <form onSubmit={handleSubmit} className="bus-form">
        <div className="form-group">
          <label><FaTag /> {t.busNumber}</label>
          <input
            name="busNumber"
            placeholder={t.placeholderBusNumber}
            value={bus.busNumber}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label><FaBus /> {t.model}</label>
          <input
            name="model"
            placeholder={t.placeholderModel}
            value={bus.model}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label><FaUsers /> {t.capacity}</label>
          <input
            name="capacity"
            type="number"
            placeholder={t.placeholderCapacity}
            value={bus.capacity}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label><FaCalendarAlt /> {t.year}</label>
          <input
            name="year"
            type="number"
            placeholder={t.placeholderYear}
            value={bus.year}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label><FaCheckCircle /> {t.status}</label>
          <input
            name="status"
            placeholder={t.placeholderStatus}
            value={bus.status}
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

export default AddBusForm;