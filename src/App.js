import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import StartUp from "./StartUp";
import CreateNew from "./CreateNew";
class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={StartUp} />
          <Route exact path="/createnew" component={CreateNew} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default App;
