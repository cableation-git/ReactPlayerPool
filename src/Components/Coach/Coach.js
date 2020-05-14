import React, { Component } from 'react';

export default class Coach extends Component {
   
    render() {
        console.log('in coach.js', this.props.coaches)
        return (
            <div>{this.props.coach.lastName}</div>
        )
    }
}