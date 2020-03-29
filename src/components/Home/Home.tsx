import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext.js';
import {
  CHANGE_PAGE_STATE_HOME,
} from "../../actions/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Home.css";

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
  }, [pageState]);


  return (
    <div className="home">
      <div className="top" style={{ backgroundImage: "TopImage" }}>
        <h1>Welcome to KamikamiLab!</h1>
      </div>

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
              こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは
            </p>
          </div>
        </div>

      </div>

    </div>
  )
};

export default Home;
