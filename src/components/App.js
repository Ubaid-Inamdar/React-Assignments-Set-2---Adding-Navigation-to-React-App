import React, { Component, useState } from "react";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import {
  BrowserRouter as Link,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
function LocationDisplayComponent() {
  let location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}

class App extends Component {
  render() {
    return (
      <div id="main">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/" component={Error} />
        </Switch>
        <LocationDisplayComponent />

        {/* Do not remove the main div */}
      </div>
    );
  }
}

export default App;
export const LocationDisplay = LocationDisplayComponent;
