import React from 'react';
import './styles.css';

export default function Main({ data }) {
  if (!data) {
    return <div>Loading...</div>; // Show a loading message or spinner if no data
  }

  return (
    <div className="imgContainer">
      {data.media_type === 'image' ? (
        // Render an image if the media type is 'image'
        <img src={data.hdurl} alt={data.title || 'NASA APOD'} className="bgImage" />
      ) : (
        // Render an embedded YouTube video if the media type is 'video'
        <iframe
          src={data.url}
          title={data.title || 'NASA Video'}
          allowFullScreen
          style={{ width: '100%', height: '420px' }} // Fixed height
        ></iframe>
      )}
    </div>
  );
}
