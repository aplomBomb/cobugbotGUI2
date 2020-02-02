import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./index.scss";
import { AppContextProvider } from "./components/AppContext";
import { Splash, About, Home, FouRoFour } from "./views/index";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import history from './history'

const App = () => {
  return (
    <AppContextProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route>
            <FouRoFour />
          </Route>
        </Switch>
      </Router>
    </AppContextProvider>
  );
};

export default App;
