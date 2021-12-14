import React from 'react';
import Footer from 'component/Footer/Footer';
import Header from 'component/Header/Header';
import 'style/loginpage.scss';

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="login-container">
        <h1>Login</h1>
        <div className="l-input">
          <p>ID</p>
          <input className="login-input" type="text" placeholder="id" />
        </div>
        <div className="l-input">
          <p>PASSWORD</p>
          <input className="login-input" type="text" placeholder="password" />
        </div>
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