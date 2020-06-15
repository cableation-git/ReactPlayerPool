import React, { Component } from "react";
import PlayerPoolContext from "../../../PlayerPoolContext";
import ValidateError from '../../ValidateError/ValidateError';
import config from "../../../config";
import { confirmAlert } from 'react-confirm-alert';
import PropTypes from 'prop-types';
import "./AddPlayer.css";
import "../../Shared/Shared.css";
import 'react-confirm-alert/src/react-confirm-alert.css';

const Required = () => (
  <span className="form__required">*</span>
);

export default class AddPlayer extends Component {
  static contextType = PlayerPoolContext;  

  constructor(props) {
    super(props);
    console.log("updatePlayerProps", props)
    this.state = {
      deleteError: {
        value: false,
        message: ''
      },
      player_id: {
        value: this.props.player.player_id || '',
        touched: false,
      },
      first_name: {
        value: this.props.player.first_name || '',
        touched: false,
      },
      last_name: {
        value: this.props.player.last_name || '',
        touched: false,
      },
      birth_date: {
        value: this.props.player.birth_date || '',
        touched: false,
      },
      current_number: {
        value: this.props.player.current_number || '',
        touched: false,
      },
      height: {
        value: this.props.player.height || '',
        touched: false,
      },
      birth_city: {
        value: this.props.player.birth_city || '',
        touched: false,
      },
      birth_state: {
        value: this.props.player.birth_state || '',
        touched: false,
      },
      birth_country: {
        value: this.props.player.birth_country || '',
        touched: false,
      },
      image_url: {
        value: this.props.player.image_url || '',
        touched: false,
      },
      last_updated: {
        value: this.props.player.last_updated || '',
        touched: false,
      },
    }
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

  updateCurrentNumber(current_number) {
    this.setState({
      current_number: {
        value: current_number,
        touched: true,
      },
    });
  }

  updateHeight(height) {
    this.setState({
      height: {
        value: height,
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

  updateLastUpdated(last_updated) {
    this.setState({
      last_updated: {
        value: last_updated,
        touched: true
      }
    })
  }

  /************************/
  /* Handle Delete Button */
  /************************/
  handleDelete = e => {
    e.preventDefault();

    const { player_id } = this.props.match.params
    console.log("player___id", player_id)

    fetch(config.API_ENDPOINT_PLAYERS + `/${player_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(error => {
            throw error
          })
        }
        this.props.history.push('/players')
        this.context.deletePlayer(player_id);
      })
      .catch(error => {
        console.error(error)
      })
  }

  /****************************************************************/
  /* Update Player to Database, update state, return to list of players */
  /****************************************************************/
  handleSubmit = e => {
    e.preventDefault();

    this.setState({ error: null })
    const { player_id } = this.props.match.params

    const updatedPlayer = {
      player_id: this.state.player_id.value,
      first_name: this.state.first_name.value,
      last_name: this.state.last_name.value,
      birth_date: this.state.birth_date.value,
      current_number: this.state.current_number.value,
      height: this.state.height.value,
      birth_city: this.state.birth_city.value,
      birth_state: this.state.birth_state.value,
      birth_country: this.state.birth_country.value,
      image_url: this.state.image_url.value,
      last_updated: new Date(),
    };

    fetch(config.API_ENDPOINT_PLAYERS + `/${player_id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedPlayer),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(error => Promise.reject(error))
      })
      .then(() => {
        this.context.updatePlayer(updatedPlayer);
        this.props.history.push(`/players/${this.props.player.player_id}`);
      })
      .catch(error => {
        console.error(error)
      })
  };

  /************************/
  /* Handle Cancel button */
  /************************/
  handleClickCancel = () => {
    console.log('cancel', this.props)
    this.props.history.push(`/players/${this.props.player.player_id}`)
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

  validateCurrentNumber() {
    const currentNumber = this.state.current_number.value.trim();

    if (!Number(currentNumber)) {
      return { error: true, message: "Current Number must be numeric" };
    }

    return { error: false, message: "" };
  }

  validateHeight() {
    const height = this.state.height.value.trim();

    if (height.length === 0) {
      return { error: true, message: "Height is Required" };
    // } else if (!/\D/.test(height)) {
    //   return { error: true, message: "Height must be numeric" };
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

  validateImageURL() {
    const imageURL = this.state.image_url.value.trim();

    // if (birthCountry.length === 0) {
    //   return { error: true, message: "Birth Country is Required" };
    // } else if (birthCountry.length !== 2) {
    //   return {
    //     error: true,
    //     message: "Birth Country must be 2 character Country Code",
    //   };
    // }

    return { error: false, message: "" };
  }

  /******************/
  /* Confirm Delete */
  /******************/
  confirmDelete = (e) => {
    confirmAlert({
      title: 'Are you sure...',
      message: '...You wish to delete this player?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.handleDelete(e)
        },
        {
          label: 'No',
          onClick: () => ''
        }
      ]
    });
  };

  render() {
    let playerButtonDisabled = true;

    const FirstNameError = this.validateFirstName();
    const LastNameError = this.validateLastName();
    const BirthDateError = this.validateBirthDate();
    const HeightError = this.validateHeight();
    const CurrentNumberError = this.validateCurrentNumber();
    const BirthCityError = this.validateBirthCity();
    //const BirthStateError = this.validateBirthState();
    const BirthCountryError = this.validateBirthCountry();
    const ImageURLError = this.validateImageURL();
    
    if (
      !FirstNameError.error &&
      !LastNameError.error &&
      !BirthDateError.error &&
      !HeightError.error && 
      !CurrentNumberError.error &&
      !BirthCityError.error && 
      // !BirthStateError.error &&
      !BirthCountryError.error &&
      !ImageURLError.error 
    ) {
      playerButtonDisabled = false;
    }

    return (
      <section className='section-page'>
          <h1>Update Player</h1>
          <form 
              className="Player__form"
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
                  value={this.state.first_name.value || '' }
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
                  value={this.state.last_name.value || '' }
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
                  value={this.state.birth_date.value || '' }
                  onChange={e => this.updateBirthDate(e.target.value)}
                  required
                />
              </li>
              <li>{this.state.birth_date.touched && <ValidateError message={BirthDateError.message} />}</li>
  
              <li>
                <label htmlFor="current_number">
                  Current Number:
                  <Required />
                </label>
                <input
                  type="text"
                  name="current_number"
                  id="current_number"
                  placeholder="Current Number"
                  maxLength="40"
                  value={this.state.current_number.value || '' }
                  onChange={e => this.updateCurrentNumber(e.target.value)}
                  required
                />
              </li>
              <li>{this.state.current_number.touched && <ValidateError message={CurrentNumberError.message} />}</li>
  
              <li>
                <label htmlFor="height">
                  Height:
                  <Required />
                </label>
                <input
                  type="text"
                  name="height"
                  id="height"
                  placeholder="Height"
                  maxLength="40"
                  value={this.state.height.value || '' }
                  onChange={e => this.updateHeight(e.target.value)}
                  required
                />
              </li>
              <li>{this.state.height.touched && <ValidateError message={HeightError.message} />}</li>
  
              <li>
                <label htmlFor="birth_city">
                  City of Birth:
                  <Required />
                </label>
                <input
                  type="text"
                  name="birth_city"
                  id="birth_city"
                  placeholder="Birth City"
                  maxLength="40"
                  value={this.state.birth_city.value || '' }
                  onChange={e => this.updateBirthCity(e.target.value)}
                  required
                />
              </li>
              <li>{this.state.birth_city.touched && <ValidateError message={BirthCityError.message} />}</li>
  
              <li>
                <label htmlFor="birth_state">
                  State of Birth:
                  {/* <Required /> */}
                </label>
                <input
                  type="text"
                  name="birth_state"
                  id="birth_state"
                  placeholder="Birth State"
                  maxLength="40"
                  value={this.state.birth_state.value || '' }
                  onChange={e => this.updateBirthState(e.target.value)}
                  // required
                />
              </li>
              {/* <li>{this.state.birth_state.touched && <ValidateError message={BirthStateError.message} />}</li> */}
  
              <li>
                <label htmlFor="birth_country">
                  Country ID of Birth:
                  <Required />
                </label>
                <input
                  type="text"
                  name="birth_country"
                  id="birth_country"
                  placeholder="Birth Country ID"
                  maxLength="40"
                  value={this.state.birth_country.value || '' }
                  onChange={e => this.updateBirthCountry(e.target.value)}
                  required
                />
              </li>
              <li>{this.state.birth_country.touched && <ValidateError message={BirthCountryError.message} />}</li>
  
              <li>
                <label htmlFor="image_url">
                  Player Image:
                  {/* <Required /> */}
                </label>
                <input
                  type="text"
                  name="image_url"
                  id="image_url"
                  placeholder="Player Image"
                  maxLength="40"
                  value={this.state.image_url.value || '' }
                  onChange={e => this.updateImageURL(e.target.value)}
                  // required
                />
              </li>
              <li>{this.state.image_url.touched && <ValidateError message={ImageURLError.message} />}</li>
  
              <li className="form__button-group">
              <button type="button" onClick={this.handleClickCancel}>
                Cancel
              </button>
              {' '}
              <button
                type="submit"
                disabled={playerButtonDisabled}
              >
                Save
              </button>
              {' '}
              <button 
                onClick={ e => this.confirmDelete(e) }
              >
                Delete
              </button>  
            </li>
            </ul>   
          </form>    
      </section>
      )
    }  

}
// UpdatePlayer.defaultProps = {
//   player: {},  
// }

// UpdatePlayer.propTypes = {
//   player: PropTypes.object.isRequired,
// }  