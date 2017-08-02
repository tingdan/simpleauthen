import React, { Component } from 'react'

import { Link }from 'react-router-dom'



class Logout extends Component {

    redirect(){

        setTimeout(() => {

            this.props.history.push('/')
        }, 3000)
    }

    render() {

        this.redirect();
    return     (
        <div style={{textAlign: "center"}}>
            <div className="top-bar">
              <div className="top-bar-left">
                <ul className="menu">
                  <Link to="/" className="menu-text">Authen</Link>
                </ul>
              </div>
          </div>
          <div className="text-center"><h5>You are logout. Redirect to home page in 3 seconds</h5></div>
          <img src="https://s-media-cache-ak0.pinimg.com/736x/cb/eb/46/cbeb46a7bcde12bea4ff0e7f06b70a03--cartoon-foxes-cartoon-fox-drawing.jpg"/>
          
        </div>
    )
    }
}

export default Logout;
