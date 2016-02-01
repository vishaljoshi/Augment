import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';

const containerStyle = {
  height: 300,
  margin: 20,
  textAlign: 'center'
};

export default class Beacons extends Component {
  render() {
    return (
		<Paper style={containerStyle}>
			<h5>Beacons</h5>


		</Paper>
    );
  }
}

Beacons.propType = {
	//beaconMap: PropTypes.object.isRequired
}