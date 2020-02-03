import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import jwt from "jsonwebtoken";
import setAuthToken from "../utils/setAuthToken";
import history from "../history";
import { set } from "mongoose";

export const AppContext = React.createContext({});

export const AppContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [userLoading, setUserLoading] = useState(false);

  const registerUser = (userData, history) => {
    axios
      .post("/api/users/register", userData)
      .then(res => history.push("/login"))
      .catch(error => console.log(error.response.data));
  };

  const decodeToken = token => {
    const decodedToken = jwt_decode(token);
    setCurrentUser(decodedToken);
    setIsLoggedIn(true);
  };

  const loginUser = userData => {
    setUserLoading(true);
    axios
      .post("/api/users/login", userData)
      .then(res => {
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        setCurrentUser(decoded);
        setIsLoggedIn(true);
        setUserLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoggedIn(false);
      });
  };

  const logUserOut = () => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    setIsLoggedIn(false)
    setCurrentUser({});
  };

  useEffect(() => {
    if (isLoggedIn) history.push("/dashboard");
  });

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        currentUser,
        setCurrentUser,
        registerUser,
        loginUser,
        logUserOut,
        userLoading,
        decodeToken
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
