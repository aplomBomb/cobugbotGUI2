import React from "react";
import { Link } from "react-router-dom";
import { Login } from "../Login/Login";

export const Splash = () => {
  return (
    <div className="splashContainer">
      <h1>Cobugbot</h1>
      <div className="linksContainer">
        <Link className="loginLink" to="/login">
          <h3>Login</h3>
        </Link>
        <Link className="aboutLink" to="/about">
          <h3>About</h3>
        </Link>
      </div>
    </div>
  );
};
