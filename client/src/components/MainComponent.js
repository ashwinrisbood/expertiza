import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StudentList from './StudentList';
import SignupSheet from './SignupSheet';
import Profile from './ProfileComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProfile, fetchTasksNotYetStarted,fetchInstitutions } from '../redux/ActionCreators'; 
import Login from './login/Login';
const mapStateToProps = state => {
  return {
    tasksNotYetStarted : state.tasksNotYetStarted,
    profile: state.profile,
    institutions : state.institutions
  }
}

const mapDispatchToProps = dispatch =>({
  fetchTasksNotYetStarted : () => {dispatch(fetchTasksNotYetStarted())},
  fetchProfile : () => {dispatch(fetchProfile())},
  fetchInstitutions: () => {dispatch(fetchInstitutions())}
});
class Main extends Component {

constructor(props){
    super(props);
  } 

  componentDidMount(){
    this.props.tasksNotYetStarted;
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
            <Route path = '/studentlist' component={StudentList}/>
            <Route path = '/sign_up_sheet' component={SignupSheet}/>

            <Route path ='/profile' component={() => <Profile profile={this.props.profile} institutions = {this.props.institutions} /> } />
            <Route path ='/login' component={(Login)} />

            <Redirect to="/home" />
          </Switch>

          <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
