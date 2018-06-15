import React, { Component } from 'react';
import css from './nav.css';
import Tag from './_Tag/Tag';

var tags = [];
export default class Nav extends Component {
    constructor(props){
        super(props);
        tags = props.config
        tags=tags.map(
            config => {
                return <Tag config={config}></Tag>
            }
        )
    }
    render() {
        return (
            <div class="features skin">
                {tags}
            </div>
        );
    }
}
