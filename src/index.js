import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {updateCurrent} from './reducers/todo';
import {bindActionCreators} from 'redux';

const render = () => {
  //Store
  const state = store.getState();
  ReactDOM.render(<App todos={state.todos}
      currentTodo={state.currentTodo}
      // changeCurrent = {actions.todoChangeHandler}  -- replace this with the shorthand key in l:24 below
      changeCurrent = {actions.updateCurrent}
    />,
    document.getElementById('root'));
}

// const todoChangeHandler = (value) => store.dispatch(updateCurrent(value));

const actions = bindActionCreators(
  //todoChangeHandler: updateCurrent  - replace this with the shorthand syntax {updateCurrent}
  {updateCurrent}, store.dispatch);
//State
// const state = {
//   todos: [
//     {id: 1, name: 'Render static UI', isComplete: true},
//     {id: 2, name: 'Create initial state', isComplete: true},
//     {id: 3, name: 'Render based on state', isComplete: false},
//   ]
// };



render();
store.subscribe(render);


// temporary to test subscribe
// setTimeout(() => {
//   store.dispatch({type: 'TODO_ADD', payload: {id: 5, name: "New todo", isComplete: false}});
// }, 1000)
registerServiceWorker();
