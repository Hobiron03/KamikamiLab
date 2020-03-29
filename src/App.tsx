import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home/Home";
import Works from "./components/Works/Works";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Header />
        </div>
      </Router>
    </div >
  );
}

export default App;
