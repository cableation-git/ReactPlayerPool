import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PlayerPoolContext from "../../PlayerPoolContext";
import "./LeaguesListGrid.css";
import LeaguesListGrid from "./LeaguesListGrid";
import LeaguesApiService from "../../Services/leagues_api_service";

export default class LeaguesList extends Component {
  static contextType = PlayerPoolContext;

  constructor(props) {
    super(props);
    this.state = {
      leagues: [],
      error: "",
    };
  }

  setLeagues = (leagues) => {
    this.setState({
      leagues,
    });
  };

  addLeague = (league) => {
    this.setState({
      leagues: [...this.state.leagues, league],
    });
  };

  setError = (error) => {
    this.setState({ error: error });
  };

  componentDidMount() {
    console.log("Leagues component did mount");

    LeaguesApiService.getAllLeagues()
      .then((data) => {
        console.log('leagues data', data)
        this.setLeagues(data);
      })
      .catch(this.setError);
  }

  render() {

    const leagueItems = this.state.leagues.map((league) => (
      <div className="LeaguesListGrid__league-details" key={league.league_id}>
        <LeaguesListGrid league={league} />
      </div>
    ));
  
    return (
      <section>
        <div className="LeaguesListGrid">
          <div className="LeaguesListGrid__header">
            <div className="LeaguesListGrid__leagueName">League</div>
            <div className="LeaguesListGrid__country">Country</div>
            <div className="LeaguesListGrid__inception">Founded</div>            
          </div>
          <div className="LeaguesListGrid__Leagues">{leagueItems}</div>
        </div>
      </section>
    );
  }
}
