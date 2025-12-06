import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [newReservation, setNewReservation] = useState({ passengerName: '', scheduleId: '' });
  const [schedules, setSchedules] = useState([]);
  const [editingReservation, setEditingReservation] = useState(null);

  useEffect(() => {
    fetchReservations();
    fetchSchedules();
  }, []);

  const fetchReservations = () => {
    axios.get('http://localhost:5231/api/reservations')
      .then(res => setReservations(res.data))
      .catch(err => console.error('Error al obtener reservas:', err));
  };

  const fetchSchedules = () => {
    axios.get('http://localhost:5231/api/schedules')
      .then(res => setSchedules(res.data))
      .catch(err => console.error('Error al obtener horarios:', err));
  };

  const handleChange = (e) => {
    setNewReservation({ ...newReservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newReservation.passengerName || !newReservation.scheduleId) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    try {
      await axios.post('http://localhost:5231/api/reservations', newReservation);
      alert('Reserva creada correctamente');
      setNewReservation({ passengerName: '', scheduleId: '' });
      fetchReservations(); // Recargar las reservas
    } catch (err) {
      alert('Error al crear reserva');
      console.error(err);
    }
  };

  const handleEdit = (reservation) => {
    setEditingReservation(reservation); // Rellenamos el formulario con la reserva seleccionada
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingReservation.passengerName || !editingReservation.scheduleId) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    try {
      await axios.put(`http://localhost:5231/api/reservations/${editingReservation.id}`, editingReservation);
      alert('Reserva actualizada correctamente');
      setEditingReservation(null); // Ocultar formulario de edición
      fetchReservations(); // Recargar las reservas
    } catch (err) {
      alert('Error al actualizar reserva');
      console.error(err);
    }
  };

  const deleteReservation = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar esta reserva?")) {
      try {
        await axios.delete(`http://localhost:5231/api/reservations/${id}`);
        fetchReservations();
      } catch (err) {
        console.error('Error al eliminar reserva:', err);
      }
    }
  };

  return (
    <div>
      <h2>Reservas</h2>

      {/* Formulario de agregar reserva */}
      <form onSubmit={handleSubmit} className="p-4 border rounded mb-3">
        <h3>Agregar Reserva</h3>
        <div className="mb-3">
          <input
            name="passengerName"
            placeholder="Nombre del pasajero"
            value={newReservation.passengerName}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <select
            name="scheduleId"
            value={newReservation.scheduleId}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="">Seleccione un horario</option>
            {schedules.map((schedule) => (
              <option key={schedule.id} value={schedule.id}>
                {schedule.departureTime} → {schedule.arrivalTime} ({schedule.route?.origin} - {schedule.route?.destination})
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Agregar Reserva</button>
      </form>

      {/* Formulario de edición */}
      {editingReservation && (
        <div className="p-4 border rounded mb-3">
          <h3>Editar Reserva</h3>
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <input
                name="passengerName"
                placeholder="Nombre del pasajero"
                value={editingReservation.passengerName}
                onChange={(e) => setEditingReservation({ ...editingReservation, passengerName: e.target.value })}
                required
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <select
                name="scheduleId"
                value={editingReservation.scheduleId}
                onChange={(e) => setEditingReservation({ ...editingReservation, scheduleId: e.target.value })}
                required
                className="form-control"
              >
                <option value="">Seleccione un horario</option>
                {schedules.map((schedule) => (
                  <option key={schedule.id} value={schedule.id}>
                    {schedule.departureTime} → {schedule.arrivalTime} ({schedule.route?.origin} - {schedule.route?.destination})
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-success w-100">Actualizar Reserva</button>
            <button type="button" className="btn btn-secondary w-100 mt-2" onClick={() => setEditingReservation(null)}>Cancelar</button>
          </form>
        </div>
      )}

      {/* Lista de reservas */}
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Pasajero</th>
            <th>Horario</th>
            <th>Ruta</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(r => (
            <tr key={r.id}>
              <td>{r.passengerName}</td>
              <td>{r.schedule?.departureTime} → {r.schedule?.arrivalTime}</td>
              <td>{r.schedule?.route?.origin} - {r.schedule?.route?.destination}</td>
              <td>
                <button onClick={() => handleEdit(r)} className="btn btn-warning btn-sm mx-1">
                  Editar
                </button>
                <button onClick={() => deleteReservation(r.id)} className="btn btn-danger btn-sm mx-1">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;