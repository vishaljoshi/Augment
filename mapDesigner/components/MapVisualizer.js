import React, { Component, PropTypes } from 'react';

import * as canvasUtil from './CanvasUtil'

const containerStyle = {
  marginTop: 20,
  marginRight: 5
};

const canvasFloorPlanStyle = {
	position: "absolute",
	boxShadow: "0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.12)"
}

export default class MapVisualizer extends Component {
	static propType = {
		actions: PropTypes.object.isRequired,
		floorMap: PropTypes.object.isRequired
	};

	componentDidUpdate(prevProps, prevState) {
		//console.log('redraw canvas', this.props.floorMap)
		canvasUtil.redrawCanvas(this.props.floorMap.image, this.props.floorMap.beacons, this.props.floorMap.routes);
	}

	shouldComponentUpdate(nextProps, nextState) {
		//console.log('shouldComponentUpdate in map visualizer', nextProps, nextState);

		if (typeof nextProps.floorMap != 'undefined') {
			let hasChanges = nextProps.floorMap.image != this.props.floorMap.image ||
				  		 	 nextProps.floorMap.beacons != this.props.floorMap.beacons ||
	  		 				 nextProps.floorMap.routes  != this.props.floorMap.routes;
	  		//console.log('hasChanges for map visualizer:', hasChanges);
	  		return hasChanges;
		} else {
			//console.log('return false for shouldComponentUpdate as floorMap is undefined in map visualizer');
			return false;
		}
	}

	render() {
		return (
			<div style={containerStyle}>
				<img id="beacon" src="assets/images/beacon_small.png" style={{display: 'none'}}/>
				<canvas id="floorplan-canvas" style={canvasFloorPlanStyle}/>
			</div>
		);
	}
}
