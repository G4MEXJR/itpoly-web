import React from 'react';

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#27ae60', // เปลี่ยนสีให้ดูหรูหรา
  color: '#ecf0f1', // สีข้อความอ่อน
  padding: '20px 40px',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // ฟอนต์ที่ดูหรูหรา
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // เพิ่มเงาด้านล่างเพื่อความทันสมัย
};

const logoStyle = {
  width: '50px',
  marginRight: '20px',
};

const textStyle = {
  fontSize: '1.6rem',
  fontWeight: 'bold',
  letterSpacing: '1px', // เพิ่มระยะห่างตัวอักษร
};

const contactStyle = {
  fontSize: '1rem',
  fontWeight: '300', // ฟอนต์บางๆ ทำให้ดูเบา
  marginTop: '5px',
};

function Header() {
  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/path-to-logo.png"
          alt="Logo"
          style={logoStyle}
        />
        <span style={textStyle}>
          วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่
        </span>
      </div>
      <div style={contactStyle}>
        <p>📞 053-213-061 | 📧 lannapoly@lannapoly.ac.th</p>
      </div>
    </header>
  );
}

export default Header;
