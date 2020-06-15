import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//import Store from "../../Store";
import PlayerPoolContext from "../../PlayerPoolContext";
import NavBar from "../NavBar/NavBar";
import Landing from "../Landing/Landing";
import Player from "../Player/Player";
import PlayersList from "../PlayersList/PlayersList";
import AddPlayer from "../Player/PlayerForms/AddPlayer";
import UpdatePlayer from "../Player/PlayerForms/UpdatePlayer";
import Club from "../Club/Club";
import ClubsList from "../ClubsList/ClubsList";
import AddClub from "../Club/ClubForms/AddClub";
import Coach from "../Coach/Coach";
import CoachesList from "../CoachesList/CoachesList";
import AddCoach from "../Coach/CoachForms/AddCoach";
import LeaguesList from "../LeaguesList/LeaguesList";
import "./App.css";
import PlayersApiService from "../../Services/players_api_service";
import LeaguesApiService from "../../Services/leagues_api_service";
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
      leagues: [],
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

   updatePlayer = updatedPlayer => {
    this.setState({
      players: this.state.players.map(player =>
        (player.player_id !== updatedPlayer.player_id) ? player : updatedPlayer
        )
    })
  }

  deletePlayer = (player_id) => {
    const newPlayers = this.state.players.filter(player =>
      player.player_id !== Number(player_id)
      );
    this.setState({
      players: newPlayers
    });  
  }

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

  setLeagues = (leagues) => {
    this.setState({
      leagues,
    });
  };

  setClubs = (clubs) => {
    this.setState({
      clubs,
    });
  };

  componentDidMount() {
    console.log("component did mount");

    const getAllPlayersRequest = PlayersApiService.getAllPlayers();
    const getPlayersInfoRequest = PlayersApiService.getPlayerInfo();
    const getAllLeaguesRequest = LeaguesApiService.getAllLeagues();
    const getAllClubsRequest = ClubsApiService.getAllClubs();
    // const getAllCoachesRequest = CoachesApiService.getAllCoaches();

    Promise.all([
      getAllPlayersRequest,
      getPlayersInfoRequest,
      getAllLeaguesRequest,
      getAllClubsRequest,
    ])
      .then((values) => {
        this.setPlayers(values[0]);
        this.setPlayersInfo(values[1]);
        this.setLeagues(values[2]);
        this.setClubs(values[3]);
      })
      .catch((error) => this.setState({ error: error.message }));
  }

  render() {
    console.log("Players", this.state.players);
    console.log("PlayersInfo", this.state.playersInfo);
    console.log("Leagues", this.state.leagues);
    const contextValue = {
      players: this.state.players,
      setPlayers: this.setPlayers,
      addPlayers: this.addPlayer,
      updatePlayer: this.updatePlayer,
      deletePlayer: this.deletePlayer,
      clubs: this.state.clubs,
      setClubs: this.setClubs,
      addClubs: this.addClub,
      coaches: this.state.coaches,
      setCoaches: this.setCoaches,
      addCoaches: this.addCoach,
      playerStats: this.state.playerStats,
      setPlayerStats: this.setPlayerStats,
      addPlayerStats: this.addPlayerStat,
      leagues: this.state.leagues,
      setLeagues: this.setLeagues,
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
                <Landing players={this.state.playersInfo} {...routeProps} />
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
                      player.player_id === Number(routeProps.match.params.playerId)
                  )}
                  {...routeProps}
                />
              )}
            />

            {/* Add Player */}
            <Route
              exact
              path="/addplayer"
              component={(routeProps) => <AddPlayer {...routeProps} />}
            />

            {/* Update Player */}
            <Route
              exact
              path="/updateplayer/:player_id"
              component={(routeProps) => (
                <UpdatePlayer
                  player={this.state.players.find(
                    (player) =>
                      player.player_id === Number(routeProps.match.params.player_id)
                  )}
                  {...routeProps}
                />
              )}
            />

            {/* Clubs List */}
            <Route
              exact
              path="/clubs"
              component={(routeProps) => <ClubsList {...routeProps} />}
            />

            {/* Club Page */}
            <Route
              exact
              path="/clubs/:clubId"
              component={(routeProps) => (
                <Club
                  club={this.state.clubs.find(
                    (club) =>
                      club.club_id === Number(routeProps.match.params.club_id)
                  )}
                  {...routeProps}
                />
              )}
            />

            {/* Add Club */}
            <Route
              exact
              path="/addclub"
              component={(routeProps) => (
                <AddClub
                  leagues={this.state.leagues.map((league) => ({
                    league_id: league.league_id,
                    league_name: league.league_name,
                  }))}
                  {...routeProps}
                />
              )}
            />

            {/* Leagues List */}
            <Route
              exact
              path="/leagues"
              component={(routeProps) => <LeaguesList {...routeProps} />}
            />

            {/* Coach List */}
            <Route
              exact
              path="/coaches"
              component={(routeProps) => (
                <CoachesList coaches={this.state.coaches} {...routeProps} />
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
                      coach.coach_id === Number(routeProps.match.params.coach_id)
                  )}
                  {...routeProps}
                />
              )}
            />
            {/* Add Coach */}
            <Route
              exact
              path="/addcoach"
              component={(routeProps) => (
                <AddCoach
                  clubs={this.state.clubs.map((club) => ({
                    club_id: club.club_id,
                    club_name: club.club_name,
                  }))}
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
