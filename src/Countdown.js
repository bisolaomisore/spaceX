import React, { Component } from "react";

const SpacexApiWrapper = require("spacex-api-wrapper");

class Countdown extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: ""
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    // this.getData();
  }

  getData() {
    SpacexApiWrapper.getNextLaunch().then((data) => {
      this.setState({
        data: data
      });
    });
  }

  render() {
    return (
      <h1>This will be the <strong>Countdown</strong> page</h1>
    );
  }
}

export default Countdown;
