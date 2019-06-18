import React, { Component } from "react";

const SpacexApiWrapper = require("spacex-api-wrapper");

class About extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      data: ""
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    SpacexApiWrapper.info().then((data) => {
      this.setState({
        data: data
      });
    });
  }

  render() {
    return (
      <h1>{this.state.data.ceo}</h1>
    );
  }
}

export default About;
