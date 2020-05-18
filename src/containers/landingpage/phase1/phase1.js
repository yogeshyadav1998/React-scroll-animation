import React, { Component } from 'react';
import {Row,Col} from 'antd';

import './phase1.css';

class phase1 extends Component{
    render(){
        return(
            <div className="phase1" >
                <div className="home-image">
                    <button className="explore-button">Explore</button>
                </div>
                <div className="tagline">
                    <p>Tagline About The Trade</p>
                </div>
            </div>
        )
    }
}

export default phase1;