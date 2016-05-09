/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component, PropTypes} from 'react';
import FilterLink from './FilterLink.js';
import {SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED} from '../../constants/FilterTypes.js';

const todoCounter = (todos, filter)=> {
    switch (filter) {
        case SHOW_ALL:
            return todos.length;
        case SHOW_COMPLETED:
            return todos.filter(t=>t.completed).length;
        case SHOW_ACTIVE:
            return todos.filter(t=>!t.completed).length;
    }
};

class Footer extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <p>
                show:{' '}
                <FilterLink active={this.props.state.visibilityFilter===SHOW_ALL}
                            count={todoCounter(this.props.state.todos, SHOW_ALL)}
                            onClick={()=>this.props.onFilterClick(SHOW_ALL)}
                    >
                    All
                </FilterLink>
                {' '}
                <FilterLink active={this.props.state.visibilityFilter===SHOW_ACTIVE}
                            count={todoCounter(this.props.state.todos, SHOW_ACTIVE)}
                            onClick={()=>this.props.onFilterClick(SHOW_ACTIVE)}
                    >
                    Active
                </FilterLink>
                {' '}
                <FilterLink active={this.props.state.visibilityFilter===SHOW_COMPLETED}
                            count={todoCounter(this.props.state.todos, SHOW_COMPLETED)}
                            onClick={()=>this.props.onFilterClick(SHOW_COMPLETED)}
                    >
                    Completed
                </FilterLink>
            </p>
        );
    }
}
Footer.propTypes = {
    state: PropTypes.shape({
        todos:PropTypes.array.isRequired,
        visibilityFilter:PropTypes.string.isRequired
    }).isRequired,
    onFilterClick:PropTypes.func.isRequired,
};
export default Footer