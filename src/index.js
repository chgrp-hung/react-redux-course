import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const render = () => {
  //Store
  const state = store.getState();
  ReactDOM.render(<App todos={state.todos}
      currentTodo={state.currentTodo}
      changeCurrent = {todoChangeHandler}
    />,
    document.getElementById('root'));
}

const todoChangeHandler = (value) => store.dispatch({type: 'CURRENT_UPDATE', payload: value});

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
