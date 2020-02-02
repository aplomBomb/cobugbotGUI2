import React, { useState } from "react";
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utils/setAuthToken'
export const AppContext = React.createContext({});

export const AppContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [userLoading, setUserLoading] = useState(false)

  const registerUser = (userData, history) => {
    axios
      .post("/api/users/register", userData)
      .then(res => history.push("/login"))
      .catch(error => console.log(error));
  };

  const loginUser = (userData) => {
      axios.post('/api/users/login', userData)
      .then(res => {
          const {token} = res.userData
          localStorage.setItem('jwtToken', token)
          setAuthToken(token)
          const decoded = jwt_decode(token)
          setCurrentUser(decoded)
      }).catch(error => console.log(error))
  }

  const logUserOut = () => {
      localStorage.removeItem('jwtToken')
      setAuthToken(false)
      setCurrentUser({})
  }


  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        currentUser,
        setCurrentUser,
        registerUser,
        loginUser,
        logUserOut
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
