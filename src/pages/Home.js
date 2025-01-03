import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div style={{ backgroundColor: '#F0FFF0', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: '#E8F5E9',
          padding: '15px 0',
          borderBottom: '2px solid #C8E6C9',
        }}
      >
        <div className="container"></div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/p/AF1QipM6N7JKQkbgwt40cSHVaZeB_cyxflodi8TRkNnY=s680-w680-h510")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#FFFFFF',
            padding: '40px',
            borderRadius: '10px',
            display: 'inline-block',
          }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
            วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
            Lanna Polytechnic College of Technology
          </p>
          <button
            className="btn btn-success"
            style={{
              backgroundColor: '#2E7D32',
              border: 'none',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            สมัครเรียน
          </button>
        </div>
      </section>

      {/* Content Section */}
      <div className="container my-5">
        <h3
          style={{
            color: '#2E7D32',
            fontWeight: 'bold',
            marginBottom: '30px',
            textAlign: 'center',
          }}
        >
          ข่าวสารและกิจกรรม
        </h3>
        <div className="row">
          {[...Array(3)].map((_, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card"
                style={{
                  border: 'none',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                }}
              >
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipM6N7JKQkbgwt40cSHVaZeB_cyxflodi8TRkNnY=s680-w680-h510"
                  alt="Activity"
                  className="card-img-top"
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px 10px 0 0',
                  }}
                />
                <div
                  className="card-body"
                  style={{
                    backgroundColor: '#E8F5E9',
                    padding: '20px',
                  }}
                >
                  <h5
                    className="card-title"
                    style={{
                      color: '#2E7D32',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                    }}
                  >
                    กิจกรรม {index + 1}
                  </h5>
                  <p
                    className="card-text"
                    style={{ color: '#555555', fontSize: '0.95rem' }}
                  >
                    รายละเอียดกิจกรรมที่ {index + 1}
                  </p>
                  <button
                    className="btn btn-outline-success btn-sm"
                    style={{
                      fontWeight: 'bold',
                      borderColor: '#2E7D32',
                      color: '#2E7D32',
                    }}
                  >
                    ดูเพิ่มเติม
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
