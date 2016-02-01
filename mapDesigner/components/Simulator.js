import React, { Component, PropTypes } from 'react';

import MapVisualizer from './MapVisualizer';

export default class Simulator extends Component {
  render() {
    return (
		<div>
			<div style={{width: '30%', display: 'inline-block', verticalAlign: 'top'}}>
				TODO
			</div>
			<div  style={{width: '70%', display: 'inline-block', verticalAlign: 'top'}}>
				<MapVisualizer/>
			</div>
		</div>
    );
  }
}

Simulator.propType = {
	//indoorMapState: PropTypes.object.isRequired
}