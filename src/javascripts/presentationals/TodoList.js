/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component, PropTypes} from 'react';

import Todo from "./Todo.js";
const TodoList = ({
    onTodoClick,
    onRemoveClick,
    todos
    })=>(
    <ul>
        {todos.map(todo =>
                <Todo key={todo.id}
                      completed={todo.completed}
                      text={todo.text}
                      onClick={()=>onTodoClick(todo.id)}
                      onClick2={()=>onRemoveClick(todo.id)}
                    />
        )}
    </ul>
);
TodoList.propTypes = {
    todos: PropTypes.array.isRequired
    //onTodoClick:PropTypes.function.isRequired,
    //onRemoveClick:PropTypes.function.isRequired
};
export default TodoList;