import React, { useState } from "react";
import Navbar from "./Navbar";
import Alert from "./Alert";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import UserDetails from "./UserDetails";
import GithubState from "../context/github/githubState";
import AlertState from "../context/alert/alertState";

const App = () => {
  //   componentDidMount() {
  //     this.setState({loading: true});
  //     axios
  //     .get("https://api.github.com/users")
  //     .then((res) => this.setState({users: res.data, loading: false}));
  //   }

  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar></Navbar>
          <Alert></Alert>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user/:login" component={UserDetails} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
