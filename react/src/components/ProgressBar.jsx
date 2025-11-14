import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ percent }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percent}%` }} />
      <span className="progress-label">전체 인증현황: {percent}%</span>
    </div>
  );
};

export default ProgressBar;
