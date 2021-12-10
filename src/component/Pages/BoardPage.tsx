import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../../style/homepage.scss'
import BoardContent from '../Board/BoardContent';

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