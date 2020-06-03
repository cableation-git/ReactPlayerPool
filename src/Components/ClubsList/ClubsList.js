import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import PlayerPoolContext from '../../PlayerPoolContext';
import "./ClubsListGrid.css";
import ClubsListGrid from "./ClubsListGrid";

export default class ClubsList extends Component {
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
    console.log("clubslist", this.props.clubs);

    const clubItems = this.props.clubs.map((club) => (
      <div className="ClubsListGrid__club-details" key={club.id}>
        <ClubsListGrid club={club} />
      </div>
    ));

    return (
      <section>
        <div className="ClubsListGrid">
          <div className="ClubsListGrid__header">
            <div className="ClubsListGrid__clubName">Club</div>
            <div className="ClubsListGrid__stadiumName">Stadium</div>
            <div className="ClubsListGrid__location">Located</div>
            <div className="ClubsListGrid__inception">Founded</div>
            <div className="ClubsListGrid__currentUSMNTPlayer">Current USMNT Player</div>
            <div className="ClubsListGrid__clubImage">Club Icon</div>
          </div>
          <div className="ClubsListGrid__clubs">{clubItems}</div>
        </div>
      </section>
    );
  }
}
