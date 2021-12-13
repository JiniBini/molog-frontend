import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../../style/loginpage.scss';

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="login-container">
        <h1>Login</h1>
        <input className="login-input" type="text" placeholder="id" />
        <input className="login-input" type="text" placeholder="password" />
        <div className="l-flex">
          <div>
            <input type="checkbox" id="c1" />
            <label htmlFor="c1">remember id</label>
          </div>
          <a href="/signup">sign up</a>
        </div>
        <div className="submit">
          <button type="submit">Login</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;