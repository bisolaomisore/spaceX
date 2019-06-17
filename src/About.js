import React, { Component } from "react";

const SpacexApiWrapper = require("spacex-api-wrapper");

class About extends Component {

  constructor(props, context) {
    super(props, context);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    SpacexApiWrapper.info().then((data) => {
      console.log(data);
    });
  }

  render() {
    return (
      <h1>This will be the <strong>About</strong> page</h1>
    );
  }
}

export default About;
