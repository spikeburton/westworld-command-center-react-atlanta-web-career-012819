import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

class WestworldMap extends Component {
  render() {
    return (
      <Segment id="map">
        {/* What should we render on the map? */}
        {this.props.areas.map(area => (
          <Area
            area={area}
            hosts={this.props.hosts.filter(host => host.active && host.area === area.name)}
            selectHost={this.props.selectHost}
          />
        ))}
      </Segment>
    );
  }
}

export default WestworldMap;
