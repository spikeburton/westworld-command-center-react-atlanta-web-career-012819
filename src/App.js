import React, { Component } from "react";
import "./stylesheets/App.css";
import { Segment } from "semantic-ui-react";
import WestworldMap from "./components/WestworldMap";
import Headquarters from "./components/Headquarters";

class App extends Component {
  state = {
    hosts: [],
    areas: []
  };

  fetchHosts = () => {
    fetch("http://localhost:4000/hosts")
      .then(response => response.json())
      .then(hosts =>
        this.setState({
          hosts: hosts
        })
      );
  };

  fetchAreas = () => {
    fetch("http://localhost:4000/areas")
      .then(response => response.json())
      .then(areas => this.setState({ areas }));
  };

  selectHost = host => {
    const hosts = this.state.hosts.map(h => {
      if (h === host && !h.selected) {
        return { ...h, selected: true };
      } else {
        delete h.selected;
        return h;
      }
    });

    this.setState({
      hosts: hosts
    });
  };

  toggleActive = host => {
    // const active = host.active === true ? false : true
    host.active = !host.active
    this.setState({
      hosts: [
        ...this.state.hosts,
        ...host
      ]
    })
  };

  areaOptions = () => {
    return this.state.areas.map(area => {
      return {
        key: area.name,
        text: area.name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        value: area.name
      }
    })
  }

  handleAreaChange = (value, host) => {
    // console.log(host)
    // console.log(value)
    host.area = value
    this.setState({
      host: [
        ...this.state.hosts,
        ...host
      ]
    })
  }

  componentDidMount() {
    this.fetchHosts();
    this.fetchAreas();
  }

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  render() {
    // this.areaOptions()
    return (
      <Segment id="app">
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <WestworldMap
          areas={this.state.areas}
          hosts={this.state.hosts}
          selectHost={this.selectHost}
        />
        <Headquarters
          hosts={this.state.hosts}
          selectHost={this.selectHost}
          toggleActive={this.toggleActive}
          handleAreaChange={this.handleAreaChange}
          areaOptions={this.areaOptions}
        />
      </Segment>
    );
  }
}

export default App;
