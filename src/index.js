import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ParentContainer from './containers/ParentContainer';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Menu from './views/Menu/index';
import About from './views/About/index';
import LoginContainer from './containers/LoginContainer';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/about" component={About} />
            <Route exact path="/counters" component={ParentContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route children={()=><h2>404 - страница не найдена</h2>} />
        </Switch>
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();
