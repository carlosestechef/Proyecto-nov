/* CONTACT-FORM */
'use client';

const ContactFormModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no se muestra nada

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={closeButtonStyle}>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>&times;</span>
        </button>
        {children}
        <form style={formStyle}>
          <div style={inputContainerStyle}>
            <label htmlFor="name" style={labelStyle}>Apellido y Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={inputStyle}
            />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="email" style={labelStyle}>Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={inputStyle}
            />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="message" style={labelStyle}>Mensaje:</label>
            <textarea
              id="message"
              name="message"
              required
              style={textareaStyle}
            />
          </div>
          <button type="submit" style={submitButtonStyle}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

// Estilos mejorados para el modal
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.9)', // Fondo más oscuro
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  opacity: 1,
  animation: 'fadeIn 0.3s forwards', // Animación de entrada suave
};

const modalStyle = {
  background: '#fff',
  padding: '30px',
  borderRadius: '12px',
  maxWidth: '600px',
  minWidth: '320px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  animation: 'slideUp 0.3s ease-out', // Animación para el modal
  overflow: 'hidden',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '15px',
  right: '15px',
  background: 'none',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  color: '#333',
  padding: '5px 10px',
  borderRadius: '50%',
  transition: 'background-color 0.2s ease',
};

const formStyle = {
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
};

const inputContainerStyle = {
  marginBottom: '15px',
};

const labelStyle = {
  fontSize: '14px',
  fontWeight: '600',
  marginBottom: '5px',
  color: '#555',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  fontSize: '16px',
  border: '2px solid #ddd',
  borderRadius: '8px',
  outline: 'none',
  transition: 'border-color 0.3s ease',
};

const textareaStyle = {
  width: '100%',
  padding: '12px',
  fontSize: '16px',
  border: '2px solid #ddd',
  borderRadius: '8px',
  outline: 'none',
  resize: 'vertical',
  transition: 'border-color 0.3s ease',
};

const submitButtonStyle = {
  backgroundColor: '#4CAF50',
  color: '#fff',
  padding: '12px 20px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  marginTop: '20px',
};

export default ContactFormModal;