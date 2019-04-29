import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage.jsx';
import LoginPage from './routes/LoginPage/LoginPage.jsx';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/home" exact component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
