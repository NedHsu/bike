import '../scss/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Main from './Main';
import TodoAppDashboard from './components/TodoAppDashboard';
import NewsContainer from './containers/NewsContainer';
import RoutesContainer from './containers/RoutesContainer';
import MemoriesContainer from './containers/MemoriesContainer';
import TeamsContainer from './containers/TeamsContainer';
import store from './store'

const body = (
  <AppContainer>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={TodoAppDashboard} />
            <Route path="/news" component={NewsContainer}/>
            <Route path="/routes" component={RoutesContainer}/>
            <Route path="/memories" component={MemoriesContainer}/>
            <Route path="/teams" component={TeamsContainer}/>
        </Route>
      </Router>
    </Provider>
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
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={TodoAppDashboard} />
                <Route path="/news" component={News} title="News" />
            </Route>
          </Router>
        </Provider>
      </AppContainer>,
      element
    );
  });
}
