import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import RoutesPath from 'constants/path.json';

import Landing from 'pages/SignUp';
import Home from 'pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={RoutesPath.SIGNUP} component={Landing} />
      <Route exact path={RoutesPath.HOME} component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;