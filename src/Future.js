import React, { Component } from "react";

const SpacexApiWrapper = require("spacex-api-wrapper");

class Future extends Component {
  constructor(props, context) {
    super(props, context);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    SpacexApiWrapper.getUpcomingLaunches({limit: 5}).then((data) => {
      console.log(data);
    });
  }

  render() {
    return (
      <h1>This will be the <strong>Future</strong> page</h1>
    );
  }
}

export default Future;
