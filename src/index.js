import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ParentContainer from './containers/ParentContainer';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Menu from './views/Menu/index';
import About from './views/About/index';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/about" component={About} />
            <Route exact path="/counters" component={ParentContainer} />
            <Route children={()=><h2>404 - страница не найдена</h2>} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
