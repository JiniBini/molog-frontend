import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../../style/homepage.scss'
import SettingContent from '../Setting/SettingContent';

const SettingPage = () => {
  return (
    <>
      <Header />
      <SettingContent />
      <Footer />
    </>
  );
}

export default SettingPage;