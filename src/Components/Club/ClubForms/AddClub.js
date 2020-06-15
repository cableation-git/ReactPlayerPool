import React, { Component } from "react";
import PlayerPoolContext from "../../../PlayerPoolContext";
import ValidateError from '../../ValidateError/ValidateError';
import config from "../../../config";
import "./AddClub.css";
import "../../Shared/Shared.css";
const { isWebUri } = require("valid-url");

const Required = () => (
    <span className='form__required'>*</span>
  );

export default class AddClub extends Component {
  static contextType = PlayerPoolContext;

  constructor(props) {
    super(props);
    this.state = {
      club_name: {
        value: "",
        touched: false,
      },
      icon_url: {
        value: "",
        touched: false,
      },
      league_id: {
        value: "",
        touched: false,
      },
      stadium_name: {
        value: "",
        touched: false,
      },
      city: {
        value: "",
        touched: false,
      },
      country: {
        value: "",
        touched: false,
      },
      inception: {
        value: "",
        touched: false,
      }
    };
  }

  /*********************/
  /* Update Form State */
  /*********************/
  updateClubName(club_name) {
    this.setState({
      club_name: {
        value: club_name,
        touched: true,
      },
    });
  }

  updateIconURL(icon_url) {
    this.setState({
      icon_url: {
        value: icon_url,
        touched: true,
      },
    });
  }

  updateLeagueID(league_id) {
    this.setState({
      league_id: {
        value: league_id,
        touched: true,
      },
    });
  }

  updateStadiumName(stadium_name) {
    this.setState({
      stadium_name: {
        value: stadium_name,
        touched: true,
      },
    });
  }

  updateCity(city) {
    this.setState({
      city: {
        value: city,
        touched: true,
      },
    });
  }

  updateCountry(country) {
    this.setState({
      country: {
        value: country,
        touched: true,
      },
    });
  }

  updateInception(inception) {
    this.setState({
      inception: {
        value: inception,
        touched: true,
      },
    });
  }

    /*****************************************************************************/
  /* Add Club to Database, update state, return to list of clubs */
  /*****************************************************************************/
  handleSubmit = (e) => {
    e.preventDefault();

    const club = {
      club_name: this.state.club_name.value,
      icon_url: this.state.icon_url.value,
      league_id: this.state.league_id.value,
      stadium_name: this.state.stadium_name.value,
      city: this.state.city.value,
      country: this.state.country.value,
      inception: this.state.inception.value,
    };


    //update database, state, go back to clubs list
    fetch(config.API_ENDPOINT_CLUBS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(club),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        this.context.addClubs(data);
        this.props.history.push("/clubs");
      })
      .catch((error) => this.setState({ error }));
  };

  /*****************/
  /* Handle Cancel */
  /*****************/
    handleClickCancel = () => {
      this.props.history.push('/clubs')
    };

  /************************/
  /* Validate Form Fields */
  /************************/
  validateClubName() {
    const clubName = this.state.club_name.value.trim();

    if (clubName.length === 0) {
      return { error: true, message: "Club Name is Required" };
    } else if (clubName.length < 3 || clubName.length > 40) {
      return {
        error: true,
        message: "Club Name must be between 3 and 40 characters",
      };
    }

    return { error: false, message: "" };
  }

  validateIconURL() {
    const iconURL = this.state.icon_url.value.trim();

    // if (iconURL.length === 0) {
    //   return { error: true, message: "Icon URL is Required" };
    // } else if (iconURL.length < 3 || iconURL.length > 40) {
    //   return {
    //     error: true,
    //     message: "Icon URL must be between 3 and 40 characters",
    //   };
    // }

    return { error: false, message: "" };
  }

  validateLeagueID() {
    const leagueID = this.state.league_id.value.trim();

    if (leagueID.length === 0) {
      return { error: true, message: "League ID is Required" };
    } else if (!Number(leagueID)) {
      return { error: true, message: "League ID must be numeric" };    
    }
    return { error: false, message: "" };
  }

  validateStadiumName() {
    const stadiumName = this.state.stadium_name.value.trim();
    if (stadiumName.length === 0) {
      return { error: true, message: "Stadium Name is Required" };
    } else if (stadiumName.length < 3 || stadiumName.length > 40) {
      return {
        error: true,
        message: "Stadium Name must be between 3 and 40 characters",
      };
    }
    return { error: false, message: "" };
  }

  validateCity() {
    const city = this.state.city.value.trim();
    if (city.length === 0) {
      return { error: true, message: "City is Required" };
    } else if (city.length < 3 || city.length > 40) {
      return {
        error: true,
        message: "City must be between 3 and 40 characters",
      };
    }
    return { error: false, message: "" };
  }

  validateCountry() {
    const country = this.state.country.value.trim();

    if (country.length === 0) {
      return { error: true, message: "Country is Required" };
    } else if (country.length !== 2) {
      return {
        error: true,
        message: "Country must be 2 character Country Code",
      };
    }

    return { error: false, message: "" };
  }

  validateInception() {
    const inception = this.state.inception.value.trim();

    if (inception.length === 0) {
      return { error: true, message: "Inception is Required" };
    } else if (inception.length !== 4) {
      return {
        error: true,
        message: "Inception must be 4 digit Year",
      };
    }

    return { error: false, message: "" };
  }

  render() {
    console.log("props",this.props)
    let applicationButtonDisabled = true;

    const ClubNameError = this.validateClubName();
    const IconURLError = this.validateIconURL();
    const LeagueIDError = this.validateLeagueID();
    const StadiumNameError = this.validateStadiumName();
    const CityError = this.validateCity();
    const CountryError = this.validateCountry();
    const InceptionError = this.validateInception();
    
    if (
      !ClubNameError.error &&
      !LeagueIDError.error &&
      !IconURLError.error &&
      !StadiumNameError.error && 
      !CityError.error &&
      !CountryError.error &&
      !InceptionError.error 
    ) {
      applicationButtonDisabled = false;
    }
    const leagueOptions = this.props.leagues.map((league, i) =>
      <option value={league.league_id} key={i}>
        {league.league_name}
      </option>
    );
    leagueOptions.sort();

    return (
    <section className='section-page'>
        <h1>Add Club</h1>
        <form 
            className="AddClub__form"
            onSubmit={this.handleSubmit}
        > 
        <div className="required">* Required Fields</div>
          
          <ul className="flex-outer">

            <li>
              <label htmlFor="club_name">
                Club Name:
                <Required />
              </label>
              <input
                type="text"
                name="club_name"
                id="club_name"
                placeholder="Club Name"
                maxLength="40"
                onChange={e => this.updateClubName(e.target.value)}
                required
              />
            </li>
            <li>{this.state.club_name.touched && <ValidateError message={ClubNameError.message} />}</li>

            <li>
              <label htmlFor="icon_url">
                Icon URL:
                {/* <Required /> */}
              </label>
              <input
                type="text"
                name="icon_url"
                id="icon_url"
                placeholder="Icon URL"
                maxLength="40"
                onChange={e => this.updateIconURL(e.target.value)}
                // required
              />
            </li>
            {/* <li>{this.state.icon_url.touched && <ValidateError message={IconURLError.message} />}</li> */}
            
            <li>
              <label htmlFor="league_id">
                League ID:
                <Required />
              </label>
              {/* <input
                type="text"
                name="league_id"
                id="league_id"
                placeholder="League ID"
                maxLength="40"
                onChange={e => this.updateLeagueID(e.target.value)}
                required
              /> */}
              <select
                id='league_id'
                name='league_id'
                className='formSelect'
                aria-label="Select a league"
                aria-required="true"
                onChange={e => this.updateLeagueID(e.target.value)}
              >
                <option value=''>League... </option>
                {leagueOptions}
              </select>
            </li>
            <li>{this.state.league_id.touched && <ValidateError message={LeagueIDError.message} />}</li>

            <li>
              <label htmlFor="stadium_name">
                Stadium Name:
                <Required />
              </label>
              <input
                type="text"
                name="stadium_name"
                id="stadium_name"
                placeholder="Stadium Name"
                maxLength="40"
                onChange={e => this.updateStadiumName(e.target.value)}
                required
              />
            </li>
            <li>{this.state.stadium_name.touched && <ValidateError message={StadiumNameError.message} />}</li>

            <li>
              <label htmlFor="city">
                City:
                <Required />
              </label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                maxLength="40"
                onChange={e => this.updateCity(e.target.value)}
                required
              />
            </li>
            <li>{this.state.city.touched && <ValidateError message={CityError.message} />}</li>

            <li>
              <label htmlFor="country">
                Country ID :
                <Required />
              </label>
              <input
                type="text"
                name="country"
                id="country"
                placeholder="Country ID"
                maxLength="40"
                onChange={e => this.updateCountry(e.target.value)}
                required
              />
            </li>
            <li>{this.state.country.touched && <ValidateError message={CountryError.message} />}</li>

            <li>
              <label htmlFor="inception">
                Club Inception:
                <Required /> 
              </label>
              <input
                type="text"
                name="inception"
                id="inception"
                placeholder="Inception"
                maxLength="40"
                onChange={e => this.updateInception(e.target.value)}
                 required
              />
            </li>
            <li>{this.state.inception.touched && <ValidateError message={InceptionError.message} />}</li>


            <li className="form__button-group">
              <button type="button" onClick={this.handleClickCancel}>
                Cancel
              </button>
              <button
                type="submit"
                disabled={applicationButtonDisabled}
              >
                Save
              </button>
            </li>
          </ul>   
        </form>    
    </section>
    )
  }
}
