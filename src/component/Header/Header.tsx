import React from 'react';

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <a className="login-btn" href="/">LOGIN</a>
      </div>
      <div className="header-content">
        <li>
          <ul><a className="list-item" href="/board">board</a></ul>
          <ul><a className="list-item" href="/board">photo</a></ul>
        </li>
        <h1 className="header-title">mσlσg</h1>
        <li>
          <ul><a className="list-item" href="/board">guestbook</a></ul>
          <ul><a className="list-item" href="/board">setting</a></ul>
        </li>
      </div>
    </div>
  );
};

export default Header;