import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../../components/AppContext";
import { Header } from "../../components/Header";
import history from "../../history";

export const Dashboard = () => {
  const { isLoggedIn, userLoading, fetchInsultCount } = useContext(AppContext);

  useEffect(() => {
    if (!isLoggedIn) history.push("/login");
  });

  return (
    <div className="dashboardContainer">
      <Header />
      {userLoading ? (
        <div>LOADING</div>
      ) : (
        <>
          <span className="dashboardTitle">This is the Dashboard</span>

          <button onClick={() => fetchInsultCount}></button>
        </>
      )}
    </div>
  );
};
