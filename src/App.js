import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          React UI Todo demo.
        </p>
        <div className="Todo-App">
          <Message message="" />
          <TodoForm />
          <TodoList />
        </div>

      </div>
    );
  }
}

export default App;
