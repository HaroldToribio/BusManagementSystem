import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BusList = ({ reload }) => {
  const [buses, setBuses] = useState([]);
  const [editingBus, setEditingBus] = useState(null); // Estado para el autobús en edición

  useEffect(() => {
    axios.get('http://localhost:5231/api/buses')
      .then(response => setBuses(response.data))
      .catch(error => console.error('Error al obtener autobuses:', error));
  }, [reload]);

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este autobús?')) {
      try {
        await axios.delete(`http://localhost:5231/api/buses/${id}`);
        setBuses(buses.filter(bus => bus.id !== id));  // Actualiza la lista sin recargar
      } catch (error) {
        console.error('Error al eliminar autobús:', error);
        alert('No se pudo eliminar el autobús.');
      }
    }
  };

  const handleEdit = (bus) => {
    setEditingBus(bus); // Rellena el formulario con los datos del autobús
  };

  const handleChange = (e) => {
    setEditingBus({ ...editingBus, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5231/api/buses/${editingBus.id}`, editingBus);
      alert('Autobús actualizado correctamente.');
      setEditingBus(null);
      // Recargar lista después de editar
      axios.get('http://localhost:5231/api/buses')
        .then(response => setBuses(response.data))
        .catch(error => console.error('Error al obtener autobuses:', error));
    } catch (error) {
      alert('Error al actualizar autobús');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Lista de Autobuses</h2>

      {/* Formulario de edición */}
      {editingBus && (
        <div>
          <h3>Editar Autobús</h3>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              name="busNumber"
              placeholder="Número"
              value={editingBus.busNumber}
              onChange={handleChange}
              required
              className="form-control mb-3"
            />
            <input
              type="text"
              name="model"
              placeholder="Modelo"
              value={editingBus.model}
              onChange={handleChange}
              required
              className="form-control mb-3"
            />
            <input
              type="number"
              name="capacity"
              placeholder="Capacidad"
              value={editingBus.capacity}
              onChange={handleChange}
              required
              className="form-control mb-3"
            />
            <input
              type="number"
              name="year"
              placeholder="Año"
              value={editingBus.year}
              onChange={handleChange}
              required
              className="form-control mb-3"
            />
            <input
              type="text"
              name="status"
              placeholder="Estado"
              value={editingBus.status}
              onChange={handleChange}
              required
              className="form-control mb-3"
            />
            <button type="submit" className="btn btn-success w-100">Actualizar</button>
            <button type="button" className="btn btn-secondary w-100 mt-2" onClick={() => setEditingBus(null)}>Cancelar</button>
          </form>
        </div>
      )}

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Número</th>
            <th>Modelo</th>
            <th>Capacidad</th>
            <th>Año</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => (
            <tr key={bus.id}>
              <td>{bus.id}</td>
              <td>{bus.busNumber}</td>
              <td>{bus.model}</td>
              <td>{bus.capacity}</td>
              <td>{bus.year}</td>
              <td>{bus.status}</td>
              <td>
                <button
                  onClick={() => handleEdit(bus)}
                  className="btn btn-warning btn-sm mx-1"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(bus.id)}
                  className="btn btn-danger btn-sm mx-1"
                >
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

export default BusList;