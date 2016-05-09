/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component, PropTypes} from 'react';

class Todo extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{
            textDecoration:this.props.completed?'line-through':'none'
        }}
                >
                {this.props.children}
            </li>
        );
    }
}
Todo.propTypes = {
    onClick:PropTypes.func.isRequired,
    completed:PropTypes.bool.isRequired
};
export default Todo;
