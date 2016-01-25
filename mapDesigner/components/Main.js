import React, { Component, PropTypes } from 'react';
import { SET_MAP_NAME } from '../constants/ActionTypes';

export default class Main extends Component {
  static propTypes = {
    indoorMapState: PropTypes.object.isRequired
  };

//   constructor() {

//   }

  render() {
    return (
      <div>Main component Indoor Map</div>
    );
  }
}
