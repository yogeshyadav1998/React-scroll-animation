import React, { Component } from 'react';
import {Row,Col} from 'antd';

import './phase1.css';

class phase1 extends Component{
    render(){
        return(
            <div className="phase1" >
                <Row>
                <Col md={22} offset={1}>
                <div className="home-image">
                    <button className="explore-button">Explore</button>
                </div>
                </Col>
                </Row>
            </div>
        )
    }
}

export default phase1;