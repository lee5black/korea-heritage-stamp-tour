import React, { useEffect, useState } from 'react';
import HeritageCard from '../components/HeritageCard';
import ProgressBar from '../components/ProgressBar';
import './Home.css';


import heritageJson from '../../../korea_heritage_stamp_tour_data.json';

const convertData = (data) =>
  data.map(h => ({
    id: h.id,
    region: h.region,
    heritageName: h.heritageName,
    visitStatus: !!h.visitStatus,
    visitDate: h.visitDate || '',
    instagramUploadㄴed: !!h.instagramUploaded,
    revisit: !!h.revisit,
    note: h.note || ''
  }));


const STORAGE_KEY = 'heritageStampTourData';

const getInitialData = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return convertData(heritageJson.filter(h => h.id && h.id !== '#'));
    }
  }
  return convertData(heritageJson.filter(h => h.id && h.id !== '#'));
};

const Home = () => {
  const [heritages, setHeritages] = useState(getInitialData());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(heritages));
  }, [heritages]);

  const handleCheckChange = (id, key, value) => {
    setHeritages(prev =>
      prev.map(h =>
        h.id === id
          ? { ...h, [key]: typeof value !== 'undefined' ? value : !h[key] }
          : h
      )
    );
  };

  const total = heritages.length;
  const visited = heritages.filter(h => h.visitStatus).length;
  const percent = total ? Math.round((visited / total) * 100) : 0;

  return (
    <div className="home-container">
      <h1 style={{textAlign:'center', fontWeight:'bold', fontSize:'2.1rem', margin:'32px 0 8px 0', letterSpacing:'-1px'}}>한국 문화유산 스탬프 투어 인증 페이지</h1>
      <ProgressBar percent={percent} />
      <div className="heritage-list">
        {heritages.map(h => (
          <HeritageCard key={h.id} heritage={h} onCheckChange={handleCheckChange} />
        ))}
      </div>
    </div>
  );
};

export default Home;
