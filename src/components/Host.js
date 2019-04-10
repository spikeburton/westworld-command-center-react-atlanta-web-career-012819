import React from "react";
import "../stylesheets/Host.css";
import { Card } from "semantic-ui-react";

const Host = props => {
  return (
    <Card
      className={props.host.selected === true ? "host selected" : "host"}
      //{/* NOTE: The className "host selected" renders a different style than simply "host". */}
      onClick={() => props.selectHost(props.host)} //{ /* On Click what? */}
      image={props.host.imageUrl} //{/* I wonder what goes here...*/}
      href
      raised
    />
  );
};

export default Host;
