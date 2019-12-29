import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Splash, Login, About, Home, FouRoFour } from "./views/index";

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
