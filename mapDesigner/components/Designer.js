import React, { Component, PropTypes } from 'react';

import ActionBar from './ActionBar';
import MapVisualizer from './MapVisualizer';
import MapDrawing from './MapDrawing';
import Beacons from './Beacons';
import Routes from './Routes';

export default class Designer extends Component {
	static propTypes = {
		actions: PropTypes.object.isRequired,
		indoorMapState: PropTypes.object.isRequired
	};

	render() {
		return (
			<div>
				<ActionBar actions={this.props.actions} pen={this.props.indoorMapState.editor.pen} />

				<div style={{width: '30%', display: 'inline-block', verticalAlign: 'top'}}>
					<Beacons/>
					<Routes/>
				</div>
				<div  style={{width: '70%', display: 'inline-block', verticalAlign: 'top'}}>
					<MapVisualizer actions={this.props.actions} floorMap={this.props.indoorMapState.floorMap}/>
					<MapDrawing actions={this.props.actions} editor={this.props.indoorMapState.editor}/>
				</div>
			</div>
		);
	}
}