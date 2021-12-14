import React from 'react';
import photo from '../../style/images/content_image.jpeg';

const PhotoContent = () => {
  return (
    <div className="photo-container">
      <h2>Photo Book</h2>
      <div className="content">
        <div className="content-item">
          <img className="content-img" src={photo} alt="content" />
          <a className="content-title" href="/photo/details">example title</a>
          <p className="content-date">2021.12.14</p>
        </div>
        <div className="content-item">
          <img className="content-img" src={photo} alt="content" />
          <a className="content-title" href="/photo/details">example title</a>
          <p className="content-date">2021.12.14</p>
        </div>
        <div className="content-item">
          <img className="content-img" src={photo} alt="content" />
          <a className="content-title" href="/photo/details">example title</a>
          <p className="content-date">2021.12.14</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoContent;