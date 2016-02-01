import React, { Component, PropTypes } from 'react';

import * as canvasUtil from './CanvasUtil'

const containerStyle = {
  marginTop: 20,
  marginRight: 5
};

const canvasDrawingStyle = {
	position: "absolute"
}

export default class MapDrawing extends Component {
	static propType = {
		actions: PropTypes.object.isRequired,
		editor: PropTypes.object.isRequired
	};

	plot(e) {
		//console.log('plot with pen', this.props.pen);

		if (this.props.editor.pen === 'beacon') {
			let id = canvasUtil.unqiueId();
			let pos = canvasUtil.getBeaconMousePos(e);
			this.props.actions.setBeacon(id, pos.x, pos.y);
		} else if (this.props.editor.pen === 'route') {
			let id = canvasUtil.unqiueId();
			let pos = canvasUtil.getMousePos(e);
			this.props.actions.setRoute(id, pos.x, pos.y);
		}
	}

	previewRoute(e) {
		if (this.props.editor.pen === 'route') {
			let pos = canvasUtil.getMousePos(e);
			this.props.actions.setEndRoutePreview(pos.x, pos.y);
		}
	}

	cancelPlotRoute(e) {
		e.preventDefault();

		if (this.props.editor.pen === 'route') {
			this.props.actions.cancelRoute();
		}
	}

	componentDidUpdate(prevProps, prevState) {
		//console.log('redraw drawing canvas', this.props.editor)

		if (this.props.editor.currentRoute == null || this.props.editor.endRoutePreview == null) {
			canvasUtil.clearDrawingCanvas();
		} else {
			canvasUtil.drawLinePreview(this.props.editor.currentRoute.startx, this.props.editor.currentRoute.starty,
				this.props.editor.endRoutePreview.x, this.props.editor.endRoutePreview.y);
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		//console.log('shouldComponentUpdate in canvas drawing', nextProps, this.props.editor);

		if (typeof nextProps.editor != 'undefined') {
			let hasChanges = nextProps.editor.currentRoute  != this.props.editor.currentRoute ||
							 nextProps.editor.endRoutePreview  != this.props.editor.endRoutePreview;
			//console.log('hasChanges for canvas drawing:', hasChanges);
			return hasChanges;
		} else {
			//console.log('return false for shouldComponentUpdate as editor is undefined in canvas drawing');
			return false;
		}
	}

	render() {
		return (
			<div style={containerStyle}>
				<canvas id="drawing-canvas" style={canvasDrawingStyle} onClick={e => this.plot(e)}
					onMouseMove={e => this.previewRoute(e)} onContextMenu={e => this.cancelPlotRoute(e)} />
			</div>
		);
	}
}
