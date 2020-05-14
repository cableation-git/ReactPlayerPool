import React from "react";

const PlayerPoolContext = React.createContext({
    players: [],
    setPlayers: () => {},
    addPlayer: () => {},
    clubs: [],
    setClubs: () => {},
    addClub: () => {},
})
export default PlayerPoolContext;