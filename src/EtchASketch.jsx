import React, { Component } from 'react';

const size = 1;

const frameStyling = {
  backgroundColor: 'blue',
  height: 300 * size + 2 * 85 * size + 'px',
  width: 400 * size + 2 * 85 * size + 'px',
  position: 'relative',
  borderRadius: 5 * size + 'px',
};

const screenStyling = {
  backgroundColor: 'lightGrey',
  height: 300 * size + 'px',
  width: 400 * size + 'px',
  position: 'absolute',
  top: 85 * size + 'px',
  left: 85 * size + 'px',
  borderRadius: 10 * size + 'px',
};

const controlsStyling = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
  bottom: '0px',
  padding: '3px',
  boxSizing: 'border-box',
};

const knobStyling = {
  height: 80 * size + 'px',
  width: 80 * size + 'px',
  backgroundColor: 'white',
  borderRadius: '50%',
};

class Screen extends Component {
  render() {
    return <div className='screen' style={screenStyling}></div>;
  }
}

const Knob = props => {
  return <div className='knob' style={knobStyling}></div>;
};

export default class EtchASketch extends Component {
  render() {
    return (
      <div className='frame' style={frameStyling}>
        <Screen />
        <div className='controls' style={controlsStyling}>
          <Knob left />
          <Knob right />
        </div>
      </div>
    );
  }
}

// screen: 3:4
// frame: 0.85
