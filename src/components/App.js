import React, { Component, useState } from "react";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
          <Route component={Error} />
        </Switch>

        {/* Do not remove the main div */}
      </div>
    );
  }
}

export default App;
