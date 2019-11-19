import React from 'react';
import SystemBenchmark from './model/systemBenchmarkClass';


export default class SystemMonitoring extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            systemBenchmark : new SystemBenchmark({
                nbAgents: {
                    min:2,
                    max: 10
                },
                nbConnectionsPerAgent:3,
                nbMessageSeed: 40, 
                energyFeedPerTick: 5,
                messageSize: 1,
                systemInstance: props.systemInstance
            }),
            systemInstance: props.systemInstance
        };
    }

    render(){
        return(
            <div>
                <table>
                <thead> 
                    <tr>
                    <td>id</td>
                    <td>Inbox</td>
                    <td>sendbox</td>
                    <td>sendqueue</td>
                    <td>sentbox</td>
                    <td>energy</td>
                    </tr>   
                </thead>
                <tbody>
                {this.state.systemInstance.agents.map(agent => 
                <tr>
                    <td>{agent.id}</td>
                    <td>{agent.messageManager.inbox.length}</td>
                    <td>{agent.messageManager.sendbox.length}</td>
                    <td>{agent.messageManager.sendqueue.length}</td>
                    <td>{agent.messageManager.sentbox.length}</td>
                    <td>{agent.energyJauge}</td>
                </tr>
                )}
                </tbody>
                </table>
                <p>{JSON.stringify(this.state.systemBenchmark.getTickReport())}</p>
            </div>
        );
    }
}