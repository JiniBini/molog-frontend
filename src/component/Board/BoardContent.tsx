import React from 'react';
import 'style/boardpage.scss';
import photo from 'style/images/content_thumbnail.png';

const BoardContent = () => {
  return (
    <div className="board-container">
      <h2>Board</h2>
      <h3>최신 글</h3>
      <div className="board-recent">
        <div className="recent-item">
          <img className="recent-thumbnail" src={photo} alt="content" />
          <a className="recent-title" href="/photo/details">최신글 1 title</a>
          <p className="recent-content">내용 블라블라</p>
        </div>
        <div className="recent-item">
          <img className="recent-thumbnail" src={photo} alt="content" />
          <a className="recent-title" href="/photo/details">최신글 1 title</a>
          <p className="recent-content">내용 블라블라</p>
        </div>
      </div>
      <div className="board-content">
        <div className="content-item">
          <div className="content-title">
            글 제목
          </div>
          <div className="content-writer">
            작성자
          </div>
          <div className="content-article">
            내용 미리보기
          </div>
          <div className="content-date">
            2021.12.14
          </div>
        </div>
        <div className="content-item">
          <div className="content-title">
            글 제목
          </div>
          <div className="content-writer">
            작성자
          </div>
          <div className="content-article">
            내용 미리보기
          </div>
          <div className="content-date">
            2021.12.14
          </div>
        </div>
        <div className="content-item">
          <div className="content-title">
            글 제목
          </div>
          <div className="content-writer">
            작성자
          </div>
          <div className="content-article">
            내용 미리보기
          </div>
          <div className="content-date">
            2021.12.14
          </div>
        </div>
      </div>
      <p>this is board</p>

    </div>
  );
}

export default BoardContent;