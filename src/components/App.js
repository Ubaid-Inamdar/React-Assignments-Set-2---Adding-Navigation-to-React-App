import React, { Component, useState } from "react";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
        </Switch>

        {/* Do not remove the main div */}
      </div>
    );
  }
}

export default App;
