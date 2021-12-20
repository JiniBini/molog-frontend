import React, { useState } from 'react';
import Footer from 'component/Footer/Footer';
import Header from 'component/Header/Header';
import 'style/photopage.scss';
import PhotoContent from 'component/Photo/PhotoContent';
import content_image from 'style/images/content_image.jpeg';

const PhotoPage = () => {
  const [photo, setPhoto] = useState([
    {
      image: content_image,
      title: 'example1',
      date: '2021.12.15',
    },
    {
      image: content_image,
      title: 'example2',
      date: '2021.12.15',
    },
    {
      image: content_image,
      title: 'example3',
      date: '2021.12.15',
    },
    {
      image: content_image,
      title: 'example4',
      date: '2021.12.15',
    },
  ]);

  return (
    <>
      <Header />
      <div className="photo-container">
        <h2>Photo Book</h2>
        <a className="add-btn" href="photo/add">add photo</a>
        <div className="content">
          {photo.map((item) => (
            <PhotoContent {...item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhotoPage;