import React, { Component } from "react";

export default class PlayersList extends Component {
  render() {
    console.log("player", this.props.players);

    const playerItems = this.props.players.map((player) => (
      <div className="PlayerItems" key={player.playerId}>
        {player.firstName} {player.lastName}
      </div>
    ));

    return (
      <div>
        <div>{playerItems}</div>
      </div>
    );
  }
}
