import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/todo';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';  //see redux in chrome react devtools

export default createStore(reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
