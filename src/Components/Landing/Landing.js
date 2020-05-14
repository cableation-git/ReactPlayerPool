import React from "react";
import "./Landing.css";
import "./PlayerStatGrid.css";
import PlayerStatGrid from "./PlayerStatGrid";

export default function Landing(props) {
  const { players, clubs } = props;

  const playerItems = players.map((player) => (
    <div className="PlayerGrid__player-details" key={player.playerId}>
      <PlayerStatGrid player={player} />
    </div>
  ));

  return (
    <section>
      <div className="PlayerGrid">
        <div className="PlayerGrid__header">
          <div className="PlayerGrid__rank">Rank</div>
          <div className="PlayerGrid__name">Name</div>
          <div className="PlayerGrid__club">Club</div>
          <div className="PlayerGrid__stat">Weighted Stat Value</div>
        </div>
        <div className="PlayerGrid__players">
          {playerItems}
        </div>
      </div>
    </section>
  );
}
