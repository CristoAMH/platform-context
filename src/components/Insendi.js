import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Platform from './Platform.js';
import LogIn from './LogIn.js';
import PrivateRoute from './PrivateRoute.js';

const Insendi = props => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Platform} />
      <Route path="/login" component={LogIn} />
    </Switch>
  );
};

export default Insendi;
