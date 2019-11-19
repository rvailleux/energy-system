import React from 'react';
import ReactDOM from 'react-dom';
import System from './model/systemClass';
import SystemPlayer from './SystemPlayer';

let graphML = {"nodes":[{"id":"AGENT0"},{"id":"AGENT1"},{"id":"AGENT2"},{"id":"AGENT3"},{"id":"AGENT4"},{"id":"AGENT5"},{"id":"AGENT6"},{"id":"AGENT7"},{"id":"AGENT8"},{"id":"AGENT9"}],"links":[{"source":"AGENT0","target":"AGENT5"},{"source":"AGENT0","target":"AGENT4"},{"source":"AGENT0","target":"AGENT2"},{"source":"AGENT1","target":"AGENT3"},{"source":"AGENT1","target":"AGENT6"},{"source":"AGENT1","target":"AGENT4"},{"source":"AGENT2","target":"AGENT8"},{"source":"AGENT2","target":"AGENT4"},{"source":"AGENT3","target":"AGENT7"},{"source":"AGENT3","target":"AGENT8"},{"source":"AGENT5","target":"AGENT8"},{"source":"AGENT5","target":"AGENT6"},{"source":"AGENT6","target":"AGENT7"},{"source":"AGENT9","target":"AGENT6"},{"source":"AGENT7","target":"AGENT9"}], energyAmountFedPerTick: 5};
const system = System.getSystemFromGraphML(graphML);



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
    gravity: -1550
};


  // ========================================
  ReactDOM.render(
    <SystemPlayer
     id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error
     config={myConfig} 
     systemInstance={system}/>,
    document.getElementById('root')
  );