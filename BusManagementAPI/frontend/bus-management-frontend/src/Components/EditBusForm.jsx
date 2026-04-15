import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormNotification from './FormNotification';

const EditBusForm = ({ bus, onCancel, onBusUpdated }) => {
  const [formData, setFormData] = useState({ ...bus });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    setFormData({ ...bus });
  }, [bus]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5231/api/buses/${formData.id}`, formData);
      setMessage('Autobús actualizado correctamente.');
      setMessageType('success');
      onBusUpdated();
    } catch (error) {
      console.error('Error al actualizar autobús:', error);
      setMessage('Error al actualizar autobús.');
      setMessageType('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Autobús</h2>
      <FormNotification message={message} type={messageType} />
      <input name="busNumber" placeholder="Número" value={formData.busNumber} onChange={handleChange} required />
      <input name="model" placeholder="Modelo" value={formData.model} onChange={handleChange} required />
      <input name="capacity" type="number" placeholder="Capacidad" value={formData.capacity} onChange={handleChange} required />
      <input name="year" type="number" placeholder="Año" value={formData.year} onChange={handleChange} required />
      <input name="status" placeholder="Estado" value={formData.status} onChange={handleChange} required />
      <button type="submit">Guardar Cambios</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default EditBusForm;
