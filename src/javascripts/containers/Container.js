import React, {Component, PropTypes} from 'react';
import TodoList from '../presentationals/TodoList.js';
import {connect} from 'react-redux';

class Container extends Component {
    constructor(props, context) {
      super(props, context);
    }

    render () {

      return (
        <div>
            <TodoList todos={this.props.todos} onTodoClick={this.props.onTodoClick}>
                map(<Todo todo={item}></Todo>)
            </TodoList>

        </div>
      );
    }
}

const getVisibleTodos = (todos, filter)=> {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t=>t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t=>!t.completed)
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
            dispatch({
                type:'TOGGLE_TODO',
                id
            })
        }
    };
};
Container.propTypes={
    todos:PropTypes.array.isRequired
};
export default connect(mapStateToProps,mapDispatchToProps)(Container);
