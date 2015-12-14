var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
	return { penClassNames: {'beacon': 'btn-primary', 'route': 'btn-default'} };
  },

  componentDidMount: function() {
	console.log('Setting pen className for ' + this.props.pen);
	this.setPenClassName(this.props.pen);
  },

  choosePen: function(e) {
	this.props.onPenChange(e.target.value);
	this.setPenClassName(e.target.value);
  },

  setPenClassName: function(newPen) {
	  var newPenClassNames = {'beacon': 'btn-default', 'route': 'btn-default'};
	  newPenClassNames[newPen] = 'btn-primary';
	  this.setState({penClassNames: newPenClassNames});
  },

  handleFileSelect: function(e) {
    var reader = new FileReader();
    var file = e.target.files[0];

    //imgFloorPlan = new Image();

    //imgFloorPlan.onload = function() {
  	//  redrawCanvas();
    //}

    // this is to setup loading the image
    reader.onloadend = (function() {
  	  //imgFloorPlan.src = reader.result;
  	  //console.log('Invoking callback from file upload reader ' + this.props.onFloorPlanSelected)
  	  this.props.onFloorPlanSelected(reader.result);
    }).bind(this);

    // this is to read the file
    reader.readAsDataURL(file);
  },

  render: function() {
    return (
		<form>
			<div className="panel panel-primary">
			  <div className="panel-heading">Edit map</div>
			  <div className="panel-body">
					<div className="form-group">
						<label>Choose floor plan image</label>
						<input type="file" id="floorplan-file" className="btn btn-default" onChange={this.handleFileSelect} />
					</div>

					<div className="form-group">
						<label>Select map object</label>
						<div className="btn-group" role="group" style={{padding: '4px'}}>
						  <button type="button" className={"btn " + this.state.penClassNames.beacon} onClick={this.choosePen} value="beacon">Beacon</button>
						  <button type="button" className={"btn " + this.state.penClassNames.route} onClick={this.choosePen} value="route">Route</button>
						</div>
					</div>
			  </div>
			</div>
		</form>
    );
  }
});


