import React from 'react';
import './GymVideos.css';

const GymVideos = () => {
  const videos = [
    { id: 1, title: 'סיור בחדר כושר', url: '/video1.mp4'},
    { id: 2, title: 'שגרת אימון', url: '/video2.mp4' },
    { id: 3, title: 'סשן פילטיס מכשירים', url: '/video1.mp4' },
  ];

  return (
    <div className="gym-video-section" id='about-us'>
      {/* <h2 className="gym-video-title">העשייה שלנו</h2> */}
      <div className="gym-video-container">
        {videos.map((video) => (
          <div key={video.id} className="gym-video-item">
            <video controls poster={video.url}>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="gym-video-description">{video.title}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
    
  );
};

export default GymVideos;
