import React from 'react';
import Footer from 'component/Footer/Footer';
import Header from 'component/Header/Header';
import 'style/photopage.scss'
import PhotoContent from 'component/Photo/PhotoContent';

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