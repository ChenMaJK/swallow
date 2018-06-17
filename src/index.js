// import React, { Component } from 'react';
// import { render } from 'react-dom';

// render(
//     <div>Hello React!</div>,
//     document.getElementById('app')
// );
import React from 'react';
import { render } from 'react-dom';
import Nav from './_Nav/Nav';
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
render(
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
    ,
    document.getElementById('app')
);
