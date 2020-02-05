import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";
import history from "../../history";

export const Login = () => {
  const { isLoggedIn, loginUser, loginError, decodeToken } = useContext(
    AppContext
  );
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    errors: {}
  });

  const onChange = e => {
    setLoginInfo({ ...loginInfo, [e.target.id]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: loginInfo.email,
      password: loginInfo.password
    };
    loginUser(userData);
  };

  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
      const token = localStorage.jwtToken.split(" ");
      decodeToken(token[1]);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) history.push("/dashboard");
  });

  useEffect(() => {
    setLoginInfo({
      ...loginInfo,
      errors: loginError
    });
  }, [loginError]);

  useEffect(() => console.log(loginInfo.errors));

  return (
    <div className="container">
      <div style={{ marginTop: "4rem" }} className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to
            home
          </Link>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Login</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input
                onChange={onChange}
                value={loginInfo.email}
                id="email"
                type="email"
              />
              <label htmlFor="email">Email</label>
              <div className="emailErrorDiv">
                {(loginInfo &&
                  loginInfo.errors &&
                  loginInfo.errors.emailnotfound) ||
                  (loginInfo && loginInfo.errors && loginInfo.errors.email)}
              </div>
            </div>
            <div className="input-field col s12">
              <input
                onChange={e => onChange(e)}
                value={loginInfo.password}
                id="password"
                type="password"
              />
              <label htmlFor="password">Password</label>
              <div className="passwordErrorDiv">
                {loginInfo &&
                  loginInfo.errors &&
                  loginInfo.errors.passwordincorrect}
              </div>
            </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
