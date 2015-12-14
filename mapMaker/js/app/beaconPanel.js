var React = require('react');

module.exports = React.createClass({
  mouseOver: function() {
	console.log('Mouse over');
  },

  render: function() {
	var beaconNodes = this.props.beaconsPlotted.map(
		(function(beacon, idx) {
			return (
				<div key={beacon.id} onMouseOver={this.mouseOver}>
					<label>{idx+1}.</label>
					<input type="text" value={beacon.name} placeholder="Enter a name for the route" onChange={this.props.onNameChange.bind(null, beacon.id)} />
					<label> ~ </label>
					<input type="text" value={beacon.uuid} placeholder="Beacon UUID"  onChange={this.props.onUUIDChange.bind(null, beacon.id)} />
				</div>
			);
		}).bind(this)
	);

    return (
		<div className="panel panel-info">
		  <div className="panel-heading">Beacon(s) on map</div>
		  <div className="panel-body">
			{beaconNodes}
		  </div>
		</div>
    );
  }
});