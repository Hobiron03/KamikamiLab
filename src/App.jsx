import React, { useReducer } from 'react';
import './App.css';
import Header from './components/Header/Header';
import pageState from './reducers/pageState.js';
import AppContext from './contexts/AppContext.js';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const App = () => {

  const [state, dispatch] = useReducer(pageState, [true, false, false])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Router>
          <Header />
        </Router>
      </div >
    </AppContext.Provider>
  );
}

export default App;
