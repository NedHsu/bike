import '../scss/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Main from './Main';

const body = (
  <AppContainer>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        
      </Route>
    </Router>
  </AppContainer>
);

let element = document.getElementById('app');
ReactDOM.render(body, element);

document.body.classList.remove('loading');

// Hot Module Replacement API
if (module.hot) {
  console.log('test');
  module.hot.accept('./Main', () => {
    const NextApp = require('./Main').default;
    ReactDOM.render(
      <AppContainer>
        <Router history={browserHistory}>
          <Route path="/" component={Main}>
            
          </Route>
        </Router>
      </AppContainer>,
      element
    );
  });
}
