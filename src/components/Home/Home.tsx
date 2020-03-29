import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext.js';
import {
  CHANGE_PAGE_STATE_HOME,
} from "../../actions/index";
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
      <h1>Here is hohohohohohohoh</h1>
    </div>
  )
};

export default Home;
