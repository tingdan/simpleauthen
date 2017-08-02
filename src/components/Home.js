import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Nav history={this.props.history}/>
                <div className="row" style={{textAlign: "center"}}>
                    <h4>
                        Simple Authentication App
                    </h4>
                    <img src="https://achievement-images.teamtreehouse.com/badges_Ruby_UserAuthentication_Stage1.png"/>
                <br /><br />
                    <h5> with React, ReactRouter, Node, Express, MongoDB</h5>
                </div>
            </div>


        )
    }
}
