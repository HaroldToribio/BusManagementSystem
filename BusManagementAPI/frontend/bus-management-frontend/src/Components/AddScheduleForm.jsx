import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { FaClock, FaRoute } from 'react-icons/fa';
import { LanguageContext, translations } from '../context/LanguageContext';
import FormNotification from './FormNotification';

const AddScheduleForm = ({ onScheduleAdded }) => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].scheduleForm;
  const [routes, setRoutes] = useState([]);
  const [schedule, setSchedule] = useState({
    departureTime: '',
    arrivalTime: '',
    routeId: '',
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    // Obtener rutas para asignar al horario
    axios.get('http://localhost:5231/api/routes')
      .then(response => setRoutes(response.data))
      .catch(error => {
        console.error('Error al obtener rutas:', error);
        setMessage(t.fetchRoutesError || 'Unable to load routes, please try again later.');
        setMessageType('error');
      });
  }, []);

  const handleChange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5231/api/schedules', schedule);
      setMessage(t.addedSuccess || 'Schedule added successfully');
      setMessageType('success');
      setSchedule({ departureTime: '', arrivalTime: '', routeId: '' });
      onScheduleAdded?.(); // Recargar lista después de agregar
    } catch (error) {
      console.error('Error al agregar horario:', error);
      setMessage(t.addError || 'Error adding schedule');
      setMessageType('error');
    }
  };

  return (
    <div className="form-container">
      <h2>{t.title}</h2>
      <FormNotification message={message} type={messageType} />
      <form onSubmit={handleSubmit} className="schedule-form">
        <div className="form-group">
          <label><FaClock /> {t.departureTime}</label>
          <input
            name="departureTime"
            placeholder={t.placeholderDeparture}
            value={schedule.departureTime}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label><FaClock /> {t.arrivalTime}</label>
          <input
            name="arrivalTime"
            placeholder={t.placeholderArrival}
            value={schedule.arrivalTime}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label><FaRoute /> {t.route}</label>
          <select
            name="routeId"
            value={schedule.routeId}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="">{t.selectRoute}</option>
            {routes.map((route) => (
              <option key={route.id} value={route.id}>
                {route.origin} - {route.destination}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-btn">{t.button}</button>
      </form>
    </div>
  );
};

export default AddScheduleForm;
