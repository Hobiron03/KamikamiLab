import React from "react";
import { Link } from "react-router-dom";
import "./MyButton.css";

const MyButton = () => {
  const hello: string = "hello";

  return (
    <div>
      <Link to="/works" style={{ textDecoration: "none" }}>
        <div className="button">
          <p>Other works</p>
        </div>
      </Link>
    </div>
  );
};

export default MyButton;
