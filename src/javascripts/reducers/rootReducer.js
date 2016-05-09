import {combineReducers} from 'redux';
import {routerReducer } from 'react-router-redux';
import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER,PENDING} from '../constants/ActionTypes.js';
import {SHOW_ALL} from '../constants/FilterTypes.js';

const todo = (state, action)=> {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {completed: !state.completed});
        default :
            return state;
    }
};
const todos = (state = [], action)=> {
    switch (action.type) {
        case ADD_TODO:
            return state.concat([todo(undefined, action)]);
        case REMOVE_TODO:
            return state.filter(t=> t.id !== action.id);
        case TOGGLE_TODO:
            return state.map(t=> todo(t, action));
        default :
            return state;
    }
};
const visibilityFilter = (state = SHOW_ALL, action)=> {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};
const pending = (state = false, action)=> {
    switch (action.type) {
        case PENDING:
            return true;
        default:
            return false;
    }
};
const rootReducer = combineReducers({
    //Add more reducers here
    todos,
    visibilityFilter,
    pending,
    routing:routerReducer
});
export default rootReducer;
