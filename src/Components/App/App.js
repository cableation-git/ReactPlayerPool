import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//import Store from "../../Store";
import PlayerPoolContext from "../../PlayerPoolContext";
import NavBar from "../NavBar/NavBar";
import Landing from "../Landing/Landing";
import Player from "../Player/Player";
import PlayersList from "../PlayersList/PlayersList";
import Club from "../Club/Club";
import ClubsList from "../ClubsList/ClubsList";
import Coach from "../Coach/Coach";
import CoachList from "../CoachList/CoachList";
import "./App.css";
import PlayersApiService from "../../Services/players_api_service";
import ClubsApiService from "../../Services/clubs_api_service";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      players: [],
      playersInfo: [],
      clubs: [],
      coaches: [],
      playerStats: [],
    };
  }

  setPlayers = (players) => {
    this.setState({
      players,
    });
  };

  setPlayersInfo = (playersInfo) => {
    this.setState({
      playersInfo,
    });
  };

  setClubs = (clubs) => {
    this.setState({
      clubs,
    });
  };

  setCoaches = (coaches) => {
    this.setState({
      coaches,
    });
  };

  setPlayerStats = (playerStats) => {
    this.setState({
      playerStats,
    });
  };

  addPlayer = (player) => {
    this.setState({
      players: [...this.state.players, player],
    });
  };

  addClub = (club) => {
    this.setState({
      clubs: [...this.state.clubs, club],
    });
  };

  addCoach = (coach) => {
    this.setState({
      coaches: [...this.state.coaches, coach],
    });
  };

  addPlayerStats = (playerStat) => {
    this.setState({
      playerStats: [...this.state.playerStats, playerStat],
    });
  };

  // componentDidMount() {
  //   this.setPlayers(Store.players);
  //   this.setClubs(Store.clubs);
  //   this.setCoaches(Store.coaches);
  //   this.setPlayerStats(Store.playerStats);
  // }

  componentDidMount() {
    console.log("component did mount");

    const getAllPlayersRequest = PlayersApiService.getAllPlayers();
    const getPlayersInfoRequest = PlayersApiService.getPlayerInfo();
    const getAllClubsRequest = ClubsApiService.getAllClubs();

    Promise.all([getAllPlayersRequest, getPlayersInfoRequest])
      .then((values) => {
        this.setPlayers(values[0]);
        this.setPlayersInfo(values[1]);
      })
      .catch((error) => this.setState({ error: error.message }));

    Promise.all([getAllClubsRequest])
    .then((values) => {
      this.setClubs(values[0]);      
    })
    .catch((error) => this.setState({ error: error.message }));  
  }

  render() {
    console.log("Players", this.state.players);
    console.log("PlayersInfo", this.state.playersInfo);
    // console.log("Clubs", this.state.clubs);
    // console.log("Coaches", this.state.coaches);
    // console.log("PlayerStats", this.state.playerStats);
    const contextValue = {
      players: this.state.players,
      setPlayers: this.setPlayers,
      addPlayers: this.addPlayer,
      clubs: this.state.clubs,
      setClubs: this.setClubs,
      addClubs: this.addClub,
      coaches: this.state.coaches,
      setCoaches: this.setCoaches,
      addCoaches: this.addCoach,
      playerStats: this.state.playerStats,
      setPlayerStats: this.setPlayerStats,
      addPlayerStats: this.addPlayerStat,
    };

    return (
      <div className="App">
        <Route path="/" render={() => <NavBar />} />
        <PlayerPoolContext.Provider value={contextValue}>
          <Switch>
            {/* Landing Page */}
            <Route
              exact
              path="/"
              component={(routeProps) => (
                <Landing
                  players={this.state.playersInfo}
                  //clubs={this.state.clubs}
                  {...routeProps}
                />
              )}
            />

            {/* Players List */}
            <Route
              exact
              path="/players"
              component={(routeProps) => (
                <PlayersList
                  players={this.state.players}
                  // playerStats={this.state.playerStats}
                  // clubs={this.state.clubs}
                  // coaches={this.state.coaches}
                  {...routeProps}
                />
              )}
            />

            {/* Player Page */}
            <Route
              exact
              path="/players/:playerId"
              component={(routeProps) => (
                <Player
                  player={this.state.players.find(
                    (player) =>
                      player.id ===
                      Number(routeProps.match.params.playerId)
                  )}
                  //clubs={this.state.clubs}
                  //coaches={this.state.coaches}
                  //playerStats={this.state.playerStats.find(
                  //  (playerStats) =>
                  //    playerStats.playerId ===
                  //    Number(routeProps.match.params.playerId)
                  //)}
                  {...routeProps}
                />
              )}
            />

            {/* Clubs List */}
            <Route
              exact
              path="/clubs"
              component={(routeProps) => (
                <ClubsList 
                  clubs={this.state.clubs} 
                  {...routeProps} />
              )}
            />

            {/* Club Page */}
            <Route
              exact
              path="/clubs/:clubId"
              component={(routeProps) => (
                <Club
                  club={this.state.clubs.find(
                    (club) =>
                      club.clubId === Number(routeProps.match.params.clubId)
                  )}
                  {...routeProps}
                />
              )}
            />
            {/* Coach List */}
            <Route
              exact
              path="/coaches"
              component={(routeProps) => (
                <CoachList coaches={this.state.coaches} {...routeProps} />
              )}
            />
            {/* Coach Page */}
            <Route
              exact
              path="/coaches/:coachId"
              component={(routeProps) => (
                <Coach
                  coach={this.state.coaches.find(
                    (coach) =>
                      coach.coachId === Number(routeProps.match.params.coachId)
                  )}
                  {...routeProps}
                />
              )}
            />
          </Switch>
        </PlayerPoolContext.Provider>
      </div>
    );
  }
}
