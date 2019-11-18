import React from 'react';
import { Graph } from 'react-d3-graph';
import Message from './model/messageClass';
import SystemMonitoring from './systemMonitoring';


export default class SystemPlayer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            config: props.config,
            systemInstance : props.systemInstance,
            ticker: 0
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );

        for(let i = 0 ; i< 40; i++)
            this.state.systemInstance.getRandomAgent().seedMessage(new Message(1));
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      tick(){
        this.state.systemInstance.tickEnergize(1);
        this.state.systemInstance.tickCirculateMessages();
        this.setState((state, props) => ({
            ticker: state.ticker+1
          }));
      }

      render(){
          return (
              <div>
                <div className="graphContainer">
                    <Graph
                    id='graph-id'
                    data={this.state.systemInstance.toGraph()}
                    config={this.state.config} />
                </div>
                <p>Ticker: {this.state.ticker}</p>
                <SystemMonitoring
                systemInstance={this.state.systemInstance}/>          
              </div>
              );
      }
}