import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <div> Source code has been edited. </div>
        </p>
        <div className="Todo-App">
          <form>
            <input type="text"/>
          </form>
          <div className="Todo-List">
            <ul>
              <li>
                <input type="checkbox" /> Create Static UI
              </li>
              <li>
                <input type="checkbox" /> Create Initial State
              </li>
              <li>
                <input type="checkbox" /> Use State to Render UI
              </li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
