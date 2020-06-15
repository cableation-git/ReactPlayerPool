import React, { Component } from 'react';

export default class Club extends Component {
   
    render() {
        console.log('in club.js', this.props.clubs)
        return (
            <div>{this.props.club.club_name}</div>
        )
    }
}