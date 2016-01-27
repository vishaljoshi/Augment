import React, { Component, PropTypes } from 'react';

import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';

//import { SET_MAP_NAME } from '../constants/ActionTypes';

const toolbarSeparatorStyle = {
	marginRight: '12px'
}

const plottedStyle = {
  height: 350,
  width: 400,
  margin: 20,
  textAlign: 'center'
};

export default class Designer extends Component {
  render() {
    return (
		<div>
			<Toolbar>
			    <ToolbarGroup firstChild={true}>
			    	<RaisedButton label="Select Floor Plan Image"/>
			    </ToolbarGroup>


			    <ToolbarGroup>
			    	<ToolbarSeparator style={toolbarSeparatorStyle} />
					<ToolbarTitle text="Draw"/>

	 				<FlatButton label="Beacon" />
	 				<FlatButton label="Route" />

			    </ToolbarGroup>

			    <ToolbarGroup float="right">
					<ToolbarTitle text="I'm done"/>
					<RaisedButton label="Save Changes" primary={true} />
			    </ToolbarGroup>
  			</Toolbar>

  			<Paper style={plottedStyle}>
  				<h5>Beacons</h5>
  			</Paper>
  			<Paper style={plottedStyle}>
  				<h5>Routes</h5>
  			</Paper>
		</div>
    );
  }
}

Designer.propType = {
	indoorMapState: PropTypes.object.isRequired
}