import React, { useCallback, useEffect, useState } from 'react';
import Footer from 'component/Footer/Footer';
import Header from 'component/Header/Header';
import 'style/guestbookpage.scss';
import GuestBookComment from '../GuestBook/GuestBookComment';

const GuestBookPage = () => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([
    {
      userName: 'user01',
      date: '2021-12-15 09:30',
      content: 'hello',
    }
  ]);

  const registBtnOnClick = useCallback(() => {
    const comment = {
      userName: 'user01',
      date: '2021-12-15 09:30',
      content: content,
    }
    setComments(comments => comments.concat(comment));
    setContent("");
  }, [content]);

  const commentOnChange = useCallback((e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  return (
    <>
      <Header />
      <div className="guest-container">
        <h3>방명록</h3>
        <textarea id="txt-area" className="guest-input" placeholder="여러분의 소중한 댓글을 입력해주세요." value={content} onChange={(e) => {commentOnChange(e);}}/>
        <div className="submit">
          <button className="regist-btn" type="button" onClick={registBtnOnClick}>등록</button>
        </div>
        <div className="comments">
          {comments != null ? comments.map((item) => (
            <GuestBookComment {...item} />
          )) : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GuestBookPage;