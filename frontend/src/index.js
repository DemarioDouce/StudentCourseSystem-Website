import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
//Components
import App from "./App";
import Login from "./components/Login";
import StudentRegistration from "./components/StudentRegistration";
import View from "./components/View";
import List from "./components/List";
import EditStudent from "./components/EditStudent";
import ShowStudent from "./components/ShowStudent";
import ShowCourse from "./components/ShowCourse";
import EditCourse from "./components/EditCourse";
import ListCourses from "./components/ListCourses";
//
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={StudentRegistration} exact />
      <Route path="/show" component={View} exact />
      <Route path="/list" component={List} exact />
      <Route path="/listcourses" component={ListCourses} exact />
      <Route path="/edit/:id" component={EditStudent} exact />
      <Route path="/show/:id" component={ShowStudent} exact />
      <Route path="/showcourse/:id" component={ShowCourse} exact />
      <Route path="/editcourse/:id" component={EditCourse} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
