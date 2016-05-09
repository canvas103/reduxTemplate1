import'./../index.html';
import '!style!css!sass!../stylesheets/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import RouterWrap from './RouterWrap.js';
import configureStore from './/store/configureStore';
import {Provider} from 'react-redux';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory,store);
ReactDOM.render(
    <Provider store={store}>
        <RouterWrap history={history}/>
    </Provider>,
    document.getElementById('main')
);
