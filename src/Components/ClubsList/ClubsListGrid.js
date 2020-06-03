import React from "react";
import { NavLink } from "react-router-dom";
import { render } from "@testing-library/react";

export default function ClubsListGrid(props) {
  console.log("in clubsListGrid", props);

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

  return (
    <NavLink to={`/clubs/${props.club.id}`}>
      <div className="ClubsListGrid__clubName"> {props.club.clubName.toProperCase()}, {props.club.leagueName.toProperCase()}</div>
      <div className="ClubsListGrid__stadiumName"> {props.club.stadiumName.toProperCase()}</div>
  <div className="ClubsListGrid__location"> {props.club.city.toProperCase()}, {props.club.country.toUpperCase()}</div>
      <div className="ClubsListGrid__inception"> {props.club.inception}</div>
  <div className="ClubsListGrid__currentUSMNTPlayer"> {props.club.playerFirstName} {props.club.playerLastName}</div>
      <div className="ClubsListGrid__clubImage">
            <img
              src={props.club.clubImage}
              alt={props.club.clubName}
            />
          </div>
    </NavLink>
  );
}