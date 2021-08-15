import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <div className="profile-card-img"></div>
            <div className="profile-card-logos">
              <a href="https://github.com/Hobiron03" className="git">
                <FontAwesomeIcon
                  icon={["fab", "github-square"]}
                  size={"3x"}
                  className="logos"
                />
              </a>
              <a
                href="https://www.facebook.com/kawakami5150/"
                className="facebook"
              >
                <FontAwesomeIcon
                  icon={["fab", "facebook-square"]}
                  size={"3x"}
                  className="logos"
                />
              </a>
              <a href="#" className="twitter">
                <FontAwesomeIcon
                  icon={["fab", "twitter-square"]}
                  size={"3x"}
                  className="logos"
                />
              </a>
              <a href="#" className="youtube">
                <FontAwesomeIcon
                  icon={["fab", "youtube"]}
                  size={"3x"}
                  className="logos"
                />
              </a>
            </div>
          </div>

          <div className="profile-card-right">
            <h3 className="profile-card-right-name">
              かみかみ（Kamikami）
              <div className="info">
                <p>年齢：24</p>
                <p>趣味：ゲーム、音楽</p>
                <p>経歴：立命館大学院 → Yahoo! エンジニア（予定）</p>
              </div>
            </h3>
            <p className="profile-card-right-content">
              かみかみです。現在は関西の情報系の大学に通う大学院2年生で、普段は趣味でゲーム・Web開発をしており、フロントエンド領域に特に興味があります。
              趣味の音楽ではJazzやNeo
              Soulに関心があり、日々ギターの練習を行っています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
