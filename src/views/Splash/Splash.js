import React, { useState, useEffect } from "react";
import { Link as div } from "react-router-dom";
import { Login } from "../Login/Login";

export const Splash = () => {
  const [loginActive, setLoginActive] = useState(false);
  const [loginClassName, setLoginClassName] = useState('Hidden' || 'Visible')

  useEffect(() => {
    if (loginActive) setLoginClassName('Visible')
      else setLoginClassName('Hidden')
  } )

  return (
    <div className="splashContainer">
      <h1>Cobugbot</h1>
      <div className="linksContainer">
        <div className="loginLink" onClick={() => setLoginActive(!loginActive)}>
          <h2>Login</h2>
        </div>
        <a className="aboutLink" href="https://discord.gg/PtXnfJm">
          <h2>About</h2>
        </a>
      </div>
      <Login classNameShit={loginClassName} />
    </div>
  );
};
