import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SpacexApiWrapper = require("spacex-api-wrapper");

class About extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { data: {} };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() { this.getData(); }

  getData() {
    SpacexApiWrapper.info()
      .then((data) => this.setState({ data: data }));
  }

  render() {
    const info = this.state.data;

    return (
      <Row>
        <Col>
          <Card className="bg-transparent">
            <Card.Body>
              <h1>{info.name}</h1>
              <Card.Text className="summary">{info.summary}</Card.Text>

              <h3>Executives</h3>
              <ul className="executives">
                <li>CEO & CTO - {info.ceo}</li>
                <li>CTO Propulsion - {info.cto_propulsion}</li>
                <li>COO - {info.coo}</li>
              </ul>

              <h3>Info</h3>
              <ul className="company-info">
                <li>Founded: {info.founded}</li>
                <li>Employees: {info.employees}</li>
                <li>Launch Sites:{info.launch_sites}</li>
                <li>Test Sites: {info.test_sites}</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col className="spaceship d-none d-lg-block" />
      </Row>
    );
  }
}

export default About;
