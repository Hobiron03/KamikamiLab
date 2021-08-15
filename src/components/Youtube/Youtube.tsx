import React from "react";
import "./Youtube.css";

const Youtube = () => {
  return (
    <div className="youtube">
      <div className="music">
        <h2>演奏してみた</h2>
        <div className="music-movies">
          <iframe
            title="Love Destiny"
            width="350"
            height="200"
            src="https://www.youtube.com/embed/q8It3lR84Aw"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            title="over"
            width="350"
            height="200"
            src="https://www.youtube.com/embed/BXuCxF4oTqs"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            title="#1090"
            width="350"
            height="200"
            src="https://www.youtube.com/embed/ifYERovgD30"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            title="bomb"
            width="350"
            height="200"
            src="https://www.youtube.com/embed/-Gl4a0wADPQ"
            frameBorder="10"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            title="umaru"
            width="350"
            height="200"
            src="https://ext.nicovideo.jp/thumb/sm32273063"
          >
            <a href="https://www.nicovideo.jp/watch/sm32273063">
              干物妹！ うまるちゃんR ED 【うまるん体操】ギターで弾いてみた
            </a>
          </iframe>
          <iframe
            title="adrenaline"
            width="350"
            height="200"
            src="https://ext.nicovideo.jp/thumb/sm31861737"
            scrolling="no"
          >
            <a href="https://www.nicovideo.jp/watch/sm31861737">
              エロマンガ先生ED 【adrenaline!!!】 ギターで弾いてみた
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
