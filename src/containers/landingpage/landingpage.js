import React, { Component } from 'react';

import Header from '../../components/header2/header';
import Phase1 from './phase1/phase1';
import Phase2 from './phase2/phase2';
import './landingpage.css';

class landingpage extends Component{
    render(){
        return(
            <div className="landingpage">
                <Header></Header>
                <Phase1/>
                <Phase2/>
            </div>
        )
    }
}

export default landingpage;