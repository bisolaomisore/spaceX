import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'

class Future extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { data: [] };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() { this.getData(); }

  renderLaunchData() {
    if (this.state.data.length > 0) {
      return this.state.data.map((launch, index) => {
        const flightNumber = launch.flight_number;
        const launchDate = (new Date(launch.launch_date_utc)).toLocaleDateString();
        const siteName = launch.launch_site.site_name_long;
        const rocketName = launch.rocket.rocket_name;
        const missionName = launch.mission_name;

        return (
          <tr key={flightNumber}>
            <td>{flightNumber}</td>
            <td>{launchDate}</td>
            <td>{rocketName}</td>
            <td>{missionName}</td>
            <td className="site-name">{siteName}</td>
          </tr>
        );
      });
    }
  }

  getData() {
    fetch("https://api.spacexdata.com/v3/launches/upcoming")
      .then(res => res.json())
      .then(data => this.setState({ data: data }));
  }

  render() {
    return (
      <Row>
      <h1 className="mx-auto">Next Launches</h1>
        <Table borderless hover responsive className="next-launches">
          <thead>
            <tr>
              <th>#</th>
              <th>Launch Date</th>
              <th>Rocket</th>
              <th>Mission Name</th>
              <th>Launch Site</th>
            </tr>
          </thead>
          <tbody>
            {this.renderLaunchData()}
          </tbody>
        </Table>
      </Row>
    );
  }
}

export default Future;
