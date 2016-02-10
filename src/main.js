import'./index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './javascripts/containers/TodoApp.js';
import configureStore from './javascripts/store/configureStore';
import {Provider} from 'react-redux';
const store = configureStore({});
ReactDOM.render(<Provider store={store}><TodoApp /></Provider>,document.getElementById('main'));
