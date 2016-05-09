import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import {browserHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux'


import rootReducer from '../reducers/rootReducer';
import initialState from './initialState.js';

//export default function configureStore(initialState) {
//  const store = applyMiddleware(thunk)(createStore)(rootReducer,initialState);
//  return store;
//}
const middleware = routerMiddleware(browserHistory);

export default ()=> {
  const store=compose(
      applyMiddleware(thunk),
      applyMiddleware(middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)(rootReducer,initialState);
  return store;
}
