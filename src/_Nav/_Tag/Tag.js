import React, { Component } from 'react';
import css from './tag.css';


export default class Tag extends Component {
    constructor(props){
        super(props);
        //
        this.state = {
            name : props.config.name,
            class: "tag "+props.config.float
        };
        console.log(props.config);
        //绑定点击事件
        this.handleClick = this.handleClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }
    render() {
        return (
            <li>
                <a 
                    onClick={this.handleClick} 
                    onMouseEnter={this.onMouseEnter} 
                    onMouseLeave={this.onMouseLeave}
                    class={this.state.class}
                >
                    {this.state.name}
                </a>
            </li>
        );
    }

    handleClick (){
        this.setState(prevState =>({
            name : "click!!"
        }));
    }
    onMouseEnter(){
        this.setState(prevState =>({
            class : this.state.class+" hover"
        }));
    }
    onMouseLeave(){
        this.setState(prevState =>({
            class : this.state.class.replace(" hover","")
        }));
    }
}
