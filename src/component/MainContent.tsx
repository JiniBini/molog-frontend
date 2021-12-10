import React from 'react';
import mainBackground from '../style/images/content_image.jpeg';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="l-content">
        <div className="content-user">
          <p>김은빈님</p>
          <p>followers 4</p>
          <p>following 4</p>
        </div>
        <img src={mainBackground} />
        <div className="content-visited">
          <p>전체 방문자</p>
          <p>10</p>
          <p>오늘</p>
          <p>어제</p>
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