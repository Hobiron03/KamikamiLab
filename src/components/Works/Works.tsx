import React, { useEffect, useContext, useState, useCallback } from 'react';
import AppContext from '../../contexts/AppContext.js';
import {
  CHANGE_PAGE_STATE_WORKS,
} from "../../actions/index";
import "./Works.css";

const Works = () => {

  const { dispatch } = useContext(AppContext);

  const [pageState, setPageState] = useState([true, false, false]);
  const stableDispatch = useCallback(dispatch, [pageState]);

  useEffect(() => {
    setPageState([true, false, false]);
  }, []);

  useEffect(() => {
    stableDispatch({ type: CHANGE_PAGE_STATE_WORKS });
    console.log("Worksss")
    // eslint-disable-next-line
  }, [pageState]);

  // const changePageState = (): void => {
  //   dispatch({
  //     type: CHANGE_PAGE_STATE_WORKS,
  //   });
  // }

  return (
    <div className="Works">
      <h1>Here is Works</h1>
    </div>
  )
};

export default Works;
