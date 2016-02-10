/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoList from '../presentationals/TodoList.js';
import actionCreators from '../actionCreators/actionCreators.js';
import Constants from '../Constants.js';

const getVisibleTodos = (todos, filter)=> {
    switch (filter) {
        case Constants.FILTER.SHOW_ALL:
            return todos;
        case Constants.FILTER.SHOW_COMPLETED:
            return todos.filter(t=>t.completed);
        case Constants.FILTER.SHOW_ACTIVE:
            return todos.filter(t=>!t.completed);
    }
};

const mapStateToProps=(state)=>{
    return{
        todos:getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};
const mapDispatchToProps=(dispatch)=>{
    return{
        onTodoClick:(id)=>{
            dispatch(actionCreators.toggleTodo(id));
        },
        onRemoveClick:(id)=>{
            dispatch(actionCreators.removeTodo(id));
        }
    };
};
const VisibleTodoList=connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default VisibleTodoList;