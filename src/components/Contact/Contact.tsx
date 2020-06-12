import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext.js';
import {
  CHANGE_PAGE_STATE_CONTACT,
} from "../../actions/index";
import "./Contact.css";
import Youtube from "../Youtube/Youtube";
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
    <div>
    <h1>Youtube</h1>
    <Youtube />
    </div>
  )
};

export default Contact;
