import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

import Login from './container/login/Login';
import Register from './container/login/Register';
import AuthRoute from './component/authRoute/AuthRoute';
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
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
