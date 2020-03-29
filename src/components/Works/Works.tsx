import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext.js';
import {
  CHANGE_PAGE_STATE_WORKS,
} from "../../actions/index";
import "./Works.css";

const Works = () => {

  const { state, dispatch } = useContext(AppContext);

  const [pageState, setPageState] = useState([true, false, false]);
  useEffect(() => {
    setPageState([true, false, false]);
  }, []);

  useEffect(() => {
    dispatch({
      type: CHANGE_PAGE_STATE_WORKS,
    });
  }, [pageState]);

  return (
    <div className="Works">
      <h1>Here is Works</h1>
    </div>
  )
};

export default Works;
