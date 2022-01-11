import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

/**
 * tells React that we want to render "something" -> <App /> intot he "Element with the ID" -> 'root' (the id 'root' is found in ../public/index.html)
 */
ReactDOM.render(
  <App />, // NOTE: not traditional javascript code, this is transformed before it is delivered to the browser
  document.getElementById("root") //NOTE:  default Javascript DOM api, it selects the root element for display on screen
);
