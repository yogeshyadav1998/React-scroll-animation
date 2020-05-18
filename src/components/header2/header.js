import React, { Component } from 'react';
import {Row,Col,Icon} from 'antd';

import './header.css';

class header extends Component{
    render(){
        return(
            <div  style={{  zIndex: 1, width: '100%' }}>
                <Row className="header">
                    <Col md={2} offset={3} className="title">
                        <p>TRADE</p>
                    </Col>
                    <Col md={2} offset={11} className="header_element">
                        <a>Fun1</a>
                    </Col>
                    <Col md={2} className="header_element">
                        <a>Fun2</a>
                    </Col>
                    <Col md={1} className="header_element">
                        <a><Icon type="user" className="icon" /></a>
                    </Col>
                    <Col md={1} className="header_element">
                        <a><Icon type="shopping-cart" className="icon"/></a>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default header;