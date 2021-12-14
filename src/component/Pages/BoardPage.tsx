import React from 'react';
import Footer from 'component/Footer/Footer';
import Header from 'component/Header/Header';
import 'style/homepage.scss'
import BoardContent from 'component/Board/BoardContent';

const BoardPage = () => {
  return (
    <>
      <Header />
      <BoardContent />
      <Footer />
    </>
  );
}

export default BoardPage;