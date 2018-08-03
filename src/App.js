import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import ParentContainer from './containers/ParentContainer';
import Layout from './common/Layout';
import About from './views/About';
import LoginContainer from './containers/LoginContainer';
import LoginReduxContainer from './containers/LoginReduxContainer';
import loginReduxReducer from './reducers/LoginReduxReducer';
import LoginSuccess from './views/LoginSuccess';
import PrivateRoute from './common/PrivateRoute';

const reducers = combineReducers({
	login: loginReduxReducer,
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
						<PrivateRoute
							exact
							path="/login-redux/success"
							component={LoginSuccess}
							redirect="/login-redux"
						/>
						<Route children={() => <h2>404 - страница не найдена</h2>} />
					</Switch>
				</HashRouter>
			</Provider>
		);
	}
}

export default App;
