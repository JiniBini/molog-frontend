import React from 'react';
import Header from 'component/Header/Header';
import Footer from 'component/Footer/Footer';
import 'style/signuppage.scss';

const SignUpPage = () => {
  return (
    <>
      <Header />
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className="l-flex">
          <p>FULL NAME</p>
          <input className="login-input" type="text" placeholder="name" />
        </div>
        <div className="l-flex">
          <p>ID</p>
          <input className="login-input" type="text" placeholder="id" />
        </div>
        <div className="l-flex">
          <p>PASSWORD</p>
          <input className="login-input" type="text" placeholder="password" />
        </div>
        <div className="l-flex">
          <p>PASSWORD CHECK</p>
          <input className="login-input" type="text" placeholder="password check" />
        </div>
        <div className="submit">
          <button type="submit">sign up</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpPage;