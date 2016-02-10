/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component, PropTypes} from 'react';

const Link = ({
    active,
    children,
    onClick,
    count
    })=> {
    if (active) {
        return <span>{children+"("+count+")"}</span>
    }
    return (
        <a href="#"
           onClick={e=>{
            e.preventDefault();
            onClick()
            }

            }>{children+"("+count+")"}</a>
    )
};
export default Link