import React from "react";
import { NavLink } from 'react-router-dom';

export default function PlayerStatGrid(props) {
  console.log("in playerStatGrid", props);
  return (
    <NavLink to={`/players/${props.player.player_id}`}>
      <div className='PlayerGrid__rank'>0</div>
      <div className='PlayerGrid__name'>{props.player.first_name} {props.player.last_name}</div>
      <div className='PlayerGrid__club'>{props.player.club_name}</div>
      <div className='PlayerGrid__stat'>Weighted Stat Value</div>
    </NavLink>
  );
}
