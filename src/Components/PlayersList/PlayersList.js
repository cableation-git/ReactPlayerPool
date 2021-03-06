import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import PlayerPoolContext from "../../PlayerPoolContext";
import "./PlayersList.css";
import "./PlayersListGrid.css";
import PlayersListGrid from "./PlayersListGrid";


export default class PlayersList extends Component {
  static contextType = PlayerPoolContext;

  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
  }

  setError = (error) => {
    this.setState({ error: error });
  };

  render() {
    console.log("playersList", this.props.players);

    const playerItems = this.props.players.map((player) => (
      <div className="PlayersListGrid__player-details" key={player.player_id}>
        <PlayersListGrid player={player} />
      </div>
    ));

    return (
      <section>
        <div>
          <NavLink to='/addPlayer'>
            <div className="button">
              Add Player
            </div>
          </NavLink>
        </div>
        <div className="PlayersListGrid">
          <div className="PlayersListGrid__header">
            <div className="PlayersListGrid__name">Player</div>
            <div className="PlayersListGrid__birthDate">Birthday</div>
            <div className="PlayersListGrid__birthPlace">Born In</div>
          </div>
          <div className="PlayersListGrid__players">{playerItems}</div>
        </div>
      </section>
    );
  }
}
