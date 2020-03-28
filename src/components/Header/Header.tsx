import React from 'react';
import "./Header.css";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNavigationButton from './HeaderNavigationButton/HeaderNavigationButton';

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <HeaderLogo />
      </div>

      <div className="header-right">
        <HeaderNavigationButton
          contentText={"Home"}
          fontInfo={
            {
              info: "fas",
              fontName: "home"
            }
          }
        />

        <HeaderNavigationButton
          contentText={"Works"}
          fontInfo={
            {
              info: "fas",
              fontName: "gamepad"
            }
          }
        />

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
  );
}

export default Header;
