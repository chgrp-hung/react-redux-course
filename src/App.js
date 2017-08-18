import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {connect} from 'react-redux';
import {updateCurrent} from './reducers/todo';

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
            changeCurrent={this.props.updateCurrent}
          />
          <TodoList todos={this.props.todos}/>
        </div>

      </div>
    );
  }
}

// export default App;
// const actions = bindActionCreators({updateCurrent}, store.dispatch);
const mapStateToProps = (state) => state;
const mapDispatchToProps = {updateCurrent};
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App) //(connect takes argument (mapStateToProps) and return new function that accepts App)
export default ConnectedApp;
