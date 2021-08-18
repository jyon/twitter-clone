import { React, useState } from "react";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";

const AppRouter = ({isLoggedIn, userObj}) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn? (
          <>
            <Route exact path="/">
              <Home userObj={userObj}/>
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Redirect from="*" to="/" />
          </> 
        ) : (
          <>
          <Route exact path="/">
            <Auth />
          </Route>
          <Redirect from="*" to="/" />
          </>
        )}
      </Switch>
    </Router>

  );
}

export default AppRouter;