import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth: false
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount(){
        if(sessionStorage.user) {
            this.setState({ auth: true})
        }
    }

    handleLogout() {
        sessionStorage.removeItem('user');
        this.setState({ auth: false});
        this.props.history.push('/logout')
    }

    render(){

        const authen = (
            <ul className="menu">
                <li>Hello, {sessionStorage.user}</li>
                <li onClick={() => this.handleLogout()}><a>Logout</a></li>
            </ul>
        );
        const unauthen = (
            <ul className="menu">
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        );
        return(
            <div className="top-bar">
              <div className="top-bar-left">
                <ul className="menu">
                  <Link to="/" className="menu-text">Authen</Link>
                </ul>
              </div>
              <div className="top-bar-right">
                { (sessionStorage.user ) ? authen : unauthen }
              </div>
    </div>
        )
    }
}

export default Nav;
