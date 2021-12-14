import React from 'react';
import Footer from 'component/Footer/Footer';
import Header from 'component/Header/Header';
import MainContent from 'component/MainContent';
import 'style/homepage.scss'

const HomePage = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default HomePage;