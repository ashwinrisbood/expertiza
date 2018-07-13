import React, { Component} from 'react';
import { connect} from 'react-redux';
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import * as actions from '../../redux/index.js'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    state = {
        username: '',
        password: ''
    } 

    componentDidMount() {
        console.log('component did mount')
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }
    
    componentDidUpdate() {
        console.log('component did update')
        if(this.props.loggedin) {
            this.props.history.push('/')
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(event);
        this.props.onSubmit(this.state.username, this.state.password)
        
    }
    usernameChangeHandler = (event) => {
        console.log(event.target.value)
        this.setState({username: event.target.value})
    }

    passwordChangeHandler = (event) => {
        console.log(event.target.value)
        this.setState({password: event.target.value})
    }

  
    render (){
        let output =  ( <div className="container center" style= {{marginTop:'35px', marginLeft: '560px'}}>
                            <div className="row">
                                <div className="col-md-6 col-md-offset-6">
                                    <h4>{output} </h4>
                                    <h4> Welcome! </h4><br />
                                    <form onSubmit={this.onSubmitHandler}>
                                        <div className="form-group">
                                            <label >username </label>
                                            <input type="username" 
                                                    className="form-control" 
                                                    placeholder="Enter username" 
                                                    value={this.state.username}
                                                    onChange={this.usernameChangeHandler}
                                                    autoComplete={"on"}
                                                    />
                                        </div>
                                        <div className="form-group">
                                            <label >Password</label>
                                            <input type="password"
                                                    className="form-control" 
                                                    placeholder="Password"
                                                    value={this.state.password}
                                                    onChange={this.passwordChangeHandler}
                                                    />
                                        </div>
                                            <NavLink to="/password_retrieval/forgotten" className="pull-right"> Forgot password?</NavLink>
                                        <div>
                                            
                                        </div>
                                        <div className="row">
                                            <button type="submit" className="btn btn-danger">Submit</button>
                                        </div>
                                        <br />
                                        <div className="row"> 
                                            <button type="submit" className="btn btn-danger">Request account</button>
                                        </div>
                                    </form>
                                </div>
                            </div> 
                        </div>  ); 
        output = this.props.loggedin ?  <Redirect to="/" /> : output ;
        return output;
    }
}

const mapStatetoProps = state => {
    return {
        loggedin: state.auth.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (name, password) => {dispatch(actions.auth(name, password))}
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Login);