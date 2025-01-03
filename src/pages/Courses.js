import React from 'react';

function Courses() {
  return (
    <div
      className="container my-5"
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#F0FFF0',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1
        className="display-4 text-center"
        style={{ color: '#2E7D32', marginBottom: '30px' }}
      >
        Our Courses
      </h1>
      <ul className="list-group">
        <li
          className="list-group-item"
          style={{
            backgroundColor: '#E8F5E9',
            border: 'none',
            fontSize: '1.2rem',
          }}
        >
          Vocational Certificate (ปวช.)
        </li>
        <li
          className="list-group-item"
          style={{
            backgroundColor: '#E8F5E9',
            border: 'none',
            fontSize: '1.2rem',
          }}
        >
          High Vocational Certificate (ปวส.)
        </li>
        <li
          className="list-group-item"
          style={{
            backgroundColor: '#E8F5E9',
            border: 'none',
            fontSize: '1.2rem',
          }}
        >
          Short-term Trainings
        </li>
      </ul>
      <div className="mt-4" style={{ textAlign: 'center' }}>
        <iframe
          src="https://drive.google.com/file/d/1KlESxHfQdaNQ5trzY9rSJhpiDCU5GDe8/preview"
          title="Course Details"
          width="100%"
          height="600px"
          style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        ></iframe>
                <iframe
          src="https://drive.google.com/file/d/1vx5diaTenzBsZuYRDX19YjesoCB6XA3m/preview"
          title="Course Details"
          width="100%"
          height="600px"
          style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        ></iframe>
                <iframe
          src="https://drive.google.com/file/d/14qknn42lagFi_WuJoiOl_ibPwu7bUvte/preview"
          title="Course Details"
          width="100%"
          height="600px"
          style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        ></iframe>
                <iframe
          src="https://drive.google.com/file/d/1tnEVbTXtZNwtHmFuWMd7Xm5hFlMDI0Be/preview"
          title="Course Details"
          width="100%"
          height="600px"
          style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default Courses;
