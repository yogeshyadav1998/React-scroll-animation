import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'antd';

import './header.css';

class Header extends Component {
  state = {};
  render() {
    return (
      <div style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Row className="header">
          <Col md={2} offset={2}>
            <img className="trade_name" src="/trade.png"/>
          </Col>
          <Col md={2} offset={11} className="header_element">
            <a>English</a>
          </Col>
          <Col md={2} className="header_element">
            <a>Blog</a>
          </Col>
          <Col md={2} className="header_element">
            <a>FAQ</a>
          </Col>
          <Col md={3}>
            <button className="start_saving_button hvr-pulse-grow">Start saving</button>
          </Col>
        </Row>
      </div>
    );
  }
}


export default Header;
