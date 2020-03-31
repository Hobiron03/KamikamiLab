import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div>
      <div className="profile-card">
        <div className="profile-card-title">
          <h3>About</h3>
        </div>

        <div className="profile-card-content">
          <div className="profile-card-left">
            <div className="profile-card-img">
              img
            </div>
            <div className="profile-card-logos">
              <a href="https://google.com" className="git">
                <FontAwesomeIcon icon={["fab", "github-square"]} size={"3x"} className="logos" />
              </a>
              <a href="https://google.com" className="facebook">
                <FontAwesomeIcon icon={["fab", "facebook-square"]} size={"3x"} className="logos" />
              </a>
              <a href="https://google.com" className="twitter">
                <FontAwesomeIcon icon={["fab", "twitter-square"]} size={"3x"} className="logos" />
              </a>
              <a href="https://google.com" className="youtube">
                <FontAwesomeIcon icon={["fab", "youtube"]} size={"3x"} className="logos" />
              </a>
            </div>
          </div>

          <div className="profile-card-right">
            <h3 className="profile-card-right-name">川上 雄大（Yudai Kawakami）</h3>
            <p className="profile-card-right-content">
              立命館大学院情報理工学研究科に所属しております、川上雄大と申します。現在23歳です。趣味はゲームと音楽です。
              将来は空間にいる人全員を楽しませることができるエンターテインメントを作る仕事に関わりたいと思っています。
            </p>
          </div>
        </div>

      </div>
    </div>
  )
};

export default ProfileCard;
