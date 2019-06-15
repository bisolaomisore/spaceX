import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Countdown from "./Countdown";
import Future from "./Future";
import About from "./About";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Space X</h1>
          <ul className="header">
            <li><NavLink to="/">Countdown</NavLink></li>
            <li><NavLink to="/future">Future</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Countdown}/>
            <Route path="/future" component={Future}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
