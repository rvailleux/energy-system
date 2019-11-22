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
      nbMessagesToSeed: props.messagesToSeed || 1,
      ticker: 0
    };
  }

  componentDidMount() {
    this.state.systemBenchmark.startTicks();
    this.state.systemBenchmark.seedMessages();
  }

  componentWillUnmount() {
    this.state.systemBenchmark.stopTicks();
  }

  render() {
    return (
      <div className="graphContainer">
        <div>
          <p>Ticker: {this.state.systemBenchmark.systemInstance.tickerTracker}</p>
          <SystemMonitoring
            systemBenchmark={this.state.systemBenchmark} />
        </div>

        <Graph
          id='graph-id'
          data={this.state.systemBenchmark.systemInstance.toGraph()}
          config={this.state.config} />
      </div>
    );
  }
}