import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./components/Login";
import StudentRegistration from "./components/StudentRegistration";
import View from "./components/View";
//
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={StudentRegistration} exact />
      <Route path="/show" component={View} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
