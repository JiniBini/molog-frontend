import React, { useCallback, useState } from 'react';
import Header from 'component/Header/Header';
import Footer from 'component/Footer/Footer';
import 'style/photopage.scss';

const PhotoRegistration = () => {
  const [fileLink, setFileLink] = useState<String>("select file");

  const fileInputOnChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setFileLink(e.target.value);
  }, []);

  return (
    <div>
      <Header />
      <div className="photo-register-container">
        <h1>add Photo</h1>
        <div className="l-input">
          <p>TITLE</p>
          <input className="title-input" type="text" placeholder="title" />
        </div>
        <div className="l-input">
          <p>CONTENT</p>
          <textarea id="txt-area" className="content-input" placeholder="내용을 입력하세요."/>
        </div>
        <p>IMAGE UPLOAD</p>
        <label className="file-input-btn" htmlFor="file-input">{fileLink}</label>
        <input id="file-input" type="file" name="file" style={{display: "none"}} onChange={(e) => {fileInputOnChange(e);}}/>
        <div className="submit">
          <button type="submit">add</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default PhotoRegistration;