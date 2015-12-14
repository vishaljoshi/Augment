var React = require('react');

module.exports = React.createClass({
  render: function() {
	var routeNodes = this.props.routesPlotted.map(
		(function(route, idx) {
			return (
				<div key={route.id}>
					<label>{idx+1}.&nbsp;</label>
					<input type="text" value={route.name} placeholder="Enter a name for the route" onChange={this.props.onNameChange.bind(null, route.id)} />
				</div>
			);
		}).bind(this)
	);

    return (
		<div className="panel panel-info">
		  <div className="panel-heading">Route(s) on map</div>
		  <div className="panel-body">
			{routeNodes}
		  </div>
		</div>
    );
  }
});