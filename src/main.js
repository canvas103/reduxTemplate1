import'./index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import Container from './javascripts/containers/Container';
import configureStore from './javascripts/store/configureStore';
import {Provider} from 'react-redux';
const store = configureStore({});
ReactDOM.render(<Provider store={store}><Container/></Provider>,document.getElementById('main'));
