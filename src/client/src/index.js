import React from 'react';
import ReactDOM from 'react-dom';
import { Graph } from 'react-d3-graph';
import System from './model/systemClass';

const system = new System(10,2);

const data = system.toGraph();

const myConfig = {
    nodeHighlightBehavior: true,
    node: {
        color: 'lightgreen',
        size: 120,
        highlightStrokeColor: 'blue'
    },
    link: {
        highlightColor: 'lightblue'
    }
};


  // ========================================
  ReactDOM.render(
    <Graph
     id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
     data={data}
     config={myConfig} />,
    document.getElementById('root')
  );