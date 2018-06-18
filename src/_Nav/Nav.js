import React, { Component } from 'react';
import css from './nav.css';
import Tag from './_Button/Button';

export default class Nav extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div class="nav skin">
                {this.props.children}
            </div>
        );
    }
}
