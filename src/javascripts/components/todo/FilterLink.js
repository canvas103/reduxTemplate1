/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component, PropTypes} from 'react';

class FilterLink extends Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        if (this.props.active) {
            return <span>{this.props.children+"("+this.props.count+")"}</span>
        }
        return (
            <a href="#"
               onClick={e=>{
            e.preventDefault();
            this.props.onClick()
            }

            }>{this.props.children+"("+this.props.count+")"}</a>
        )
    }
}

FilterLink.propTypes = {
    active:PropTypes.bool.isRequired,
    count:PropTypes.number.isRequired,
    onClick:PropTypes.func.isRequired,
};
export default FilterLink