import React, { Children } from 'react';
import Fade from 'react-reveal/Fade';

import './backgroundanimation.css';

class backgroundanimation extends React.Component {
  render() {
    return (
      <div>
        <Fade left>
        <img className="background_circle" src="/black_circle.jpg"></img>
        </Fade>
      </div>
    );
  }
}

export default backgroundanimation;