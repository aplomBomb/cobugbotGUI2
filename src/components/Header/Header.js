import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../AppContext";

export const Header = () => {
  const { currentUser, logUserOut } = useContext(AppContext);
  const [userName, setUserName] = useState("");

  return (
    <div className="headerContainer">
      <div className="userNameDiv">{currentUser.name}</div>
      <div className='logoutButton' onClick={logUserOut}>Log out</div>
    </div>
  );
};
