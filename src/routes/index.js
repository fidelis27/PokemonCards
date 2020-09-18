import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Error from '../pages/ErrorPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/" component={Error} />
    </Switch>
  );
}
