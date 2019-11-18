import React from 'react';


export default class SystemMonitoring extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            systemInstance : props.systemInstance,
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
                <p>{ JSON.stringify(this.state.systemInstance.toGraph())}</p>
            </div>
        );
    }
}