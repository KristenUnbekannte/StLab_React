import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ParentContainer from './containers/ParentContainer';
import Menu from './containers/MenuContainer';
import About from './views/About';
import LoginContainer from './containers/LoginContainer';
import LoginReduxContainer from './containers/LoginReduxContainer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import loginReducer from './reducers/LoginReduxReducer';
import LoginSuccess from './views/Login-success';
import LoginReduxFormContainer from './containers/LoginReduxFormContainer';
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({ login: loginReducer, form: formReducer });

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/about" component={About} />
            <Route exact path="/counters" component={ParentContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/login-redux" component={LoginReduxContainer} />
            <Route exact path="/login-redux/success" component={LoginSuccess} />
            <Route exact path="/login-redux-form" component={LoginReduxFormContainer} />
            <Route exact path="/login-redux-form/success" component={LoginSuccess} />
            <Route children={() => <h2>404 - страница не найдена</h2>} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
