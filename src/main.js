import'./index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascripts/App.js';
import configureStore from './javascripts/store/configureStore';
import {Provider} from 'react-redux';
import initialState from './javascripts/initialState.js';

const store = configureStore(initialState);
ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('main'));
