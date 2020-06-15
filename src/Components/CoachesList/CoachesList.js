import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import PlayerPoolContext from "../../PlayerPoolContext";
import CoachesListGrid from "./CoachesListGrid";
import "./CoachesListGrid.css";
import CoachesApiService from "../../Services/coaches_api_service";

export default class CoachesList extends Component {
  static contextType = PlayerPoolContext;

  constructor(props) {
    super(props);
    this.state = {
      coaches: [],
      error: "",
    };
  }

  setCoaches = (coaches) => {
    this.setState({
      coaches,
    });
  };

  addCoach = (coach) => {
    this.setState({
      coaches: [...this.state.coaches, coach],
    });
  };

  setError = (error) => {
    this.setState({ error: error });
  };

  componentDidMount() {
    console.log("Coaches component did mount");

    CoachesApiService.getAllCoaches()
      .then((data) => {
        console.log('coaches data', data)
        this.setCoaches(data);
      })
      .catch(this.setError);
  }
  
  render() {
    console.log("coachesStateDate",this.state)

    const coachItems = this.state.coaches.map((coach) => (
      <div className="CoachesListGrid__coach-details" key={coach.coach_id}>
        <CoachesListGrid coach={coach} />
      </div>
    ));

    return (
      <section>
      <div>
        <NavLink to='/addCoach'>
          <div className="button">
            Add Coach
          </div>
        </NavLink>
      </div>
      <div className="CoachesListGrid">
          <div className="CoachesListGrid__header">
            <div className="CoachesListGrid__coachName">Coach</div>
            <div className="CoachesListGrid__birthDate">BirthDate</div>
            <div className="CoachesListGrid__birthPlace">BirthPlace</div>
            <div className="CoachesListGrid__currentClub">Current Club</div>
            <div className="CoachesListGrid__yearHired">Year Hired</div>
            <div className="CoachesListGrid__coachImage">Coach</div>
          </div>
          <div className="CoachesListGrid__coach-details">{coachItems}</div>
        </div>
      </section>  
    );
  }
}
