import React from 'react';

const GuestBookContent = () => {
  return (
    <div className="guest-container">
      <h3>방명록</h3>
      <textarea className="guest-input" placeholder="여러분의 소중한 댓글을 입력해주세요." />
      <div className="submit">
        <button className="regist-btn" type="submit">등록</button>
      </div>
    </div>
  );
};

export default GuestBookContent;