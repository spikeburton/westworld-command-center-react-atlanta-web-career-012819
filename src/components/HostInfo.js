import "../stylesheets/HostInfo.css";
import React, { Component } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider
} from "semantic-ui-react";

class HostInfo extends Component {
  // state = {
  //   options: [
  //     { key: "some_area", text: "Some Area", value: "some_area" },
  //     { key: "another_area", text: "Another Area", value: "another_area" }
  //   ],
  //   value: "some_area"
  //   // This state is just to show how the dropdown component works.
  //   // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  //   // Value has to match the value in the object to render the right text.

  //   // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  // };

  // handleChange = (e, { value }) => {
  //   // the 'value' attribute is given via Semantic's Dropdown component.
  //   // Put a debugger in here and see what the "value" variable is when you pass in different options.
  //   // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  //   // debugger
  // };

  render() {
    const areaOptions = this.props.areaOptions();

    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.host.imageUrl} //{ /* pass in the right image here */ }
            floated="left"
            size="small"
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.host.firstName} |{" "}
                {this.props.host.gender === "Male" ? (
                  <Icon name="man" />
                ) : (
                  <Icon name="woman" />
                )}
                {/* Think about how the above should work to conditionally render the right First Name and the right gender Icon */}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={() => this.props.toggleActive(this.props.host)}
                  label={this.props.host.active ? "Active" : "Decommissioned"}
                  //{/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
                  checked={this.props.host.active}
                  //{/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
                  slider
                />
              </Card.Meta>
              <Divider />
              Current Area:
              <Dropdown
                onChange={(e, { value }) =>
                  this.props.handleAreaChange(value, this.props.host)
                }
                value={this.props.host.area}
                options={areaOptions}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

export default HostInfo;
