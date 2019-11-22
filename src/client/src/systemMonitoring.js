import React from 'react';
import SystemBenchmark from './model/systemBenchmarkClass';


export default class SystemMonitoring extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            systemBenchmark : props.systemBenchmark
        };        

        //this.state.systemBenchmark.statusChangedEvent = () => {console.log('tick')};
    }

    render(){
        return(
            <div>
                <h1>{}</h1>
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
                {this.state.systemBenchmark.systemInstance.agents.forEach(agent => 
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
            </div>
        );
    }
}