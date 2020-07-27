import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Home from './views/Home';

function App() {
  return (
    <Router>
      <div id="app">
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
