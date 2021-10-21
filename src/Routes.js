import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Signin from "./auth/Signin";
import Home from "./Home";
import Signup from "./auth/Signup";
import Contact from "./Contact";
import About from "./About";
import SigninPop from "./auth/SigninPop";
import Services from "./Services";
import PageNotFound from "./PageNotFound";
const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route exact path="/">
          <Redirect to="/home" component={Home} />
        </Route>
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="**" exact component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
