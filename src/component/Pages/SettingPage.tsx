import React from 'react';
import Footer from 'component/Footer/Footer';
import Header from 'component/Header/Header';
import 'style/homepage.scss'
import SettingContent from 'component/Setting/SettingContent';

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