import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.scss'
import { Splash, About, Home, FouRoFour } from "./views/index";
import {Login} from './components/auth/Login'
import {Register} from './components/auth/Register'

const App = () => {
  return (
    <Router>
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
  );
};

export default App;
