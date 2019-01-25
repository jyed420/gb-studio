import React, { Component } from "react";
import { connect } from "react-redux";

class ActorSelect extends Component {
  render() {
    const { actors, dispatch, ...rest } = this.props;
    return (
      <select {...rest}>
        <option>None</option>
        {actors.map((actor, index) => (
          <option key={actor.id} value={actor.id}>
            {actor.name || "Actor " + (index + 1)}
          </option>
        ))}
      </select>
    );
  }
}

function mapStateToProps(state) {
  const map = state.project.scenes.find(
    map => map.id === state.navigation.mapId
  );
  const actors = map ? map.actors : [];
  return {
    actors
  };
}

export default connect(mapStateToProps)(ActorSelect);