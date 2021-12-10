import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../../style/homepage.scss'
import PhotoContent from '../Photo/PhotoContent';

const PhotoPage = () => {
  return (
    <>
      <Header />
      <PhotoContent />
      <Footer />
    </>
  );
}

export default PhotoPage;