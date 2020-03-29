import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HeaderNavigationButton.css';

interface NavigationButtonProps {
  contentTextColor: string;
  contentText: string;
  fontInfo: {
    info: string,
    fontName: string,
  };
};


const HeaderNavigationButton = (props: NavigationButtonProps) => {

  const info: any = props.fontInfo.info;
  const fontName: any = props.fontInfo.fontName;

  return (
    <div className="HeaderNavigationButton">
      <p style={{ color: props.contentTextColor }}>
        <FontAwesomeIcon icon={[info, fontName]} /> {props.contentText}
      </p>
    </div>
  )
};

export default HeaderNavigationButton;
