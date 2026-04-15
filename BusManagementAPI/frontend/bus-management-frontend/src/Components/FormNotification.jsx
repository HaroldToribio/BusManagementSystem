import React, { useEffect } from 'react';

const FormNotification = ({ message, type }) => {
  // Create a ref for safe text rendering (prevents XSS)
  const messageRef = React.useRef(null);

  // Hook must be called unconditionally at top level
  useEffect(() => {
    if (messageRef.current && message) {
      // Use textContent instead of innerHTML to prevent XSS attacks
      // This ensures any HTML tags are rendered as plain text
      messageRef.current.textContent = message;
    }
  }, [message]);

  // Return early AFTER all hooks
  if (!message) return null;

  return (
    <div 
      className={`form-notification ${type || 'info'}`}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <span ref={messageRef} />
    </div>
  );
};

export default FormNotification;
