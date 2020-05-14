import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

export default class CoachList extends Component {
  render() {
    console.log("coachlist", this.props.coaches);

    const coachItems = this.props.coaches.map((coach) => (
      <div className="CoachItems" key={coach.coachId}>
        <NavLink to={`/coaches/${coach.coachId}`}>
          {coach.firstName} {coach.lastName}
        </NavLink>
      </div>
    ));

    return (
      <div>
        <div>{coachItems}</div>
      </div>
    );
  }
}
