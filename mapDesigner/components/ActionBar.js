import React, { Component, PropTypes } from 'react';

import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

import {setPen, save} from '../actions/indoorMapActions';

const toolbarSeparatorStyle = {
	marginRight: '12px'
}

export default class ActionBar extends Component {
	static propTypes = {
		actions: PropTypes.object.isRequired,
		pen: PropTypes.string
	};

	handleFileSelect(e) {
		var reader = new FileReader();
		var file = e.target.files[0];

		// this is to setup loading the image
		reader.onloadend = (function() {
			this.props.actions.setFloorImage(reader.result);
		}).bind(this);

		// this is to read the file
		reader.readAsDataURL(file);
	}

	render() {
		const {setPen, saveMap} = this.props.actions

		return (
			<Toolbar>
				<ToolbarGroup firstChild={true}>
					<RaisedButton label="Select Floor Plan Image" onClick={() => document.getElementById('floorplan-file').click()}/>
					<input type="file" id="floorplan-file" style={{display: 'none'}} onChange={e => this.handleFileSelect(e)} />
				</ToolbarGroup>


				<ToolbarGroup>
					<ToolbarSeparator style={toolbarSeparatorStyle} />
					<ToolbarTitle text="Draw"/>

					<FlatButton label="Beacon" onClick={e => setPen('beacon')} secondary={this.props.pen === 'beacon'}/>
					<FlatButton label="Route" onClick={e => setPen('route')}  secondary={this.props.pen === 'route'}/>

				</ToolbarGroup>

				<ToolbarGroup float="right">
					<ToolbarTitle text="I'm done"/>
					<RaisedButton label="Save Changes" primary={true} onClick={e => saveMap()}/>
				</ToolbarGroup>
			</Toolbar>
		);
	}
}