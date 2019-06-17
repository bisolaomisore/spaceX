import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Countdown from "./Countdown";
import Future from "./Future";
import About from "./About";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Nav className="justify-content-center pb-4" variant="pills" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link as={NavLink} exact to="/">Countdown</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/future">Future</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            </Nav.Item>
          </Nav>
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
