import React, { useState } from 'react';
import axios from 'axios';

const AddBusForm = ({ onBusAdded }) => {
  const [bus, setBus] = useState({
    busNumber: '',
    model: '',
    capacity: '',
    year: '',
    status: ''
  });

  const handleChange = (e) => {
    setBus({ ...bus, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5231/api/buses', bus);
      alert('Autobús agregado correctamente.');
      setBus({ busNumber: '', model: '', capacity: '', year: '', status: '' });
      onBusAdded(); // Recargar lista
    } catch (error) {
      console.error('Error al agregar autobús:', error);
      alert('Error al agregar autobús.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="mb-3">Agregar Autobús</h2>
      <div className="mb-3">
        <input
          name="busNumber"
          placeholder="Número"
          value={bus.busNumber}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          name="model"
          placeholder="Modelo"
          value={bus.model}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          name="capacity"
          type="number"
          placeholder="Capacidad"
          value={bus.capacity}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          name="year"
          type="number"
          placeholder="Año"
          value={bus.year}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          name="status"
          placeholder="Estado"
          value={bus.status}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">Agregar</button>
    </form>
  );
};

export default AddBusForm;