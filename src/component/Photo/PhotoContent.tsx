import React from 'react';

export type PhotoContentType = {
  image: string;
  title: string;
  date: string;
}
const PhotoContent = (props: PhotoContentType) => {
  return (
    <div className="content-item">
      <img className="content-img" src={props.image} alt="content" />
      <a className="content-title" href="/photo/details">{props.title}</a>
      <p className="content-date">{props.date}</p>
    </div>
  );
};

export default PhotoContent;