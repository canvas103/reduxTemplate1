import {combineReducers} from 'redux';
import assign from 'object-assign';
import Constants from '../Constants.js'

const todo = (state, action)=> {
    switch (action.type) {
        case Constants.ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case Constants.TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return assign({},state,{completed: !state.completed});
        default :
            return state;
    }
};
const todos = (state, action)=> {
    state=state || [];
    switch (action.type) {
        case Constants.ADD_TODO:
            return state.concat([todo(undefined, action)]);
        case Constants.REMOVE_TODO:
            return state.filter(t=> t.id!==action.id);
        case Constants.TOGGLE_TODO:
            return state.map(t=> todo(t, action));
        default :
            return state;
    }
};
const visibilityFilter=(state,action)=>{
    state=state || Constants.FILTER.SHOW_ALL;
    switch (action.type){
        case Constants.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};
const rootReducer = combineReducers({
    //Add more reducers here
    todos,
    visibilityFilter
});
export default rootReducer;
