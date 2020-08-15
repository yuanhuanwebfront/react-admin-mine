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
        {!hasLogin ? login : ''}
        <Switch>
            {/* 如果登录先走登录 */}
            <Route exact path="/login">
                <Login />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
