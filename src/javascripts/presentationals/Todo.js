/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component, PropTypes} from 'react';

const Todo = ({
    onClick,
    onClick2,
    completed,
    text
    })=>(
    <li
        onClick={onClick}
        style={{
            textDecoration:completed?'line-through':'none'
        }}
    >
        {text}
        <button onClick={onClick2}
            >delete</button>
    </li>
);
Todo.propTypes={
    text:PropTypes.string.isRequired,
    //onClick:PropTypes.function.isRequired,
    //onClick2:PropTypes.function.isRequired,
    //completed:PropTypes.boolean.isRequired
};
export default Todo;
