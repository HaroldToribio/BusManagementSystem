import React from 'react';

const FormNotification = ({ message, type }) => {
  if (!message) return null;

  return (
    <div className={`form-notification ${type || 'info'}`}>
      {message}
    </div>
  );
};

export default FormNotification;
