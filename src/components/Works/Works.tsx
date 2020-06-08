import React, { useEffect, useContext, useState, useCallback } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
// } from "react-router-dom";
import Product from "../Product/Product";
import Music from "../Music/Music";
import Youtube from "../Youtube/Youtube";
import AppContext from '../../contexts/AppContext.js';
import {
  CHANGE_PAGE_STATE_WORKS,
} from "../../actions/index";
import "./Works.css";


const Works = () => {
  const { dispatch } = useContext(AppContext);
  const [pageState, setPageState] = useState([true, false, false]);
  const stableDispatch = useCallback(dispatch, [pageState]);

  const [toggleState, setToggleState] = useState("product");

  useEffect(() => {
    setPageState([true, false, false]);
  }, []);

  useEffect(() => {
    stableDispatch({ type: CHANGE_PAGE_STATE_WORKS });
    // eslint-disable-next-line
  }, [pageState]);

  const changeToggleState = (toggle: string): void => {
    setToggleState(toggle);
  };

  const toggleButtonClassName = (buttonName: string): string => {

    let selectedButtonClass: string = "";
    if (toggleState === buttonName) {
      selectedButtonClass = "toggle-button-selected";
    }
    return ['toggle-button-content', selectedButtonClass].join(" ");
  };

  const showTable = (): JSX.Element => {
    if (toggleState === "product") {
      return <Product />
    }
    else if (toggleState === "music") {
      return <Music />
    }
    else {
      return <Youtube />
    }
  };


  return (
    <div className="Works">
      <h1 className="title">Works</h1>
      <div className="toggle-buttons">
        <div className={toggleButtonClassName("product")}
          onClick={e => changeToggleState("product")}
        >
          <p>Product</p>
        </div>

        <div className={toggleButtonClassName("music")}
          onClick={e => changeToggleState("music")}>
          <p>Music</p>
        </div>

        <div className={toggleButtonClassName("youtube")}
          onClick={e => changeToggleState("youtube")}>
          <p>Youtube</p>
        </div>
      </div>

      <div>
        {showTable()}
      </div>

    </div >
  )
};

export default Works;
