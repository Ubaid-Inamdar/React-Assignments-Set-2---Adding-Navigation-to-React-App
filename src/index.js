import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
function generateCodeFromObject(obj) {
  //return a code generated string
}
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

module.exports = generateCodeFromObject;

// ReactDOM.render(<App />, document.getElementById("root"));
