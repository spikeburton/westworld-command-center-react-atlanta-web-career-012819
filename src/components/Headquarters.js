import React, { Component } from "react";
import "../stylesheets/Headquarters.css";
import { Grid } from "semantic-ui-react";
import ColdStorage from "./ColdStorage";
import Details from "./Details";
import LogPanel from "./LogPanel";

class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  render() {
    return (
      <Grid celled="internally">
        <Grid.Column width={8}>
          {/* Something goes here.... */}
          <ColdStorage
            hosts={this.props.hosts}
            selectHost={this.props.selectHost}
          />
        </Grid.Column>
        <Grid.Column width={5}>
          <Details
            host={this.props.hosts.find(host => host.selected)}
            toggleActive={this.props.toggleActive}
            handleAreaChange={this.props.handleAreaChange}
            areaOptions={this.props.areaOptions}
          />
        </Grid.Column>
        <Grid.Column width={3}>
          {/* and here. Take visual cues from the screenshot/video in the Readme. */}
          <LogPanel />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Headquarters;
