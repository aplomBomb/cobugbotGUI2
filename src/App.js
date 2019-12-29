import React from 'react';
import { Route, Switch } from "react-router";

let routes = (
  <Switch>
    <Route exact path="/">
      <Splash />
    </Route>
    <Route  path="/login">
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
);

export default App;
