import React from "react";
import { NavLink } from "react-router-dom";

export default function CoachesListGrid(props) {
  console.log("in coachesListGrid", props);

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

const getBirthPlace = () => {
  let birthPlace = '';
  if (props.coach.birth_state === "") {
    birthPlace =
      props.coach.birth_city.toProperCase() + ", " + props.coach.birth_country.toUpperCase();
  } else {
    birthPlace =
      props.coach.birth_city.toProperCase() +
      ", " +
      props.coach.birth_state.toUpperCase() +
      ", " +
      props.coach.birth_country.toUpperCase();
  }

  return birthPlace;
};

  return (
    <NavLink to={`/coaches/${props.coach.coach_id}`}>
      <div className="CoachesListGrid__coachName"> {props.coach.first_name.toProperCase()}, {props.coach.last_name.toProperCase()}</div>
      <div className="CoachesListGrid__birthDate"> {props.coach.birth_date}</div>
      <div className="CoachesListGrid__birthPlace"> {getBirthPlace()}</div>
      <div className="CoachesListGrid__currentClub"> {props.coach.club_name}</div>
      <div className="CoachesListGrid__yearHired"> {props.coach.year_hired}</div>
      
      <div className="CoachesListGrid__coachImage">
          <img
            src={props.coach.image_url}
            alt={props.coach.last_name}
          />
        </div>
    </NavLink>
  );
}
