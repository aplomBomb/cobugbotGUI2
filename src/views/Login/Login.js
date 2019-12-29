import React, { useState } from "react";

export const Login = ({ classNameShit }) => {
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: ""
  });

  const handleLoginSubmit = e => {
    console.log(e);
  };

  React.useEffect(() => {
    console.log('Username: ', loginCredentials.username)
    console.log('Password: ', loginCredentials.password)
  }, [loginCredentials] )

  return (
    <div className={`loginContainer${classNameShit}`}>
      <input
        className="usernameInput"
        placeholder=" Username"
        onChange={(e) => setLoginCredentials({
          ...loginCredentials,
          username: e.target.value
        })}
      />
      <input
        className="passwordInput"
        placeholder=" Password"
        onChange={(e) => setLoginCredentials({
          ...loginCredentials,
          password: e.target.value
        })}
      />
      <button
        className="loginConfirmButton"
        onClick={e => {
          e.preventDefault();
          handleLoginSubmit(e);
        }}
      >
        Log In
      </button>
    </div>
  );
};
