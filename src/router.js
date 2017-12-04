import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import LoginRoute from './routes/Login';
import Products from './routes/Product';
import WrappedNormalLoginForm from './routes/LoginForm';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Switch>
        <Route exact path="/" component={LoginRoute} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/loginForm" component={WrappedNormalLoginForm} />  
        </Switch>
    </Router>
  );
}

export default RouterConfig;
