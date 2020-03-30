import React from 'react';
import {
  Link
} from 'react-router-dom';
import './MyButton.css';

const MyButton = () => {
  return (
    <div>
      <Link to="/works" style={{ textDecoration: 'none' }}>
        <div className="button">
          <p>Worksへ</p>
        </div>
      </Link>
    </div>
  )
};

export default MyButton;