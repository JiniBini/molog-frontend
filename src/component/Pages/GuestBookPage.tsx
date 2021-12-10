import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../../style/homepage.scss'
import GuestBookContent from '../GuestBook/GuestBookContent';

const GuestBookPage = () => {
  return (
    <>
      <Header />
      <GuestBookContent />
      <Footer />
    </>
  );
}

export default GuestBookPage;