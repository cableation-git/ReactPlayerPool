import React from "react";
import "./PlayerCoaches.css";

export default function PlayerCoaches(props) {
  console.log("in playercoaches", props);
  return (
    <React.Fragment>
      <div className="PlayerCoaches__firstName">{props.playerCoach.firstName}</div>
      <div className="PlayerCoaches__lastName">{props.playerCoach.lastName}</div>
      <div className="PlayerCoaches__birthDate">
        {props.playerCoach.birthDate}
      </div>
      <div className="PlayerCoaches__birthCountry">
        {props.playerCoach.birthCountry}
      </div>
      <div className="PlayerCoaches__currentClub">
        {props.playerCoach.currentClubId}
      </div>
      <div className="PlayerCoaches__yearsAtClub">{props.playerCoach.yearsAtCurrentClub}</div>
    </React.Fragment>
  );
}