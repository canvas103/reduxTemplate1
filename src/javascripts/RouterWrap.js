/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component,ProTypes} from 'react';
import {Router, Route, IndexRoute, browserHistory,Redirect,IndexRedirect} from 'react-router';
import App from './App.js';
import TodoApp from './containers/TodoApp.js';
import Foo from './components/Foo.jsx';

class RouterWrap extends Component {
    constructor(props, context) {
        super(props, context);
        //this.clickHandler = this.clickHandler.bind(this);
    }

    render () {

        return (
                <Router history={this.props.history}>
                    <Route path="/" component={App}>
                        <IndexRedirect to="/home"/>
                        <Route path="home" />
                        <Route path="todo" component={TodoApp}/>
                        <Route path="foo" component={Foo}/>
                        <Route path="bar" component={Foo}/>
                    </Route>
                </Router>
        );
    }
}

export default RouterWrap;