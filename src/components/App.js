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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
          <Route path="*" component={Error} />
        </Switch>
        <LocationDisplayComponent />

        {/* Do not remove the main div */}
      </div>
    );
  }
}

export default App;
export const LocationDisplay = LocationDisplayComponent;
