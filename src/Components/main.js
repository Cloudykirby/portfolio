import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "./mainPage";
import Resume from "./resume";
import Projects from "./projects";
import Contacts from "./contacts";
import About from "./aboutme";

const Main = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/aboutme" component={About} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contacts} />
    <Route path="/projects" component={Projects} />
  </Switch>
);

export default Main;
