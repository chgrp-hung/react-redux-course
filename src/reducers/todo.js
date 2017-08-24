
import {getTodos} from '../lib/todoService';

// {id: 1, name: 'Render static UI', isComplete: true},
// {id: 2, name: 'Create initial state', isComplete: true},
// {id: 3, name: 'Render based on state', isComplete: false},
const initState = {
  todos: [],
  currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE';
const TODO_ADD = 'TODO_ADD';
const TODO_LOAD = 'TODO_LOAD';

export const updateCurrent = value => ({type: CURRENT_UPDATE, payload: value});

export const loadTodos = (todos) => ({type: TODO_LOAD, payload: todos});
export const fetchTodos = () => {
  return (dispatch) => {
    getTodos()
      // .then(todos => console.log(todos));
      .then(todos => dispatch(loadTodos(todos)));
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, todos: state.todos.concat(action.payload)};
    case CURRENT_UPDATE:
      return {...state, currentTodo:action.payload};
    case TODO_LOAD:
      return {...state, todos: action.payload};
    default:
      return state;
  }
}
