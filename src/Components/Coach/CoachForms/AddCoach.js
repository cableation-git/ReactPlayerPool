import React, { Component } from "react";
import PlayerPoolContext from "../../../PlayerPoolContext";
import ValidateError from '../../ValidateError/ValidateError';
import config from "../../../config";
import "./AddCoach.css";
import "../../Shared/Shared.css";
const { isWebUri } = require("valid-url");

const Required = () => (
    <span className='form__required'>*</span>
  );

export default class AddCoach extends Component {
  static contextType = PlayerPoolContext;

  constructor(props) {
    super(props);
    this.state = {
      first_name: {
        value: "",
        touched: false,
      },
      last_name: {
        value: "",
        touched: false,
      },
      birth_date: {
        value: "",
        touched: false,
      },
      birth_city: {
        value: "",
        touched: false,
      },
      birth_state: {
        value: "",
        touched: false,
      },
      birth_country: {
        value: "",
        touched: false,
      },
      image_url: {
        value: "",
        touched: false,
      },
      current_club_id: {
        value: "",
        touched: false,
      },
      year_hired: {
        value: "",
        touched: false,
      }
    };
  }

  /*********************/
  /* Update Form State */
  /*********************/
  updateFirstName(first_name) {
    this.setState({
      first_name: {
        value: first_name,
        touched: true,
      },
    });
  }

  updateLastName(last_name) {
    this.setState({
      last_name: {
        value: last_name,
        touched: true,
      },
    });
  }

  updateBirthDate(birth_date) {
    this.setState({
      birth_date: {
        value: birth_date,
        touched: true,
      },
    });
  }

  updateBirthCity(birth_city) {
    this.setState({
      birth_city: {
        value: birth_city,
        touched: true,
      },
    });
  }

  updateBirthState(birth_state) {
    this.setState({
      birth_state: {
        value: birth_state,
        touched: true,
      },
    });
  }

  updateBirthCountry(birth_country) {
    this.setState({
      birth_country: {
        value: birth_country,
        touched: true,
      },
    });
  }

  updateImageURL(image_url) {
    this.setState({
      image_url: {
        value: image_url,
        touched: true,
      },
    });
  }

  updateCurrentClubID(current_club_id) {
    this.setState({
      current_club_id: {
        value: current_club_id,
        touched: true,
      },
    });
  }

  updateYearHired(year_hired) {
    this.setState({
      year_hired: {
        value: year_hired,
        touched: true,
      },
    });
  }

    /*****************************************************************************/
  /* Add Coach to Database, update state, return to list of coaches */
  /*****************************************************************************/
  handleSubmit = (e) => {
    e.preventDefault();

    const coach = {
      first_name: this.state.first_name.value,
      last_name: this.state.last_name.value,
      birth_date: this.state.birth_date.value,
      birth_city: this.state.birth_city.value,
      birth_state: this.state.birth_state.value,
      birth_country: this.state.birth_country.value,
      image_url: this.state.image_url.value,
      current_club_id: this.state.current_club_id.value,
      year_hired: this.state.year_hired.value
    };

    //update database, state, go back to coaches list
    fetch(config.API_ENDPOINT_COACHES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coach),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        this.context.addCoaches(data);
        this.props.history.push("/coaches");
      })
      .catch((error) => this.setState({ error }));
  };

  /*****************/
  /* Handle Cancel */
  /*****************/
    handleClickCancel = () => {
      this.props.history.push('/coaches')
    };

  /************************/
  /* Validate Form Fields */
  /************************/
  validateFirstName() {
    const firstName = this.state.first_name.value.trim();

    if (firstName.length === 0) {
      return { error: true, message: "First Name is Required" };
    } else if (firstName.length < 3 || firstName.length > 40) {
      return {
        error: true,
        message: "First Name must be between 3 and 40 characters",
      };
    }

    return { error: false, message: "" };
  }

  validateLastName() {
    const lastName = this.state.last_name.value.trim();

    if (lastName.length === 0) {
      return { error: true, message: "Last Name is Required" };
    } else if (lastName.length < 3 || lastName.length > 40) {
      return {
        error: true,
        message: "Last Name must be between 3 and 40 characters",
      };
    }

    return { error: false, message: "" };
  }

  validateBirthDate() {
    const birthDate = this.state.birth_date.value.trim();

    if (birthDate.length === 0) {
      return { error: true, message: "Birth Date is Required" };
    } else if (birthDate.length < 3 || birthDate.length > 40) {
      return {
        error: true,
        message: "Birth Date must be in a date format mm-dd-yyyy",
      };
    }

    return { error: false, message: "" };
  }

  validateBirthCity() {
    const birthCity = this.state.birth_city.value.trim();
    if (birthCity.length === 0) {
      return { error: true, message: "Birth City is Required" };
    } else if (birthCity.length < 3 || birthCity.length > 40) {
      return {
        error: true,
        message: "Birth City must be between 3 and 40 characters",
      };
    }
    return { error: false, message: "" };
  }

  validateBirthState() {
    const birthState = this.state.birth_state.value.trim();

    if (birthState.length === 0) {
      return { error: true, message: "Birth State is Required" };
    } else if (birthState.length < 3 || birthState.length > 40) {
      return {
        error: true,
        message: "Birth State must be between 3 and 40 characters",
      };
    }
    return { error: false, message: "" };
  }

  validateBirthCountry() {
    const birthCountry = this.state.birth_country.value.trim();

    if (birthCountry.length === 0) {
      return { error: true, message: "Birth Country is Required" };
    } else if (birthCountry.length !== 2) {
      return {
        error: true,
        message: "Birth Country must be 2 character Country Code",
      };
    }

    return { error: false, message: "" };
  }  

  validateCurrentClubID() {
    const currentClubID = this.state.current_club_id.value.trim();

    if (currentClubID.length === 0) {
      return { error: true, message: "Current Club ID is Required" };
    } else if (currentClubID.length !== 2) {
      return {
        error: true,
        message: "Club ID must be 2 digits",
      };
    }

    return { error: false, message: "" };
  }

  validateYearHired() {
    const yearHired = this.state.year_hired.value.trim();

    if (yearHired.length === 0) {
      return { error: true, message: "Year Hired is Required" };
    } else if (yearHired.length !== 4) {
      return {
        error: true,
        message: "Year Hired must be 4 digits",
      };
    }

    return { error: false, message: "" };
  }

  render() {
    console.log("props",this.props)
    let applicationButtonDisabled = true;

    const FirstNameError = this.validateFirstName();
    const LastNameError = this.validateLastName();
    const BirthDateError = this.validateBirthDate();
    const BirthCityError = this.validateBirthCity();
    const BirthStateError = this.validateBirthState();
    const BirthCountryError = this.validateBirthCountry();
    const CurrentClubIDError = this.validateCurrentClubID();
    const YearHiredError = this.validateYearHired();
    
    if (
      !FirstNameError.error &&
      !LastNameError.error &&
      !BirthDateError.error &&
      !BirthCityError.error &&
      !BirthStateError.error && 
      !BirthCountryError.error &&
      !CurrentClubIDError.error &&
      !YearHiredError.error 
    ) {
      applicationButtonDisabled = false;
    }
    const clubOptions = this.props.clubs.map((club, i) =>
      <option value={club.club_id} key={i}>
        {club.club_name}
      </option>
    );
    clubOptions.sort();

    return (
    <section className='section-page'>
        <h1>Add Coach</h1>
        <form 
            className="AddCoach__form"
            onSubmit={this.handleSubmit}
        > 
        <div className="required">* Required Fields</div>
          
          <ul className="flex-outer">

            <li>
              <label htmlFor="first_name">
                First Name:
                <Required />
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First Name"
                maxLength="40"
                onChange={e => this.updateFirstName(e.target.value)}
                required
              />
            </li>
            <li>{this.state.first_name.touched && <ValidateError message={FirstNameError.message} />}</li>

            <li>
              <label htmlFor="last_name">
                Last Name:
                <Required />
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
                maxLength="40"
                onChange={e => this.updateLastName(e.target.value)}
                required
              />
            </li>
            <li>{this.state.last_name.touched && <ValidateError message={LastNameError.message} />}</li>

            <li>
              <label htmlFor="birth_date">
                Birth Date:
                <Required />
              </label>
              <input
                type="text"
                name="birth_date"
                id="birth_date"
                placeholder="Birth Date"
                maxLength="40"
                onChange={e => this.updateBirthDate(e.target.value)}
                required
              />
            </li>
            <li>{this.state.birth_date.touched && <ValidateError message={BirthDateError.message} />}</li>

            <li>
              <label htmlFor="birth_city">
                Birth City:
                <Required />
              </label>
              <input
                type="text"
                name="birth_city"
                id="birth_city"
                placeholder="Birth City"
                maxLength="40"
                onChange={e => this.updateBirthCity(e.target.value)}
                required
              />
            </li>
            <li>{this.state.birth_city.touched && <ValidateError message={BirthCityError.message} />}</li>

            <li>
              <label htmlFor="birth_state">
                Birth State:
                <Required />
              </label>
              <input
                type="text"
                name="birth_state"
                id="birth_state"
                placeholder="Birth State"
                maxLength="40"
                onChange={e => this.updateBirthState(e.target.value)}
                required
              />
            </li>
            <li>{this.state.birth_state.touched && <ValidateError message={BirthStateError.message} />}</li>

            <li>
              <label htmlFor="birth_country">
                Birth Country:
                <Required />
              </label>
              <input
                type="text"
                name="birth_country"
                id="birth_country"
                placeholder="Birth Country"
                maxLength="40"
                onChange={e => this.updateBirthCountry(e.target.value)}
                required
              />
            </li>
            <li>{this.state.birth_country.touched && <ValidateError message={BirthCountryError.message} />}</li>

            <li>
              <label htmlFor="image_url">
                Image URL:
                {/* <Required /> */}
              </label>
              <input
                type="text"
                name="image_url"
                id="image_url"
                placeholder="Image URL"
                maxLength="40"
                onChange={e => this.updateImageURL(e.target.value)}
                // required
              />
            </li>
            {/* <li>{this.state.image_url.touched && <ValidateError message={ImageURLError.message} />}</li> */}
            
            <li>
              <label htmlFor="current_club_id">
               Current Club ID:
                <Required />
              </label>
              {/* <input
                type="text"
                name="current_club_id"
                id="current_club_id"
                placeholder="Current Club ID"
                maxLength="40"
                onChange={e => this.updateClubID(e.target.value)}
                required
              /> */}
              <select
                id='current_club_id'
                name='current_club_id'
                className='formSelect'
                aria-label="Select a club"
                aria-required="true"
                onChange={e => this.updateCurrentClubID(e.target.value)}
              >
                <option value=''>Club... </option>
                {clubOptions}
              </select>
            </li>
            <li>{this.state.current_club_id.touched && <ValidateError message={CurrentClubIDError.message} />}</li>

            <li>
              <label htmlFor="year_hired">
                Year Hired:
                <Required /> 
              </label>
              <input
                type="text"
                name="year_hired"
                id="year_hired"
                placeholder="Year Hired"
                maxLength="40"
                onChange={e => this.updateYearHired(e.target.value)}
                 required
              />
            </li>
            <li>{this.state.year_hired.touched && <ValidateError message={YearHiredError.message} />}</li>


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
