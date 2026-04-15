import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { LanguageContext, translations } from '../context/LanguageContext';

const BusList = ({ reload }) => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].busList;
  const [buses, setBuses] = useState([]);
  const [editingBus, setEditingBus] = useState(null); // Estado para el autobús en edición

  useEffect(() => {
    axios.get('http://localhost:5231/api/buses')
      .then(response => setBuses(response.data))
      .catch(error => console.error('Error al obtener autobuses:', error));
  }, [reload]);

  const handleDelete = async (id) => {
    if (window.confirm(t.deleteConfirmation || 'Are you sure you want to delete this bus?')) {
      try {
        await axios.delete(`http://localhost:5231/api/buses/${id}`);
        setBuses(buses.filter(bus => bus.id !== id));  // Actualiza la lista sin recargar
      } catch (error) {
        console.error('Error al eliminar autobús:', error);
        alert(t.deleteError || 'Could not delete the bus.');
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
      alert(t.updatedSuccess || 'Bus updated successfully');
      setEditingBus(null);
      // Recargar lista después de editar
      axios.get('http://localhost:5231/api/buses')
        .then(response => setBuses(response.data))
        .catch(error => console.error('Error al obtener autobuses:', error));
    } catch (error) {
      alert(t.updateError || 'Error updating bus');
      console.error(error);
    }
  };

  return (
    <div className="list-container">
      <h2>{t.title}</h2>

      {/* Edit Form */}
      {editingBus && (
        <div className="edit-form-card">
          <h3>{t.editTitle}</h3>
          <form onSubmit={handleUpdate} className="bus-form">
            <div className="form-group">
              <label>{t.table.number}</label>
              <input
                type="text"
                name="busNumber"
                placeholder={t.table.number}
                value={editingBus.busNumber}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>{t.table.model}</label>
              <input
                type="text"
                name="model"
                placeholder={t.table.model}
                value={editingBus.model}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>{t.table.capacity}</label>
              <input
                type="number"
                name="capacity"
                placeholder={t.table.capacity}
                value={editingBus.capacity}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>{t.table.year}</label>
              <input
                type="number"
                name="year"
                placeholder={t.table.year}
                value={editingBus.year}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>{t.table.status}</label>
              <input
                type="text"
                name="status"
                placeholder={t.table.status}
                value={editingBus.status}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">{t.update}</button>
              <button type="button" className="cancel-btn" onClick={() => setEditingBus(null)}>{t.cancel}</button>
            </div>
          </form>
        </div>
      )}

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>{t.table.id}</th>
              <th>{t.table.number}</th>
              <th>{t.table.model}</th>
              <th>{t.table.capacity}</th>
              <th>{t.table.year}</th>
              <th>{t.table.status}</th>
              <th>{t.table.actions}</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.id} className="table-row">
                <td>{bus.id}</td>
                <td>{bus.busNumber}</td>
                <td>{bus.model}</td>
                <td>{bus.capacity}</td>
                <td>{bus.year}</td>
                <td>{bus.status}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      onClick={() => handleEdit(bus)}
                      className="action-btn edit-btn"
                      title={t.edit}
                    >
                      <FaEdit /> {t.edit}
                    </button>
                    <button
                      onClick={() => handleDelete(bus.id)}
                      className="action-btn delete-btn"
                      title={t.delete}
                    >
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

export default BusList;