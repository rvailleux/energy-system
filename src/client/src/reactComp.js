import React from 'react';
import CytoscapeComponent from 'react-cytoscape';

export default class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );
    }
  }