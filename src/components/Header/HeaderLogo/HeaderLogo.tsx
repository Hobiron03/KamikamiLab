import React from 'react'
import "./HeaderLogo.css";

interface HeaderLogoProps {
  logoColor: string;
}

const HeaderLogo = (props: HeaderLogoProps) => {
  return (
    <div className="headerLogo" style={{ backgroundColor: props.logoColor }}>
      <p>KamikamiLab</p>
    </div>
  )
};

export default HeaderLogo;