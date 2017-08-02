import React, { Component } from 'react'
import Nav from './Nav'

import axios from 'axios'

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log('heyadasd');
        e.preventDefault();
        axios.post('/login', {
            email: this.state.email,
            password: this.state.password
        }).then(function(res) {
            if(res.data.auth) { sessionStorage.setItem('user', res.data.auth); window.location = '/'}
            else { alert('email or password is incorrect')}
        }).catch(function (error) {
    console.log(error);
  });
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <Nav />
                <form className="log-in-form" onSubmit={(e) => this.handleSubmit(e)}>
                      <h4 className="text-center">Log in with you email account</h4>

                      <div className="row">
                          <div className="large-4 large-centered columns">
                              <label>Email</label><input
                                  type="email"
                                  placeholder="somebody@example.com"
                                  onChange={(e) => this.setState({ email: e.target.value })}
                                  required
                              />
                          </div>
                     </div>
                     <div className="row">
                         <div className="large-4 large-centered columns">
                             <label>Password</label><input
                                 required
                                 type="password"
                                 placeholder="Password"
                                 onChange={(e) => this.setState({ password: e.target.value })}
                             />
                         </div>
                    </div>
                      <p><input type="submit" className="large-2 button" value="Log in"></input></p>

                    </form>
            </div>
        )
    }
}

export default Login;
