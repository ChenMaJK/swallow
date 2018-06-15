import React, { Component } from 'react';
import css from './Col.css';

export default class Col extends Component {
    constructor(props){
        super(props);
        console.log("tet");
        console.log(this.props.width==undefined?"12":this.props.width);
    }
    render() {
        return (
            <div class={this.props.width==undefined?"col _12":"col _"+this.props.width}>
                {this.props.children}
            </div>
        );
    }
}
