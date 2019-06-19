import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SpacexApiWrapper = require("spacex-api-wrapper");

class Countdown extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: {},
      currentDate: Date.now()
     };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getData() {
    SpacexApiWrapper.getNextLaunch()
      .then((data) =>  this.setState({ data: data }));
  }

  tick() {
    this.setState(state => ({ currentDate: this.state.currentDate + 1000 }));
  }

  render() {
    const launch = this.state.data;
    const launchDateLocale = (new Date(launch.launch_date_utc)).toLocaleDateString();
    const missionName = launch.mission_name;
    // Javascript unix time is measured in milliseconds, the api unix time is
    // in seconds.
    let launchDate = launch.launch_date_unix ? launch.launch_date_unix * 1000 : Date.now();
    let currentDate = this.state.currentDate;
    let delta = Math.abs(launchDate - currentDate) / 1000;
    let days = Math.floor(delta / 86400);
    let hours = Math.floor(delta / 3600) % 24;
    let minutes = Math.floor(delta / 60) % 60;
    let seconds = Math.floor(delta % 60)
    return (
      <Row className="pt-3">
        <Col>
          <div className="countdownTime">{days}</div>
          <div className="countdownMeasure">DAYS</div>
        </Col>
        <Col>
          <div className="countdownTime">{hours < 10 ? '0' + hours : hours}</div>
          <div className="countdownMeasure">HOURS</div>
        </Col>
        <Col>
          <div className="countdownTime">{minutes < 10 ? '0' + minutes : minutes}</div>
          <div className="countdownMeasure">MINUTES</div>
        </Col>
        <Col>
          <div className="countdownTime">{seconds < 10 ? '0' + seconds : seconds}</div>
          <div className="countdownMeasure">SECONDS</div>
        </Col>
        <div className="w-100"/>
        <Col className="countdownText pt-3">
          The next mission ({missionName}) will be on {launchDateLocale}
        </Col>
      </Row>
    );
  }
}

export default Countdown;
