import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Space X</h1>
        <ul className="header">
          <li><a href="/">Countdown</a></li>
          <li><a href="/future">Future</a></li>
          <li><a href="/About">About</a></li>
        </ul>
        <div className="content"></div>
      </div>
    );
  }
}

export default Main;
