import React from 'react';
import mainBackground from '../style/images/content_image.jpeg';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="l-content">
        <div className="content-user">
          <div className="l-r">
            <p className="user-name">김은빈님</p>
            <button>logout</button>
          </div>
          <p className="user-email">kiobn1201@naver.com</p>
          <div className="l-flex">
            <p>followers</p>
            <p>10</p>
          </div>
          <div className="l-flex">
            <p>following</p>
            <p>4</p>
          </div>
        </div>
        <img src={mainBackground} />
        <div className="content-visited">
          <h4>전체 방문자</h4>
          <p className="visited">10</p>
          <p className="visited-num">Today : 2</p>
          <p className="visited-num">Yesterday : 3</p>
        </div>
      </div>
      <div className="l-content">
        <div className="content-top">
          <p>인기글</p>
        </div>
        <div className="content-recent">
          <p>최신글</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;