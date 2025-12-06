import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddScheduleForm = ({ onScheduleAdded }) => {
  const [routes, setRoutes] = useState([]);
  const [schedule, setSchedule] = useState({
    departureTime: '',
    arrivalTime: '',
    routeId: '',
  });

  useEffect(() => {
    // Obtener rutas para asignar al horario
    axios.get('http://localhost:5231/api/routes')
      .then(response => setRoutes(response.data))
      .catch(error => console.error('Error al obtener rutas:', error));
  }, []);

  const handleChange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5231/api/schedules', schedule);
      alert('Horario agregado correctamente.');
      setSchedule({ departureTime: '', arrivalTime: '', routeId: '' });
      onScheduleAdded(); // Recargar lista después de agregar
    } catch (error) {
      console.error('Error al agregar horario:', error);
      alert('Error al agregar horario.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Horario</h2>
      <input
        name="departureTime"
        placeholder="Hora de Salida"
        value={schedule.departureTime}
        onChange={handleChange}
        required
      />
      <input
        name="arrivalTime"
        placeholder="Hora de Llegada"
        value={schedule.arrivalTime}
        onChange={handleChange}
        required
      />
      <select
        name="routeId"
        value={schedule.routeId}
        onChange={handleChange}
        required
      >
        <option value="">Seleccionar Ruta</option>
        {routes.map((route) => (
          <option key={route.id} value={route.id}>
            {route.origin} - {route.destination}
          </option>
        ))}
      </select>
      <button type="submit">Agregar Horario</button>
    </form>
  );
};

export default AddScheduleForm;
