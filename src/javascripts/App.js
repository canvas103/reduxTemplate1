/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component} from 'react';
import TodoApp from './containers/TodoApp.js';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        //this.clickHandler = this.clickHandler.bind(this);
    }
    //clickHandler(){
    //
    //}
    render () {

        return (
            <div>
                <TodoApp />

            </div>
        );
    }
}

export default App;