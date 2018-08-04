import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Presentation from './components/reactPresentation'
import MobileController from './components/mobileController'

export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Presentation} />
      <Route path='/mobile-controller' component={MobileController}/>
    </Switch>
  </Router>
)
