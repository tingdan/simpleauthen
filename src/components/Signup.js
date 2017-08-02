import React from 'react';
import Nav from './Nav';

import axios from 'axios'

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fullname: ''
        }
    }

    handleSubmit(e){
        e.preventDefault();

        axios.post('/signup', {
            email: this.state.email,
            password: this.state.password,
            fullname: this.state.fullname
        }).then(res => {
            alert('Successful Signup');

            this.props.history.push('/')
        }).catch(err => {
            alert('email already in used')
            console.log(err);
        })
    }

    render() {
        console.log(this.props);
        return (
            <div style={{textAlign: "center"}}>
                <Nav />
                <form onSubmit={(e) => this.handleSubmit(e)}>
                  <div className="form-icons">
                    <h4>Register for an account</h4>
                    <div className="row align-center">
                        <div className="large-4 large-centered columns">
                          <span className="input-group-label">
                            <i className="fa fa-user"></i>
                          </span>
                          <input onChange={(e) => this.setState({ fullname: e.target.value})} className="input-group-field" type="text" placeholder="Full name" required/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="large-4 large-centered columns">
                          <span className="input-group-label">
                            <i className="fa fa-envelope"></i>
                          </span>
                          <input onChange={(e) => this.setState({ email: e.target.value})} className="input-group-field" type="email" placeholder="Email" required/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="large-4 large-centered columns">
                          <span className="input-group-label">
                            <i className="fa fa-key"></i>
                          </span>
                          <input onChange={(e) => this.setState({ password: e.target.value})} className="input-group-field" type="password" placeholder="Password" required/>
                        </div>
                      </div>
                    </div>


                  <button type="submit" className=" large-2 button">Sign Up</button>
                </form>
            </div>




        )
    }
}

export default Signup;
