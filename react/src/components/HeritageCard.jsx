

import React from 'react';
import './HeritageCard.css';
import hanokImg from '/assets/house.jpg'; // public/assets/house.jpg 이미지 사용

const HeritageCard = ({ heritage, onCheckChange }) => {
  const {
    id,
    region,
    heritageName,
    visitStatus,
    visitDate,
    instagramUploaded,
    revisit,
    note
  } = heritage;

  return (
    <div className="heritage-card white-theme">
      <img src={hanokImg} alt="한옥" className="heritage-img" />
      <h3 className="heritage-title">{heritageName}</h3>
      <p className="heritage-region">{region}</p>
      <div className="options">
        <label>
          <input
            type="checkbox"
            checked={!!visitStatus}
            onChange={() => onCheckChange(id, 'visitStatus')}
          /> 방문 완료
        </label>
        <label>
          <input
            type="checkbox"
            checked={!!instagramUploaded}
            onChange={() => onCheckChange(id, 'instagramUploaded')}
          /> 인스타 업로드
        </label>
        <label>
          <input
            type="checkbox"
            checked={!!revisit}
            onChange={() => onCheckChange(id, 'revisit')}
          /> 재방문
        </label>
      </div>
      <div className="note">
        <label>
          메모: <input
            type="text"
            value={note || ''}
            onChange={e => onCheckChange(id, 'note', e.target.value)}
          />
        </label>
      </div>
      <div className="date">
        <label>
          방문일: <input
            type="date"
            value={visitDate || ''}
            onChange={e => onCheckChange(id, 'visitDate', e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default HeritageCard;
