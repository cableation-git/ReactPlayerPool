import React from "react";

const PlayerPoolContext = React.createContext({
    players: [],
    setPlayers: () => {},
    addPlayer: () => {},
    updatePlayer: () => {},
    deletePlayer: () => {},
    clubs: [],
    setClubs: () => {},
    addClub: () => {},
    leagues: [],
    setLeagues: () => {},
    coaches: [],
})
export default PlayerPoolContext;