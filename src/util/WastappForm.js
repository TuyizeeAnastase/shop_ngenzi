import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

const WhatsAppFloatingButton = () => {
  const phoneNumber = '+15025725480'; // Your phone number in international format
  const message = 'Hello, I would like to inquire about your services!';

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={waLink} target="_blank" rel="noopener noreferrer" style={styles.floatingButton}>
      <FaWhatsapp size={60} color="white" /> {/* Increased size to 60 */}
    </a>
  );
};

const styles = {
  floatingButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366', // WhatsApp green
    borderRadius: '50%',
    width: '100px', // Increase the button size to match the larger icon
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    zIndex: '1000',
  },
};

export default WhatsAppFloatingButton;
