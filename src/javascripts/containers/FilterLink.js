/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component, PropTypes} from 'react';
import Link from '../presentationals/Link.js';
import {connect} from 'react-redux';
import actionCreators from '../actionCreators/actionCreators.js';
import Constants from '../Constants.js';

const todoCounter = (todos, filter)=> {
    switch (filter) {
        case Constants.FILTER.SHOW_ALL:
            return todos.length;
        case Constants.FILTER.SHOW_COMPLETED:
            return todos.filter(t=>t.completed).length;
        case Constants.FILTER.SHOW_ACTIVE:
            return todos.filter(t=>!t.completed).length;
    }
};
const mapStateToProps=(state,ownProps)=>{
    return{
        active:ownProps.filter===state.visibilityFilter,
        count:todoCounter(state.todos,ownProps.filter)
    };
};
const mapDispatchToProps=(dispatch,ownProps)=>{
    return{
        onClick:()=>
            dispatch(actionCreators.setVisibilityFilter(ownProps.filter))
    };
};
const FilterLink=connect(mapStateToProps,mapDispatchToProps)(Link);
export default FilterLink