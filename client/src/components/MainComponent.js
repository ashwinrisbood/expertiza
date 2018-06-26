import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import StudentList from './StudentList';

class Main extends Component {

constructor(props){
    super(props);
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
      <div>
          <Header />
          <Switch>
            <Route path ='/home' component={(HomePage)} />
            <Route path = '/studentlist' component={StudentList}/>
            <Redirect to="/home" />
          </Switch>

          <Footer />
      </div>
    );
  }
}
//i know, but render kyun ho raha hai?
export default Main;
