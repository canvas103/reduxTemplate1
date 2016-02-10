/**
 * Created by chenghui on 2/9/2016.
 */
import React, {Component, PropTypes} from 'react';
import FilterLink from './../containers/FilterLink.js';
import Constants from '../Constants.js';
const Footer = ()=>(
    <p>
        show:{' '}
        <FilterLink filter={Constants.FILTER.SHOW_ALL}>
            All
        </FilterLink>{' '}
        <FilterLink filter={Constants.FILTER.SHOW_ACTIVE}>
            Active
        </FilterLink>{' '}
        <FilterLink filter={Constants.FILTER.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </p>
);
export default Footer