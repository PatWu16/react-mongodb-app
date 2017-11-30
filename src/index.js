import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

import Login from './container/login/Login';
import Register from './container/login/Register';
import AuthRoute from './component/authRoute/AuthRoute';
import BossInfo from './container/bossInfo/BossInfo';
import GeniusInfo from './container/geniusInfo/GeniusInfo';
import Dashboard from './container/dashboard/Dashboard';
import reducers from './reducer';
import './config';

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
));
ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute />
        <Switch>
          <Route path="/bossInfo" component={BossInfo} />
          <Route path="/geniusInfo" component={GeniusInfo} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
