import React, {Component, PropTypes} from 'react';
//connect is for link dispatch to component.
import {connect} from 'react-redux';
//only import needed actions from ActionCreators.
//import {increase} from '../actioncreators/TemplateActionCreators';
//define regular react component.
class TemplateComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            count:0
        };
        this.clickHandler = this.clickHandler.bind(this);

    }
    clickHandler() {
        //this.props.dispatch(increase());
        this.setState({count:this.state.count+1})
    }
    render() {
        //let buttonText = this.props.pendding
        //    ? ('Pendding...')
        //    : ('Increase');
        return (
            <div>
                <h1>Foo</h1>
                <p>Number:{this.state.count}</p>
                <button onClick={this.clickHandler}>Increase</button>
            </div>
        );
    }
}
export default connect()(TemplateComponent);
