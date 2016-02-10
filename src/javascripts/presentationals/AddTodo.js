/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import actionCreators from '../actionCreators/actionCreators.js';


let AddTodo = ({dispatch})=> {
    let input;
    return (

        <div>
            <input type="text" ref={node=>{input=node}}/>
            <button onClick={()=>{
                dispatch(actionCreators.addTodo(input.value));
                input.value='';
                }}
            >
                Add Todo
            </button>
        </div>
    );
};
AddTodo = connect()(AddTodo);
export default AddTodo