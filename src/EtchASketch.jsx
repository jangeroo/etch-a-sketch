import React, { Component } from 'react';

const scale = 1;
const frameWidth = 85;

const frameStyling = {
  backgroundColor: 'blue',
  height: 300 * scale + 2 * frameWidth + 'px',
  width: 400 * scale + 2 * frameWidth + 'px',
  position: 'relative',
  borderRadius: 5 * scale + 'px',
};

const screenStyling = {
  backgroundColor: 'lightGrey',
  height: `calc(100% - ${2 * frameWidth}px)`,
  width: `calc(100% - ${2 * frameWidth}px)`,
  position: 'absolute',
  top: frameWidth + 'px',
  left: frameWidth + 'px',
  borderRadius: 10 * scale + 'px',
};

const controlsStyling = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
  bottom: '0px',
  padding: '10px',
  boxSizing: 'border-box',
};

const knobStyling = {
  height: 80 + 'px',
  width: 80 + 'px',
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
