import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import AppRouter from  './routers/AppRouter'
import App from "./components/App";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";



ReactDOM.render(<App></App>, document.getElementById("root"));
