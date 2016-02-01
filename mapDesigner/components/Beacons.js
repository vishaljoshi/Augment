import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';

const containerStyle = {
  height: 300,
  margin: 20,
  textAlign: 'center'
};

export default class Beacons extends Component {
	static propType = {
		beacons: PropTypes.object.isRequired
	};

	beaconInfoChange(e, beacon) {
		//console.log('Beacon is changed', beacon);
		this.props.actions.updateBeacon(beacon);
	}

	mouseOver(e) {
		//console.log('Mouse over', e);
	}

	mouseOut(e) {
		//console.log('Mouse out', e);
	}

	render() {
		//console.log('beacons to display', this.props.beacons.values());

		let beaconNodes = this.props.beacons.toIndexedSeq().map((beacon, idx) => {
			//console.log(beacon, idx)
			let beaconItem = Object.assign({}, beacon);

			return (
				<div key={beaconItem.id} className='beacon' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
					<label>{idx+1}.&nbsp;</label>
					<input type="text" value={beaconItem.name} placeholder="Beacon Name" size="15" onChange={ e => {beaconItem.name=e.target.value; this.beaconInfoChange(e, beaconItem)} } />
					<label> ~ </label>
					<input type="text" value={beaconItem.uuid} placeholder="Beacon UUID" size="20" onChange={ e => {beaconItem.uuid=e.target.value; this.beaconInfoChange(e, beaconItem)} } />
					<label> ~ </label>
					<input type="text" value={beaconItem.major} placeholder="Major" size="3" onChange={ e => {beaconItem.major=e.target.value; this.beaconInfoChange(e, beaconItem)} } />
					<label> ~ </label>
					<input type="text" value={beaconItem.minor} placeholder="Minor" size="3" onChange={ e => {beaconItem.minor=e.target.value; this.beaconInfoChange(e, beaconItem)} } />
				</div>
			)
		})

		return (
			<Paper style={containerStyle}>
				<h5>Beacons</h5>
				{beaconNodes}
			</Paper>
		);
	}
}
