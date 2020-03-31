import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext.js';
import {
  CHANGE_PAGE_STATE_HOME,
} from "../../actions/index";
import "./Home.css";

import ProfileCard from '../ProfileCard/ProfileCard';
import Mybutton from '../Button/MyButton';

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
          <div className="content-skill-list" style={{ animationName: skillContentAnim }}>
            <div className="skill-lang">
              <h2>Language</h2>
              <div className="skill-lang-content">
                <h2>C#</h2>
                <h2>Python</h2>
                <h2>JavaScript</h2>
                <h2>HTML</h2>
                <h2>CSS</h2>
              </div>
            </div>

            <div className="skill-framework">
              <h2 className="skill-framework-title">Framework & Tool</h2>
              <div className="skill-framework-content">
                <h2>Unity</h2>
                <h2>Django</h2>
                <h2>React</h2>
                <h2>Premiere Pro</h2>
                <h2>After Effects</h2>
              </div>
            </div>
          </div>
          <Mybutton />
        </div>
      </div>
    </div>
  )

};


export default Home;


// <ProfileCard />

