import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ParentContainer from './containers/ParentContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ParentContainer />
      </div>
    );
  }
}

export default App;
