import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';

const containerStyle = {
  height: 300,
  margin: 20,
  textAlign: 'center'
};


export default class Routes extends Component {
	static propType = {
		routes: PropTypes.object.isRequired
	};

	routeInfoChange(e, route) {
		//console.log('Route is changed', route);
		this.props.actions.updateRoute(route);
	}

	render() {
		let routeNodes = this.props.routes.toIndexedSeq().map((route, idx) => {
			//console.log(route, idx)
			let routeItem = Object.assign({}, route);

			return (
				<div key={routeItem.id} className='route'>
					<label>{idx+1}.&nbsp;</label>
					<input type="text" value={routeItem.name} placeholder="Route Name" size="30" onChange={ e => {routeItem.name=e.target.value; this.routeInfoChange(e, routeItem)} } />
				</div>
			)
		})

		return (
			<Paper style={containerStyle}>
				<h5>Routes</h5>
				{routeNodes}
			</Paper>
		);
	}
}