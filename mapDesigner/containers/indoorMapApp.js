import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import * as indoorMapActions from '../actions/indoorMapActions';

class IndoorMapApp extends Component {
   render() {
	 const { dispatch, indoorMapState } = this.props

     return (
       <div>
	   		<Main indoorMapState={indoorMapState} />
       </div>
     );
   }
}

function select(state) {
  return {
    indoorMapState: state
  }
}

export default connect(select)(IndoorMapApp)