import React from 'react';

export type GuestBookCommentProps = {
  userName: string;
  date: string;
  content: string;
}

const GuestBookComment = (props: GuestBookCommentProps) => {
  return (
    <>
      <ul>
        <li>
          <img className="user-img" src="//t1.daumcdn.net/tistory_admin/static/skin/avatar_default.gif" alt="프로필사진" />
          <div className="comment">
            <a className="nickname" href="/">{props.userName}</a>
            <span className="date">
              {props.date}
            </span>
            <p className="content">{props.content}</p>
          </div>
        </li>
      </ul>
    </>
  );
}

export default GuestBookComment;