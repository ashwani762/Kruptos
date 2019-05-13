import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from '../store';
import Messages from './layouts/Messages';

import Header from './layouts/Header';
import SubmitOwn from './layouts/SubmitOwn';

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
          <Header />
          <Router>
            <Switch>
              <Route exact path="/" component={Messages} />
              <Route exact path="/submit" component={SubmitOwn} />
            </Switch>
          </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));