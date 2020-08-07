import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from './views/Home';
import Login from "./views/Login";

import {getUserToken} from "./Util/storage";

function App() {

  let login = <Redirect to={{pathname: '/login'}} />,
      hasLogin = getUserToken();

  return (
    <Router>
      <div id="app">
          {}
        {!hasLogin ? login : ''}
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
