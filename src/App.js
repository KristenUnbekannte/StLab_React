import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import ParentContainer from './containers/ParentContainer';
import Menu from './containers/MenuContainer';
import About from './views/About';
import LoginContainer from './containers/LoginContainer';
import LoginReduxContainer from './containers/LoginReduxContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import loginReducer from './reducers/LoginReduxReducer';
import LoginSuccess from './views/Login-success';

const store = createStore(loginReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/not_found" children={() => <h2>404 - страница не найдена</h2>} />
            <Route>
              <div>
                <Menu />
                <Switch>
                  <Route exact path="/" />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/counters" component={ParentContainer} />
                  <Route exact path="/login" component={LoginContainer} />
                  <Route exact path="/login-redux" component={LoginReduxContainer} />
                  <Route exact path="/login-redux/success" component={LoginSuccess} />
                  <Redirect to="/not_found" />
                </Switch>
              </div>
            </Route>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
