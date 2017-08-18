import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
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
          <TodoForm
            currentTodo={this.props.currentTodo}
            changeCurrent={this.props.changeCurrent}
          />
          <TodoList todos={this.props.todos}/>
        </div>

      </div>
    );
  }
}

// export default App;
const mapStateToProps = (state) => state;
const ConnectedApp = connect(mapStateToProps)(App) //(connect takes argument (mapStateToProps) and return new function that accepts App)
export default ConnectedApp;
