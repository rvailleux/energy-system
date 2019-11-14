import React from 'react';
import logo from './logo.svg';
import ReactCytoscape from 'react-cytoscape';
import './App.css';

function App() {
  return (
    <ReactCytoscape containerID="cy" 
    elements={this.getElements()} 
    cyRef={(cy) => { this.cy = cy; console.log(this.cy) }} 
    cytoscapeOptions={{wheelSensitivity: 0.1}}
    layout={{name: 'dagre'}} />
  );
}

export default App;
