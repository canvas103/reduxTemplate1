/**
 * Created by chenghui on 2/10/2016.
 */
import Constants from '../Constants.js'
export default{
    addTodo(text){
        return {
            type: Constants.ADD_TODO,
            id: (new Date).getTime(),
            text
        }
    },
    removeTodo(id){
        return {
            type:Constants.REMOVE_TODO,
            id
        }
    },
    setVisibilityFilter(filter){
        return {
            type: Constants.SET_VISIBILITY_FILTER,
            filter
        }
    },
    toggleTodo(id){
        return {
            type: Constants.TOGGLE_TODO,
            id
        }
    }
}
