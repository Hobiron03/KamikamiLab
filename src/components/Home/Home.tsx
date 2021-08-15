import React, { useEffect, useContext, useState } from "react";
import AppContext from "../../contexts/AppContext.js";
import { CHANGE_PAGE_STATE_HOME } from "../../actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";

import ProfileCard from "../ProfileCard/ProfileCard";
import Mybutton from "../Button/MyButton";
import WordCollectionImg from "../../images/wordcollection.png";

const Home = () => {
  const { dispatch } = useContext(AppContext);
  const [pageState, setPageState] = useState([true, false, false]);

  useEffect(() => {
    setPageState([true, false, false]);
  }, []);

  useEffect(() => {
    dispatch({
      type: CHANGE_PAGE_STATE_HOME,
    });
    // eslint-disable-next-line
  }, [pageState]);

  const [skillContentAnim, setSkillContentAnim] = useState("");
  window.addEventListener("scroll", () => {
    setSkillContentAnim("fadein");
  });

  return (
    <div className="home">
      <div className="top" style={{ backgroundImage: "TopImage" }}>
        <h1>Welcome to KamikamiLab!</h1>
      </div>
      <ProfileCard />
      <div className="margin"></div>

      <div className="content">
        <div className="content-skill">
          <h3>Skill</h3>
          <div
            className="content-skill-list"
            style={{ animationName: skillContentAnim }}
          >
            <div className="skill-lang">
              <h2>Language</h2>
              <div className="skill-lang-content">
                <h2>C#</h2>
                <h2>Go</h2>
                <h2>Python</h2>
                <h2>TypeScript</h2>
                <h2>HTML</h2>
                <h2>SCSS</h2>
              </div>
            </div>

            <div className="skill-framework">
              <h2 className="skill-framework-title">Framework & Tool</h2>
              <div className="skill-framework-content">
                <h2>Unity</h2>
                <h2>Django</h2>
                <h2>React</h2>
                <h2>Next</h2>
                <h2>Logic Pro</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="recent-work">
        <h3>Recent work</h3>
        <h2>ことばあつめ</h2>
        <div className="recent-work-content">
          <div
            className="recent-work-content-left"
            style={{ backgroundImage: `url(${WordCollectionImg})` }}
          ></div>
          <div className="recent-work-content-right">
            <p>みなさん！！</p>
          </div>
        </div>
        <Mybutton />
      </div> */}

      {/* <div className="contact">
        <h3>Contact</h3>
        <div className="contact-content">
          <h2>SNS</h2>
          <div className="contact-icon">
            <FontAwesomeIcon
              icon={["fab", "facebook-square"]}
              size={"4x"}
              className="logos"
              color="#3b5998"
            />
            <FontAwesomeIcon
              icon={["fab", "twitter-square"]}
              size={"4x"}
              className="logos"
              color="#00acee"
            />
          </div>
          <h2>E-mail</h2>
          <h2 className="email">KamikamiLabwakuwaku[at]gmail.com</h2>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
