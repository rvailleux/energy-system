import React from 'react';
import { Graph } from 'react-d3-graph';


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
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      tick(){
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
              </div>
              );
      }
}