
import {getTodos, createTodo} from '../lib/todoService';
import {showMessage} from './message';

// {id: 1, name: 'Render static UI', isComplete: true},
// {id: 2, name: 'Create initial state', isComplete: true},
// {id: 3, name: 'Render based on state', isComplete: false},
const initState = {
  todos: [],
  currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE';
export const TODO_ADD = 'TODO_ADD';
export const TODOS_LOAD = 'TODO_LOAD';

export const updateCurrent = value => ({type: CURRENT_UPDATE, payload: value});

export const loadTodos = (todos) => ({type: TODOS_LOAD, payload: todos});
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo});
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(showMessage('Loading Todos'));
    getTodos()
      .then(todos => dispatch(loadTodos(todos)));
  }
}

export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage('Saving Todo'));
    createTodo(name)
      .then(res => dispatch(addTodo(res)))
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, currentTodo: '', todos: state.todos.concat(action.payload)};
    case CURRENT_UPDATE:
      return {...state, currentTodo:action.payload};
    case TODOS_LOAD:
      return {...state, todos: action.payload};
    default:
      return state;
  }
}
