import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {updateCurrent} from './reducers/todo';
import {bindActionCreators} from 'redux';
import {Provider} from 'react-redux';


const actions = bindActionCreators({updateCurrent}, store.dispatch);
// const render = () => {
//   //Store
//   const state = store.getState();

ReactDOM.render(
  <Provider store={store}>
    <App changeCurrent= {actions.updateCurrent}/>
  </Provider>,
document.getElementById('root'));

  // To change by wrapping our app with the Provider from react-redux
  // ReactDOM.render(<App todos={state.todos}
  //     currentTodo={state.currentTodo}
  //     // changeCurrent = {actions.todoChangeHandler}  -- replace this with the shorthand key in l:24 below
  //     changeCurrent = {actions.updateCurrent}
  //   />,
  //   document.getElementById('root'));
// }

// const todoChangeHandler = (value) => store.dispatch(updateCurrent(value));


//State
// const state = {
//   todos: [
//     {id: 1, name: 'Render static UI', isComplete: true},
//     {id: 2, name: 'Create initial state', isComplete: true},
//     {id: 3, name: 'Render based on state', isComplete: false},
//   ]
// };


// To be replaced with the Provider (react-redux)
// render();  //initial render
// store.subscribe(render);


// temporary to test subscribe
// setTimeout(() => {
//   store.dispatch({type: 'TODO_ADD', payload: {id: 5, name: "New todo", isComplete: false}});
// }, 1000)
registerServiceWorker();
