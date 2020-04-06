import React, { useEffect, useContext, useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import AppContext from '../../contexts/AppContext.js';
import {
  CHANGE_PAGE_STATE_WORKS,
} from "../../actions/index";
import "./Works.css";

const Works = () => {

  let match = useRouteMatch();

  console.log(match);

  const { dispatch } = useContext(AppContext);

  const [pageState, setPageState] = useState([true, false, false]);
  const stableDispatch = useCallback(dispatch, [pageState]);

  const [toggleState, setToggleState] = useState("product");

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

  const changeToggleState = (toggle: string): void => {
    setToggleState(toggle);
  }

  return (
    <div className="Works">
      <h1 className="title">Works</h1>
      <div className="toggle-button">
        <div className="toggle-button-product toggle-button-content"
          onClick={e => changeToggleState("product")}>
          <p>Product</p>
        </div>
        <div className="toggle-button-music toggle-button-content"
          onClick={e => changeToggleState("music")}>
          <p>Music</p>
        </div>
        <div className="toggle-button-youtube toggle-button-content"
          onClick={e => changeToggleState("youtube")}>
          <p>Youtube</p>
        </div>
      </div>
    </div >
  )
};

export default Works;
