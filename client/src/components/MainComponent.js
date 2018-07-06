import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Profile from './ProfileComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProfile,fetchInstitutions } from '../redux/ActionCreators'; 
import Login from './login/Login';

const mapStateToProps = state => {
  return {
    profile: state.profile,
    institutions : state.institutions
  }
}

const mapDispatchToProps = dispatch =>({
  fetchProfile : () => {dispatch(fetchProfile())},
  fetchInstitutions: () => {dispatch(fetchInstitutions())}
});
class Main extends Component {

constructor(props){
    super(props);
  } 

  componentDidMount(){
    this.props.fetchProfile();
    this.props.fetchInstitutions();
  }
  render() {
    const HomePage = () => {
        return(
                <div className="main_content" align="center">
                    <h1>Welcome!</h1>
                </div>
        );
      }
    return (
      <div >
          <Header />
          <Switch>
            <Route path ='/home' component={(HomePage)} />
<<<<<<< HEAD
            <Route path ='/profile' component={() => <Profile profile={this.props.profile} institutions = {this.props.institutions} /> } />
=======
            <Route path ='/login' component={(Login)} />
            <Route path ='/profile' component={() => <Profile profile={this.props.profile.profile} /> } />
>>>>>>> dd178f3eac05e270d1105bf75a72167279089bec
            <Redirect to="/home" />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
