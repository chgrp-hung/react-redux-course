import {createStore, applyMiddleware, combineReducers} from 'redux';
import todoReducer from './reducers/todo';
import messageReducer from './reducers/message';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';  //see redux in chrome react devtools

const reducer = combineReducers({
  todo: todoReducer,
  message: messageReducer
});

export default createStore(reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
