/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component} from 'react';
import VisibleTodoList from './VisibleTodoList.js';
import AddTodo from '../presentationals/AddTodo.js';
import Footer from '../presentationals/Footer.js';

class TodoApp extends Component {
    constructor(props, context) {
        super(props, context);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){

    }
    render () {

        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
}

export default TodoApp;