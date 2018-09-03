import React from "react";

import { Switch, Route } from 'react-router-dom';
import Landing from "../pages/landingpage";
import AboutMe from "../pages/aboutme";
import Contact from "../pages/contact";
import Projects from "../pages/projects";
import Resume from "../pages/resume";


const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
);

export default Main;