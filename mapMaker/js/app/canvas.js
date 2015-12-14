var React = require('react');
var canvasFunc = require('./canvasFunc');

module.exports = React.createClass({
  componentDidMount: function() {
	console.log('Mounting canvas with pen ' + this.props.pen);
	//this.redrawCanvas();
  },

  componentDidUpdate: function(prevProps, prevState) {
    this.redrawCanvas();
  },

  shouldComponentUpdate: function(nextProps, nextState) {
	  //console.log(this.props.beaconsPlotted);
	  //console.log(nextProps.beaconsPlotted);

	  var hasChanges = nextProps.floorPlanImg != this.props.floorPlanImg ||
	  		 nextProps.beaconsPlotted != this.props.beaconsPlotted ||
	  		 nextProps.routesPlotted != this.props.routesPlotted;

	  console.log('Has changes for component update? ' + hasChanges);

	  return hasChanges;
  },

  redrawCanvas: function() {
	  //console.log('Redrawing canvas.......');
	  canvasFunc.redrawCanvas(this.props.floorPlanImg, this.props.beaconsPlotted, this.props.routesPlotted);
  },

  plot: function(e) {
	console.log('plot with pen ' + this.props.pen);
	var newItem = canvasFunc.plot(e, this.props.pen);

	console.log('New item plotted ' + newItem);

	if (this.props.pen === 'beacon') {
		this.props.onAddBeacon(newItem);
	} else if (this.props.pen === 'route' && newItem != null) {
		this.props.onAddRoute(newItem);
	}

    //this.redrawCanvas();
  },

  previewRoute: function(e) {
	//console.log('previewRoute ' + this.props.pen);
	if (this.props.pen === 'route') {
		this.redrawCanvas();
		canvasFunc.previewRoute(e);
	}
  },

  resetAction: function(e) {
	console.log('resetAction');
	e.preventDefault();

	if (this.props.pen === 'route') {
		canvasFunc.cancelDrawRoute(e);
		this.redrawCanvas();
	}
  },


  render: function() {
    return (
		<canvas id="floorplan-canvas" className="floor-plan" onClick={this.plot} onMouseMove={this.previewRoute} onContextMenu={this.resetAction}>
		</canvas>
    );
  }
});

