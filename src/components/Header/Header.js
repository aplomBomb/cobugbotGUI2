import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../AppContext";

export const Header = () => {
  const { currentUser } = useContext(AppContext);
  const [userName, setUserName] = useState("");

  


  return (
    <div className="headerContainer">
<div className="userNameDiv">{currentUser.name}</div>
    </div>
  );
};
