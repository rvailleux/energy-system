import React from 'react';
import { Graph } from 'react-d3-graph';
import Message from './model/messageClass';
import SystemMonitoring from './systemMonitoring';


export default class SystemPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      config: props.config,
      systemBenchmark: props.systemBenchmark,
      ticker: 0
    };
  }

  componentDidMount() {
    this.state.systemBenchmark.seedMessages();
    this.state.systemBenchmark.startTicks();
  }

  componentWillUnmount() {
    this.state.systemBenchmark.stopTicks();
  }

  render() {
    return (
      <div className="graphContainer">
        <div>
          <SystemMonitoring
          id='systemMonitoring'
            systemBenchmark={this.state.systemBenchmark} />
        </div>
      </div>
    );
  }
}

{/* <Graph
          id='graph-id'
          data={this.state.systemBenchmark.systemInstance.toGraph()}
          config={this.state.config} /> */}