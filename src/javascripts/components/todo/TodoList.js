/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component, PropTypes} from 'react';
import {SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED} from '../../constants/FilterTypes.js';
import Todo from "./Todo.js";

const getVisibleTodos = (todos, filter)=> {
    switch (filter) {
        case SHOW_ALL:
            return todos;
        case SHOW_COMPLETED:
            return todos.filter(t=>t.completed);
        case SHOW_ACTIVE:
            return todos.filter(t=>!t.completed);
        default :return todos;
    }
};
class TodoList extends Component{
    constructor(props, context) {
        super(props, context);
    }
    render(){
        return(
            <ul>
                {getVisibleTodos(this.props.state.todos,this.props.state.visibilityFilter)
                    .map(todo =>
                        <Todo key={todo.id}
                              completed={todo.completed}
                              onClick={()=>this.props.onTodoClick(todo.id)}
                            >
                            {todo.text}
                            <button onClick={()=>this.props.onRemoveClick(todo.id)}
                                >delete</button>
                        </Todo>
                    )
                }
                {this.props.children}
            </ul>
        );
    }
}
TodoList.propTypes = {
    state: PropTypes.shape({
        todos:PropTypes.array.isRequired,
        visibilityFilter:PropTypes.string.isRequired
    }).isRequired,
    onTodoClick:PropTypes.func.isRequired,
    onRemoveClick:PropTypes.func.isRequired
};
export default TodoList;