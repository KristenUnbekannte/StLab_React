import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from './common/Layout';
import About from './views/About';
import ParentContainer from './containers/ParentContainer';
import LoginContainer from './containers/LoginContainer';

class App extends Component {
	render() {
		return (
				<HashRouter>
					<Switch>
						<Route exact path="/" component={Layout} />
						<Route exact path="/about" component={About} />
						<Route exact path="/counters" component={ParentContainer} />
						<Route exact path="/login" component={LoginContainer} />
						<Route children={() => <h2>404 - страница не найдена</h2>} />
					</Switch>
				</HashRouter>
		);
	}
}

export default App;
