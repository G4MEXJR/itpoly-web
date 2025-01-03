import React from 'react';

function Contact() {
  return (
    <div className="container my-5" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#F0FFF0', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1 className="display-4 text-center" style={{ color: '#2E7D32', marginBottom: '30px' }}>Contact Us</h1>
      <p className="lead" style={{ fontSize: '1.2rem', color: '#555555' }}>Email: <span style={{ color: '#2E7D32' }}>lannapoly@lannapoly.ac.th</span></p>
      <p className="lead" style={{ fontSize: '1.2rem', color: '#555555' }}>Phone: <span style={{ color: '#2E7D32' }}>053-213-061</span></p>
    </div>
  );
}

export default Contact;
