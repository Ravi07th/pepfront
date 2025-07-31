import React from 'react';
import { useNavigate } from 'react-router-dom';

function Practice() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/tcsExam');
    navigate('/studentNotes')
  };

  return (
    <div>
      <div
        onClick={handleCardClick}
        style={{
          border: '1px solid #ccc',
          borderRadius: 8,
          padding: 24,
          width: 220,
          cursor: 'pointer',
          textAlign: 'center',
          boxShadow: '0 4px 12px #0001'
        }}
        tabIndex={0} // Accessibility
        role="button"
        onKeyDown={e => {

          if (e.key === "Enter" || e.key === " ") handleCardClick();
        }}
      >
        <img src="your-tcs-exam-logo.png" alt="TCS Exam" style={{ width: 60, marginBottom: 12 }} />
        <h2>TCS NQT Mock Test</h2>
        <p>Take the full TCS NQT mock exam</p>
      </div>
      <div
        onClick={handleCardClick}
        style={{
          border: '1px solid #ccc',
          borderRadius: 8,
          padding: 24,
          width: 220,
          cursor: 'pointer',
          textAlign: 'center',
          boxShadow: '0 4px 12px #0001'
        }}
        tabIndex={0} // Accessibility
        role="button"
        onKeyDown={e => {

          if (e.key === "Enter" || e.key === " ") handleCardClick();
        }}
      >
        <img src="your-tcs-exam-logo.png" alt="TCS Exam" style={{ width: 60, marginBottom: 12 }} />
        <h2>TCS NQT Mock Test</h2>
        <p>Take the full TCS NQT mock exam</p>
      </div>
    </div>
  );
}

export default Practice;
