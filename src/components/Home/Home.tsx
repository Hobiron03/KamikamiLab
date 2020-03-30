import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext.js';
import {
  CHANGE_PAGE_STATE_HOME,
} from "../../actions/index";
import {
  Link
} from "react-router-dom"
import "./Home.css";

import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Mybutton from '../../components/Button/MyButton';

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

      <ProfileCard />

      <div className="content">

        <div className="content-skill">
          <h3>Skill</h3>
        </div>
        <Mybutton />
      </div>

    </div>
  )
};

export default Home;
