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
    padding:10
}
render(
    <div style={style}>
        <Row>
            <Col width="12">
                Col 12
            </Col>
        </Row>
        <Row>
            <Col width="6">
                Col 6
            </Col>
            <Col width="6">
                Col 6
            </Col>
        </Row>
        <Row>
            <Col width="4">
                <Row>
                    Col 4 中的Row
                </Row>
            </Col>
        </Row>
    </div>
    ,
    document.getElementById('app')
);
