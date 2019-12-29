import React from "react";
import { Link } from "react-router-dom";
import { Login } from "../Login/Login";

export const Splash = () => {
  return (
    <div className="splashContainer">
      <h1>Cobugbot</h1>
      <div className="linksContainer">
        <Link className="loginLink" to="/login">
          <h2>Login</h2>
        </Link>
        <Link className="aboutLink" to="/about">
          <h2>About</h2>
        </Link>
      </div>
    </div>
  );
};
