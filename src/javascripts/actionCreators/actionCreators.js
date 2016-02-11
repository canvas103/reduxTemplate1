/**
 * Created by chenghui on 2/10/2016.
 */
import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER,PENDING} from '../constants/ActionTypes.js';

export const addTodo = (text)=>({
    type: ADD_TODO,
    id: (new Date).getTime(),
    text
});

export const removeTodo = (id)=>({
    type: REMOVE_TODO,
    id
});

export const setVisibilityFilter = (filter)=>({
    type: SET_VISIBILITY_FILTER,
    filter
});
export const toggleTodo = (id)=>({
    type: TOGGLE_TODO,
    id
});
export const addTodo2 = (text)=> {
    return dispatch => {
        dispatch({
            type:PENDING
        });
        setTimeout(()=> {
            dispatch({
                type: ADD_TODO,
                id: (new Date).getTime(),
                text
            });
        }, 1000)
    }
};
