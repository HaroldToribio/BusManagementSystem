import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { LanguageContext, translations } from '../context/LanguageContext';

const RoutesList = ({ reload }) => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].routesList;
  const [routes, setRoutes] = useState([]);
  const [editingRoute, setEditingRoute] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5231/api/routes')
      .then(response => setRoutes(response.data))
      .catch(error => console.error('Error fetching routes:', error));
  }, [reload]);

  const handleDelete = async (id) => {
    if (window.confirm(t.deleteConfirmation || 'Are you sure you want to delete this route?')) {
      try {
        await axios.delete(`http://localhost:5231/api/routes/${id}`);
        setRoutes(routes.filter(route => route.id !== id));
      } catch (error) {
        console.error('Error deleting route:', error);
        alert(t.deleteError || 'Error deleting route.');
      }
    }
  };

  const handleEdit = (route) => {
    setEditingRoute(route);
  };

  const handleChange = (e) => {
    setEditingRoute({ ...editingRoute, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5231/api/routes/${editingRoute.id}`, editingRoute);
      alert(t.updatedSuccess || 'Route updated successfully');
      setEditingRoute(null);
      // Reload list
      axios.get('http://localhost:5231/api/routes')
        .then(response => setRoutes(response.data))
        .catch(error => console.error('Error fetching routes:', error));
    } catch (error) {
      alert(t.updateError || 'Error updating route');
      console.error(error);
    }
  };

  return (
    <div className="list-container">
      <h2>{t.title}</h2>

      {/* Edit Form */}
      {editingRoute && (
        <div className="edit-form-card">
          <h3>{t.editTitle}</h3>
          <form onSubmit={handleUpdate} className="route-form">
            <div className="form-group">
              <label>{t.origin}</label>
              <input
                type="text"
                name="origin"
                placeholder={t.origin}
                value={editingRoute.origin}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>{t.destination}</label>
              <input
                type="text"
                name="destination"
                placeholder={t.destination}
                value={editingRoute.destination}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">{t.update}</button>
              <button type="button" className="cancel-btn" onClick={() => setEditingRoute(null)}>{t.cancel}</button>
            </div>
          </form>
        </div>
      )}

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>{t.table.id}</th>
              <th>{t.table.origin}</th>
              <th>{t.table.destination}</th>
              <th>{t.table.actions}</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route) => (
              <tr key={route.id} className="table-row">
                <td>{route.id}</td>
                <td>{route.origin}</td>
                <td>{route.destination}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      onClick={() => handleEdit(route)}
                      className="action-btn edit-btn"
                      title={t.edit}
                    >
                      <FaEdit /> {t.edit}
                    </button>
                    <button
                      onClick={() => handleDelete(route.id)}
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

export default RoutesList;