var React = require('react');
var ReactDOM = require('react-dom');
var Canvas = require('./canvas');
var Toolbar = require('./toolbar');
var BeaconPanel = require('./beaconPanel');
var RoutePanel = require('./routePanel');

var Mapper = React.createClass({
  getInitialState: function() {
	return {pen: "beacon",
			floorPlanImg: null,
			beaconsPlotted: [],
			routesPlotted: []
	};
  },

  handlePenChange: function(newPen) {
	console.log('new pen ' + newPen);
	this.setState({pen: newPen});
  },

  handleAddBeacon: function(newBeacon) {
	  //var cloneBeaconsPlotted = this.state.beaconsPlotted.concat([newBeacon]);
	  var cloneBeaconsPlotted = this.state.beaconsPlotted.slice(0);
	  cloneBeaconsPlotted.push(newBeacon);

	  this.setState({beaconsPlotted: cloneBeaconsPlotted});
  },

  handleAddRoute: function(newRoute) {
	  var cloneRoutesPlotted = this.state.routesPlotted.slice(0);
	  cloneRoutesPlotted.push(newRoute);

	  this.setState({routesPlotted: cloneRoutesPlotted});
  },

  handleFloorPlanChange: function(imageSrc) {
  	var img = new Image();
	img.src = imageSrc;

	img.onload = (function() {
		//console.log('img.onload>>>>>');
		this.setState({floorPlanImg: img});
	}).bind(this);
  },

  handleBeaconNameChange: function(id, e) {
	  //console.log(e.target.value + "| " + id);
	  for (var i=0; i<this.state.beaconsPlotted.length; i++) {
		  //console.log(this.state.beaconsPlotted[i].id);
		  if (this.state.beaconsPlotted[i].id == id) {
			  console.log('Updating beacon with id ' + id + ' with new name ' + e.target.value);
			  this.state.beaconsPlotted[i].name = e.target.value;
			  this.setState({beaconsPlotted: this.state.beaconsPlotted});
			  break;
		  }
	  }
  },

  handleBeaconUUIDChange: function(id, e) {
	  for (var i=0; i<this.state.beaconsPlotted.length; i++) {
		  if (this.state.beaconsPlotted[i].id == id) {
			  console.log('Updating beacon with id ' + id + ' with new uuid ' + e.target.value);
			  this.state.beaconsPlotted[i].uuid = e.target.value;
			  this.setState({beaconsPlotted: this.state.beaconsPlotted});
			  break;
		  }
	  }
  },

  handleRouteNameChange: function(id, e) {
	  for (var i=0; i<this.state.routesPlotted.length; i++) {
		  if (this.state.routesPlotted[i].id == id) {
			  console.log('Updating route with id ' + id + ' with new name ' + e.target.value);
			  this.state.routesPlotted[i].name = e.target.value;
			  this.setState({routesPlotted: this.state.routesPlotted});
			  break;
		  }
	  }
  },

  save: function() {
	  console.log('Saving...');
	$.ajax({
	  url: "http://sv2lxmkpd01:9000/maps/1"
	}).done(function(data) {
	  console.log(data);
	});
  },

  render: function() {
    return (
		<div>
			<div className="col-md-8">
				<Canvas pen={this.state.pen} floorPlanImg={this.state.floorPlanImg} beaconsPlotted={this.state.beaconsPlotted} routesPlotted={this.state.routesPlotted}
					onAddBeacon={this.handleAddBeacon} onAddRoute={this.handleAddRoute} />
			</div>
			<div className="col-md-4">
				<div>
					<Toolbar pen={this.state.pen} onFloorPlanImgChange={this.handleFloorPlanImgChange} onPenChange={this.handlePenChange}
						onFloorPlanSelected={this.handleFloorPlanChange} />
				</div>
				<div>
					<form>
						<div className="form-group">
							<input type="button" className="btn btn-success" value="Save" onClick={this.save} />
						</div>
					</form>
				</div>
				<div>
					<BeaconPanel beaconsPlotted={this.state.beaconsPlotted} onNameChange={this.handleBeaconNameChange}
						onUUIDChange={this.handleBeaconUUIDChange}/>
					<RoutePanel routesPlotted={this.state.routesPlotted} onNameChange={this.handleRouteNameChange} />
				</div>
			</div>
		</div>
    );
  }
});

ReactDOM.render(
  <Mapper/>,
  document.getElementById('mapper-placeholder')
);