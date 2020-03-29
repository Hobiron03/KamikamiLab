import React from 'react';
import "./Header.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "../Home/Home";
import Works from "../Works/Works";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNavigationButton from './HeaderNavigationButton/HeaderNavigationButton';

const Header = () => {
  return (
    <Router>
      <header>
        <div className="header-left">
          <HeaderLogo />
        </div>
        <div className="header-right">
          <Link exact to="/" style={{ textDecoration: 'none' }}>
            <HeaderNavigationButton
              contentText={"Home"}
              fontInfo={
                {
                  info: "fas",
                  fontName: "home"
                }
              }
            />
          </Link>

          <Link exact to="/works" style={{ textDecoration: 'none' }}>
            <HeaderNavigationButton
              contentText={"Works"}
              fontInfo={
                {
                  info: "fas",
                  fontName: "gamepad"
                }
              }
            />
          </Link>

          <HeaderNavigationButton
            contentText={"Contact"}
            fontInfo={
              {
                info: "fas",
                fontName: "address-card"
              }
            }
          />
        </div>
      </header>
      <Switch>
        <Route path="/works">
          <Works />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}

export default Header;
