/**
 * Created by chenghui on 2/15/2016.
 */
import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute, browserHistory,Redirect,IndexRedirect} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux'
//import NavigationController from './containers/NavigationController.jsx';
//import LayoutController from './containers/LayoutController.jsx';
import NoMatch from './components/NoMatch.jsx';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this._navClickHandler=this._navClickHandler.bind(this);
    }

    componentDidMount() {
        //fetchData
    }
    _navClickHandler(path){
        this.props.dispatch(push(path));
    }
    render() {
        return (
            <div>
                <h2>My App</h2>
                <button onClick={()=>this._navClickHandler("/home")}>Home</button>
                <button onClick={()=>this._navClickHandler("/foo")}>Foo</button>
                <button onClick={()=>this._navClickHandler("/bar")}>Bar</button>
                <button onClick={()=>this._navClickHandler("/todo")}>TodoApp</button>
                <UpdateWrapper shouldUpdate="ture">
                    {this.props.children}
                </UpdateWrapper>
                {/*{hostname !== "www" && (
                 <iframe src={"http://"+config.host+"/nomatch/"} style={{display:"none"}}></iframe>)}*/}
            </div>
        );
    }
}
class UpdateWrapper extends Component {
    constructor(props, context) {
        super(props, context);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.shouldUpdate;
    }

    render() {
        return this.props.shouldUpdate ? this.props.children : null;
    }
}
export default connect()(App);