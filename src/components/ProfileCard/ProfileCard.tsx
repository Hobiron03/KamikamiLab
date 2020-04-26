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
            <h3 className="profile-card-right-name">
              かみかみ（Kamikami）
               <div className="info">
                <p>年齢：23</p>
                <p>趣味：ゲーム、音楽</p>
              </div>
            </h3>
            <p className="profile-card-right-content">
              かみかみと申します。現在は関西の情報系の大学に通う大学院1年生です。趣味はゲームと音楽です。
              将来は空間にいる人全員を楽しませることができるエンターテインメントを作る仕事に関わりたいと思っています。
            </p>
          </div>
        </div>

      </div>
    </div>
  )
};

export default ProfileCard;
