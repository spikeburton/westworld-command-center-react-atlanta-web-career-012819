import React from "react";
import "../stylesheets/Area.css";
import HostList from "./HostList";

const Area = props => (
  <div className="area" id={props.area.name}>
    {/* Pass in the area name here to make sure this is styled correctly */}
    <h3 className="labels">
      {props.area.name
        .split("_")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")}
    </h3>
    {/* Don't just pass in the name from the data...clean that thing up */}

    <HostList hosts={props.hosts} selectHost={props.selectHost} />
    {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
  </div>
);

Area.propTypes = {
  hosts: function(props, propName, componentName) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${
          props.name
        }. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  }
};

export default Area;
