/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component} from 'react';
import TodoList from '../presentationals/TodoList.js';
import AddTodo from '../presentationals/AddTodo.js';
import Footer from '../presentationals/Footer.js';
import {toggleTodo,removeTodo,setVisibilityFilter,addTodo,addTodo2} from '../actionCreators/actionCreators.js';
import {connect} from 'react-redux';

class TodoApp extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const pending=this.props.state.pending?(<span>Pending</span>):(<span></span>);
        return (
            <div>
                <AddTodo onAddClick={this.props.onAddClick}
                         onTryThunkClick={this.props.onTryThunkClick}
                    />
                <TodoList state={this.props.state}
                          onTodoClick={this.props.onTodoClick}
                          onRemoveClick={this.props.onRemoveClick}
                    >
                    {pending}
                </TodoList>
                <Footer state={this.props.state}
                        onFilterClick={this.props.onFilterClick}
                    />

            </div>
        );
    }
}


const mapStateToProps = state=>({state});
const mapDispatchToProps = (dispatch)=> {
    return{
        onTodoClick: (id)=> {
            dispatch(toggleTodo(id));
        },
        onRemoveClick: (id)=> {
            dispatch(removeTodo(id));
        },
        onFilterClick: (filter)=> {
            dispatch(setVisibilityFilter(filter))
        },
        onAddClick: (text)=> {
            dispatch(addTodo(text));
        },
        onTryThunkClick:(text)=>{
            dispatch(addTodo2(text));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);