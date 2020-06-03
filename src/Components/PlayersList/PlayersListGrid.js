import React from "react";
import { NavLink } from "react-router-dom";
import { render } from "@testing-library/react";

export default function PlayersListGrid(props) {
  console.log("in playersListGrid", props);

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

  const getBirthPlace = () => {
    let birthPlace = '';
    if (props.player.birthState === "") {
      birthPlace =
        props.player.birthCity.toProperCase() + ", " + props.player.birthCountry.toUpperCase();
    } else {
      birthPlace =
        props.player.birthCity.toProperCase() +
        ", " +
        props.player.birthState.toUpperCase() +
        ", " +
        props.player.birthCountry.toUpperCase();
    }

    return birthPlace;
  };

  return (
    <NavLink to={`/players/${props.player.id}`}>
      <div className="PlayersListGrid__name">
        {props.player.firstName} {props.player.lastName}
      </div>
      <div className="PlayersListGrid__birthDate">{props.player.birthDate}</div>
      <div className="PlayersListGrid__birthPlace">{getBirthPlace()}</div>
    </NavLink>
  );
}
