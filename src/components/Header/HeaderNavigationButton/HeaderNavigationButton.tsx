import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HeaderNavigationButton.css';

interface NavigationButtonProps {
  contentText: string;
  fontInfo: {
    info: string,
    fontName: string,
  };
};


const HeaderNavigationButton = (props: NavigationButtonProps) => {

  const info: any = props.fontInfo.info;
  const fontName: any = props.fontInfo.fontName;

  console.log(props.contentText);

  return (
    <div className="HeaderNavigationButton">
      <p><FontAwesomeIcon icon={[info, fontName]} /> {props.contentText}</p>
    </div>
  )
};

export default HeaderNavigationButton;
