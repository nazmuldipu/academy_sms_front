import './App.css';

import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import HomePage from './containers/homePage';
import LoginPage from './containers/loginPage';
import NotFound from './containers/notFound';
import RegistrationPage from './containers/registrationPage';


function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/not-found" component={NotFound} />
        <Route exact path="/" component={HomePage} />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
