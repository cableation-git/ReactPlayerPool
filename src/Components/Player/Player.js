import React, { Component } from "react";
import "./Player.css";
import PlayerStats from "./PlayerStats";
import PlayerCoaches from "./PlayerCoaches";
import PlayerClubs from "./PlayerClubs";
//import Store from "../../Store";
import { NavLink } from 'react-router-dom';

export default class Player extends Component {
  render() {
    const { player, clubs, coaches, playerStats } = this.props;
    console.log("in player.js", this.props);

    // const playerCoachItems = (
    //   <PlayerCoaches
    //     playerCoach={coaches.find(
    //       (playerCoach) => playerCoach.coachId === player.currentCoachId
    //     )}
    //   />
    // );

    // const playerClubItems = (
    //   <PlayerClubs
    //     playerClub={clubs.find(
    //       (playerClub) => playerClub.clubId === player.currentClubId
    //     )}
    //   />
    // );

    return (
      <React.Fragment>
        <div>
        <NavLink
          className={'button'}
          to={`/updateplayer/${this.props.player.player_id}`}
        >
          Update {this.props.player.first_name}
        </NavLink>
      </div>
        <div className="Player">
          <div className="Player__name">
            {this.props.player.first_name} {this.props.player.last_name}
            <br />
            <span className="Player__infoText">
              Currently Playing for ClubID - {this.props.player.current_club}
            </span>
          </div>
          <div className="Player__img">
            <img
              src={this.props.player.image_url}
              alt={this.props.player.first_name}
              //style={{width: 40 + 'px', height: 40 + 'px'}}
            />
          </div>
          <div className="Player__profile">
            Born - {this.props.player.birth_date}
            <br />
            Height - {this.props.player.height}
            <br />
            City - {this.props.player.birth_city}
            <br />
            State - {this.props.player.birth_state}
            <br />
            Country - {this.props.player.birth_country}
            <br />
          </div>

          <div className="Player__statsContainer">
            <div className="Player__statsContainer-header">
              Rolled-Up Player Stats
            </div>
             <div className="PlayerStats__header">
              <div className="PlayerStats__year">Year</div>
              <div className="PlayerStats__club">Club</div>
              <div className="PlayerStats__gamesPlayed">GP</div>
              <div className="PlayerStats__gamesStarted">GS</div>
              <div className="PlayerStats__goals">G</div>
              <div className="PlayerStats__minutes">Min</div>
              <div className="PlayerStats__assists">A</div>
              <div className="PlayerStats__shots">SHTS</div>
              <div className="PlayerStats__sog">SOG</div>
              <div className="PlayerStats__foulsCommitted">FC</div>
              <div className="PlayerStats__offsides">OFF</div>
              <div className="PlayerStats__yellows">Y</div>
              <div className="PlayerStats__reds">R</div>
            </div>
            {/* <div className="PlayerStats__row">
              <PlayerStats playerStat={playerStats} />
            </div> */}
          </div> 

          <div className="Player__natStatsContainer">
            Rolled Up National Team Stats
          </div>

           <div className="Player__clubsContainer">
            <div className="Player__clubsContainer-header">
              Clubs During Career
            </div>
             <div className="PlayerClubs__header">
              <div className="PlayerClubs__name">Name</div>
              <div className="PlayerClubs__league">League</div>
              <div className="PlayerClubs__division">Division</div>
              <div className="PlayerClubs__city">City</div>
              <div className="PlayerClubs__country">Country</div>
              <div className="PlayerClubs__inception">Inception</div>
            </div>
            {/* <div className="PlayerClubs__row">{playerClubItems}</div>  */}
          </div> 

           <div className="Player__coachesContainer">
            <div className="Player__coachesContainer-header">
              Coaches During Career
            </div>
            <div className="PlayerCoaches__header">
              <div className="PlayerCoaches__firstName">First</div>
              <div className="PlayerCoaches__lastName">Last</div>
              <div className="PlayerCoaches__birthDate">BirthDate</div>
              <div className="PlayerCoaches__birthCountry">Born In</div>
              <div className="PlayerCoaches__currentClub">Club</div>
              <div className="PlayerCoaches__yearsAtClub">Years at Club</div>
            </div> 
            {/* <div className="PlayerCoaches__row">{playerCoachItems}</div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
