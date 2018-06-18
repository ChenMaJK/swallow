import React, { Component } from 'react';
import css from './DropDown.css';

export default class DropDown extends Component {
    constructor(props){
        super(props);
        //
        this.state = {
            class: "item"
        };
        //绑定点击事件
        // this.handleClick = this.handleClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }
    render() {
        return (
            <div >
                <ul 
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                class="dropdown" ref="menu"
                >
                    {this.props.children.map(index =>{
                        return <li class= {this.state.class}> {index} </li>; 
                    })}
                </ul>
            </div>

        );
    }
    // handleClick (){
    //     this.props.click();
    // }
    onMouseEnter (){
        this.setState(prevState =>({
            class : this.state.class+ " hover"
        }));
    }
    onMouseLeave(){
        this.setState(prevState =>({
            class : this.state.class.replace(" hover","")
        }));
    }
}
