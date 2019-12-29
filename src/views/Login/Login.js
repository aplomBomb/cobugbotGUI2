import React from "react";

export const Login = ({classNameShit}) => {
  return (
    <div className={`loginContainer${classNameShit}`}>
      <input
        className="usernameInput"
        placeholder="Username"
        onChange={() => console.log("Username Input Received")}
      />
      <input
        className="passwordInput"
        placeholder="Password"
        onChange={() => console.log("Password Input Received")}
      />
    </div>
  );
};
