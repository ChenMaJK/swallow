// import React, { Component } from 'react';
// import { render } from 'react-dom';

// render(
//     <div>Hello React!</div>,
//     document.getElementById('app')
// );
import React from 'react';
import { render } from 'react-dom';
import Nav from './_Nav/Nav';
import Button from './_Nav/_Button/Button';
import DropDown from './_Nav/_DropDown/DropDown';
import Col from './_Position/_Col/Col';
import Row from './_Position/_Row/Row';

let style = {
    margin:10,
    padding:10,
    background:"red"
}
let styles = {
    margin:10,
    padding:10
}
let test = function(){
    alert("es");
}
render(
    <div >
        <Nav>
            <Button href="www.baidu.com" >ssssss</Button>
            <DropDown>
                <Button >ssssss</Button>
                <Button href="www.baidu.com" >ssssss</Button>
                <Button href="www.baidu.com" >ssssss</Button>
            </DropDown>
        </Nav>
        <div style={styles}>
            <Row>
                <Col width="12" span="12">
                    <div style={style}>Col 12 </div>
                </Col>
            </Row>
            <Row>
                <Col width="6">
                    <Row>
                        <div style={style}>Col 6 </div>
                    </Row>
                </Col>
                <Col width="6">
                    <div style={style}>Col 6 </div>
                </Col>
            </Row>
            <Row>
                <Col width="4">
                    <Row>
                        <div style={style}>Col 4 中的Row </div>
                    </Row>
                </Col>
            </Row>
    
        </div>
   </div>
    ,
    document.getElementById('app')
);
