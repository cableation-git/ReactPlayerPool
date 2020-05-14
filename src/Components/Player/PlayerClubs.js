import React from "react";
import "./PlayerClubs.css";

export default function PlayerClubs(props) {
  console.log("in playerClubs", props);
  return (
    <React.Fragment>
      <div className="PlayerClubs__name">{props.playerClub.name}</div>
      <div className="PlayerClubs__league">{props.playerClub.league}</div>
      <div className="PlayerClubs__division">{props.playerClub.division}</div>
      <div className="PlayerClubs__city">{props.playerClub.city}</div>
      <div className="PlayerClubs__country">{props.playerClub.country}</div>
      <div className="PlayerClubs__inception">{props.playerClub.inception}</div>
    </React.Fragment>
  );
}