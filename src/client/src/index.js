import React from 'react';
import ReactDOM from 'react-dom';
import { Graph } from 'react-d3-graph';
import System from './model/systemClass';
import SystemPlayer from './SystemPlayer';

const system = new System(10,3);

const myConfig = {
    nodeHighlightBehavior: true,
    node: {
        color: 'lightgreen',
        size: 120,
        highlightStrokeColor: 'blue'
    },
    link: {
        highlightColor: 'lightblue'
    },
    height: 800,
    width: 1024,
};

myConfig.d3 = {
    gravity: -2550
};


  // ========================================
  ReactDOM.render(
    <SystemPlayer
     id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
     config={myConfig} 
     systemInstance={system}/>,
    document.getElementById('root')
  );