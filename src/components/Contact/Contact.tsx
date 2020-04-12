import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext.js';
import {
  CHANGE_PAGE_STATE_CONTACT,
} from "../../actions/index";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = () => {
  const { dispatch } = useContext(AppContext);

  const [pageState, setPageState] = useState([true, false, false]);
  useEffect(() => {
    setPageState([true, false, false]);
  }, []);

  useEffect(() => {
    dispatch({
      type: CHANGE_PAGE_STATE_CONTACT,
    });
    // eslint-disable-next-line
  }, [pageState]);


  return (
    <div className="contact">
      <h2>SNS</h2>
      <div className="contact-icon">
        <FontAwesomeIcon icon={["fab", "facebook-square"]} size={"5x"} className="logos" color="#3b5998" />
        <FontAwesomeIcon icon={["fab", "twitter-square"]} size={"5x"} className="logos" color="#00acee" />
      </div>
      <h3>or</h3>
      <h2>E-mail</h2>
      <h2 className="email">hobirondokidoki.5150[at]gmail.com</h2>
    </div>
  )
};

export default Contact;
