import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LandingPage } from './pages/LandingPage';

import { Search } from './pages/Search';

function App() {
  return (
    <Switch>
      <Route exact path="/search" component={Search} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  );
}
export default App;
