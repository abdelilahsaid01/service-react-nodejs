import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Routes from "./Routes";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import "./css/animate.min.css";
import "./css/prettyPhoto.css";
import "./css/icomoon.css";
import "./css/main.css";
import "./css/responsive.css";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
