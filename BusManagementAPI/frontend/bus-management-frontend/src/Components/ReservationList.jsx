import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaCalendarAlt, FaEdit, FaTrash } from 'react-icons/fa';
import { LanguageContext, translations } from '../context/LanguageContext';
import FormNotification from './FormNotification';

const ReservationList = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].reservationForm;
  const [reservations, setReservations] = useState([]);
  const [newReservation, setNewReservation] = useState({ passengerName: '', scheduleId: '' });
  const [schedules, setSchedules] = useState([]);
  const [editingReservation, setEditingReservation] = useState(null);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    fetchReservations();
    fetchSchedules();
  }, []);

  const fetchReservations = () => {
    axios.get('http://localhost:5231/api/reservations')
      .then(res => setReservations(res.data))
      .catch(err => {
        console.error('Error al obtener reservas:', err);
        setMessage(t.fetchError || 'Unable to load reservations.');
        setMessageType('error');
      });
  };

  const fetchSchedules = () => {
    axios.get('http://localhost:5231/api/schedules')
      .then(res => setSchedules(res.data))
      .catch(err => {
        console.error('Error al obtener horarios:', err);
        setMessage(t.fetchError || 'Unable to load schedules.');
        setMessageType('error');
      });
  };

  const handleChange = (e) => {
    setNewReservation({ ...newReservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newReservation.passengerName || !newReservation.scheduleId) {
      setMessage(t.fillFields || 'Please complete all fields.');
      setMessageType('error');
      return;
    }
    try {
      await axios.post('http://localhost:5231/api/reservations', newReservation);
      setMessage(t.addedSuccess || 'Reservation created successfully');
      setMessageType('success');
      setNewReservation({ passengerName: '', scheduleId: '' });
      fetchReservations();
    } catch (err) {
      setMessage(t.addError || 'Error creating reservation');
      setMessageType('error');
      console.error(err);
    }
  };

  const handleEdit = (reservation) => {
    setEditingReservation(reservation); // Rellenamos el formulario con la reserva seleccionada
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingReservation.passengerName || !editingReservation.scheduleId) {
      setMessage(t.fillFields || 'Please complete all fields.');
      setMessageType('error');
      return;
    }
    try {
      await axios.put(`http://localhost:5231/api/reservations/${editingReservation.id}`, editingReservation);
      setMessage(t.updatedSuccess || 'Reservation updated successfully');
      setMessageType('success');
      setEditingReservation(null);
      fetchReservations();
    } catch (err) {
      setMessage(t.updateError || 'Error updating reservation');
      setMessageType('error');
      console.error(err);
    }
  };

  const deleteReservation = async (id) => {
    if (window.confirm(t.deleteConfirmation || 'Are you sure you want to delete this reservation?')) {
      try {
        await axios.delete(`http://localhost:5231/api/reservations/${id}`);
        fetchReservations();
      } catch (err) {
        console.error('Error deleting reservation:', err);
      }
    }
  };

  return (
    <div className="list-container">
      <h2>{t.title}</h2>

      {/* Add Reservation Form */}
      <div className="form-container">
        <h3>{t.title}</h3>
        <FormNotification message={message} type={messageType} />
        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-group">
            <label><FaUser /> {t.passengerName}</label>
            <input
              name="passengerName"
              placeholder={t.placeholderPassenger}
              value={newReservation.passengerName}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label><FaCalendarAlt /> {t.schedule}</label>
            <select
              name="scheduleId"
              value={newReservation.scheduleId}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="">{t.selectSchedule}</option>
              {schedules.map((schedule) => (
                <option key={schedule.id} value={schedule.id}>
                  {schedule.departureTime} → {schedule.arrivalTime} ({schedule.route?.origin} - {schedule.route?.destination})
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-btn">{t.buttonAdd}</button>
        </form>
      </div>

      {/* Edit Form */}
      {editingReservation && (
        <div className="edit-form-card">
          <h3>{t.editTitle}</h3>
          <form onSubmit={handleUpdate} className="reservation-form">
            <div className="form-group">
              <label><FaUser /> {t.passengerName}</label>
              <input
                name="passengerName"
                placeholder={t.placeholderPassenger}
                value={editingReservation.passengerName}
                onChange={(e) => setEditingReservation({ ...editingReservation, passengerName: e.target.value })}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label><FaCalendarAlt /> {t.schedule}</label>
              <select
                name="scheduleId"
                value={editingReservation.scheduleId}
                onChange={(e) => setEditingReservation({ ...editingReservation, scheduleId: e.target.value })}
                required
                className="form-input"
              >
                <option value="">{t.selectSchedule}</option>
                {schedules.map((schedule) => (
                  <option key={schedule.id} value={schedule.id}>
                    {schedule.departureTime} → {schedule.arrivalTime} ({schedule.route?.origin} - {schedule.route?.destination})
                  </option>
                ))}
              </select>
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">{t.buttonUpdate}</button>
              <button type="button" className="cancel-btn" onClick={() => setEditingReservation(null)}>{t.cancel}</button>
            </div>
          </form>
        </div>
      )}

      {/* Reservations Table */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>{t.table.passenger}</th>
              <th>{t.table.schedule}</th>
              <th>{t.table.route}</th>
              <th>{t.table.actions}</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map(r => (
              <tr key={r.id} className="table-row">
                <td>{r.passengerName}</td>
                <td>{r.schedule?.departureTime} → {r.schedule?.arrivalTime}</td>
                <td>{r.schedule?.route?.origin} - {r.schedule?.route?.destination}</td>
                <td>
                  <div className="action-buttons">
                    <button onClick={() => handleEdit(r)} className="action-btn edit-btn" title={t.edit}>
                      <FaEdit /> {t.edit}
                    </button>
                    <button onClick={() => deleteReservation(r.id)} className="action-btn delete-btn" title={t.delete}>
                      <FaTrash /> {t.delete}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationList;