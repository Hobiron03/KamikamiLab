import React, { useEffect, useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext.js';
import {
  CHANGE_PAGE_STATE_CONTACT,
} from "../../actions/index";
import "./Contact.css";

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
  }, [pageState]);


  return (
    <div className="contact">
      <h1>Here is Contact!!!</h1>
    </div>
  )
};

export default Contact;
