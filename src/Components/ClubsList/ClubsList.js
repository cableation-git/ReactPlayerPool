import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PlayerPoolContext from "../../PlayerPoolContext";
import "./ClubsListGrid.css";
import ClubsListGrid from "./ClubsListGrid";
import ClubsApiService from "../../Services/clubs_api_service";

export default class ClubsList extends Component {
  static contextType = PlayerPoolContext;

  constructor(props) {
    super(props);
    this.state = {
      clubs: [],
      error: "",
    };
  }

  setClubs = (clubs) => {
    this.setState({
      clubs,
    });
  };

  addClub = (club) => {
    this.setState({
      clubs: [...this.state.clubs, club],
    });
  };

  setError = (error) => {
    this.setState({ error: error });
  };

  componentDidMount() {
    console.log("clubs component did mount");

    ClubsApiService.getAllClubs()
      .then((data) => {
        console.log('clubs data', data)
        this.setClubs(data);
      })
      .catch(this.setError);
  }

  render() {

    const clubItems = this.state.clubs.map((club) => (
      <div className="ClubsListGrid__club-details" key={club.club_id}>
        <ClubsListGrid club={club} />
      </div>
    ));

    return (
      <section>
        <div>
          <NavLink to='/addClub'>
            <div className="button">
              Add Club
            </div>
          </NavLink>
        </div>
        <div className="ClubsListGrid">
          <div className="ClubsListGrid__header">
            <div className="ClubsListGrid__clubName">Club</div>
            <div className="ClubsListGrid__stadiumName">Stadium</div>
            <div className="ClubsListGrid__location">Located</div>
            <div className="ClubsListGrid__inception">Founded</div>
            <div className="ClubsListGrid__currentUSMNTPlayer">
              Current USMNT Player
            </div>
            <div className="ClubsListGrid__clubImage">Club Icon</div>
          </div>
          <div className="ClubsListGrid__clubs">{clubItems}</div>
        </div>
      </section>
    );
  }
}
