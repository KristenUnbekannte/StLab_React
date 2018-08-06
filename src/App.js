import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ParentContainer from "./containers/ParentContainer";
import Layout from "./common/Layout";
import About from "./views/About";
import LoginContainer from "./containers/LoginContainer";
import LoginReduxContainer from "./containers/LoginReduxContainer";
import loginReduxReducer from "./reducers/LoginReduxReducer";
import loginReduxFormReducer from "./reducers/LoginReduxFormReducer";
import LoginSuccess from "./views/LoginSuccess";
import LoginReduxFormSuccess from "./views/LoginReduxFormSuccess";
import LoginReduxFormContainer from "./containers/LoginReduxFormContainer";
import PrivateRoute from "./common/PrivateRoute";

const reducers = combineReducers({
  login: loginReduxReducer,
  loginReduxForm: loginReduxFormReducer,
  form: formReducer
});
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Layout} />
            <Route exact path="/about" component={About} />
            <Route exact path="/counters" component={ParentContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/login-redux" component={LoginReduxContainer} />
            <Route exact path="/login-redux-form" component={LoginReduxFormContainer}/>
            <PrivateRoute
              exact
              path="/login-redux/success"
              component={LoginSuccess}
              redirect="/login-redux"
            />
            <PrivateRoute
              exact
              path="/login-redux-form/success"
              component={LoginReduxFormSuccess}
              redirect="/login-redux-form"
            />
            <Route children={() => <h2>404 - страница не найдена</h2>} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
