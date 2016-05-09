/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component, PropTypes} from 'react';

class AddTodo extends Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        let input;
        return(

            <div>
                <input type="text" ref={node=>{input=node}}/>
                <button onClick={()=>{this.props.onAddClick(input.value);input.value='';}}>{"Add Todo"}</button>
                <button onClick={()=>{this.props.onTryThunkClick(input.value);input.value='';}}>try thunk</button>
            </div>
        );
    }
}

AddTodo.propTypes = {
    onAddClick:PropTypes.func.isRequired,
    onTryThunkClick:PropTypes.func.isRequired
};
export default AddTodo