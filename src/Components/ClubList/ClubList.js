import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

export default class ClubList extends Component {
  render() {
    console.log("clublist", this.props.clubs);

    const clubItems = this.props.clubs.map((club) => (
      <div className="ClubItems" key={club.clubId}>
        <NavLink to={`/clubs/${club.clubId}`}>
          {club.name} {club.league}
        </NavLink>
      </div>
    ));

    return (
      <div>
        <div>{clubItems}</div>
      </div>
    );
  }
}
