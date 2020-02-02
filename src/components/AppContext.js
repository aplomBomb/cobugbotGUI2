import React, { useState } from "react";

export const AppContext = React.createContext({});

export const AppContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  return (
    <AppContext.Provider
      value={{isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser}}
    >
      {props.children}
    </AppContext.Provider>
  );
};
