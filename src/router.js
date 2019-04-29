import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginPage from './routes/LoginPage/LoginPage.jsx';
import SignPage from './routes/SignPage/SignPage.jsx';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/sign" exact component={SignPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
