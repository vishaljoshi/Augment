import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import * as indoorMapActions from '../actions/indoorMapActions';

class IndoorMapApp extends Component {
	static propType = {
		dispatch: PropTypes.func.isRequired
	};

	render() {
		const actions = bindActionCreators(indoorMapActions, this.props.dispatch);

		return (
			<div>
				<Main indoorMapState={this.props.indoorMapState} actions={actions} />
			</div>
		);
	}
}

function select(state) {
  return {
    indoorMapState: state.indoorMap
  }
}

export default connect(select)(IndoorMapApp)