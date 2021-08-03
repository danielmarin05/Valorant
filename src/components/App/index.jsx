import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from '../Welcome/index'

import ApiConnect from "../ApiConnect";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path ="/characters" component={ApiConnect}/>
        <Route path ="/charactersinfo" component={ApiConnect}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;