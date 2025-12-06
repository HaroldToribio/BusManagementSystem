import React, { useState } from 'react';
import BusList from './Components/BusList';
import AddBusForm from './Components/AddBusForm';
import ReservationList from './Components/ReservationList';

function App() {
  const [reload, setReload] = useState(false);

  const handleBusAdded = () => {
    setReload(!reload);
  };

  return (
    <div className="App">
      <h1 className="text-center my-4">Gestión de Autobuses</h1>

      {/* 🚍 Buses */}
      <div className="container">
        <AddBusForm onBusAdded={handleBusAdded} />
        <BusList reload={reload} />
      </div>

      <hr />

      {/* 📅 Reservas */}
      <div className="container">
        <ReservationList />
      </div>
    </div>
  );
}

export default App;