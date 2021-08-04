import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from '../Welcome/index'

import ApiConnect from "../ApiConnect";
import CharacterSpecs from "../CharacterSpecs";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path ="/characters" component={ApiConnect}/>
        <Route path ="/charactersinfo/:uuid"  component={CharacterSpecs}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;