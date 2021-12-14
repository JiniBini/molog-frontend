import React from 'react';
import Footer from 'component/Footer/Footer';
import Header from 'component/Header/Header';
import 'style/guestbookpage.scss'
import GuestBookContent from 'component/GuestBook/GuestBookContent';

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