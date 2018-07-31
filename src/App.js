import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import ParentContainer from './containers/ParentContainer';
import Menu from './containers/MenuContainer';
import About from './views/About';
import LoginContainer from './containers/LoginContainer';

class App extends Component {
  render() {
    return (
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
                <Redirect to="/not_found" />
              </Switch>
            </div>
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
