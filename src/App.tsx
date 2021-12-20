import React from 'react';
import './App.css';
import HomePage from 'component/Pages/HomePage';
import 'style/style.scss';
import { Route, Switch } from 'react-router-dom';
import BoardPage from 'component/Pages/BoardPage';
import PhotoPage from 'component/Pages/PhotoPage';
import GuestBookPage from 'component/Pages/GuestBookPage';
import SettingPage from 'component/Pages/SettingPage';
import LoginPage from 'component/Pages/LoginPage';
import SignUpPage from 'component/Pages/SignUpPage';
import PhotoRegistration from 'component/Photo/PhotoRegistration';

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/board" component={BoardPage} />
      <Route path="/photo" exact={true} component={PhotoPage} />
      <Route path="/photo/add" component={PhotoRegistration} />
      <Route path="/guestbook" component={GuestBookPage} />
      <Route path="/setting" component={SettingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
    </Switch>
  );
}

export default App;
