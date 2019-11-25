import React from 'react';
import SystemBenchmark from './model/systemBenchmarkClass';
import { throws } from 'assert';


export default class SystemMonitoring extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            systemBenchmark: props.systemBenchmark
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => { this.setState({ time: Date.now() }) }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                {this.state.systemBenchmark.systemInstances.map((system, index) =>
                    <div key={index}>
                        <h1></h1>
                        <p>Ticker: {system.tickerTracker}</p>
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
                                {system.agents.map(agent =>
                                    <tr key={agent.id}>
                                        <td key={agent.id + '-id'}>{agent.id}</td>
                                        <td key={agent.id + '-inbox'}>{agent.messageManager.inbox.length}</td>
                                        <td key={agent.id + '-sendbox'}>{agent.messageManager.sendbox.length}</td>
                                        <td key={agent.id + '-sendqueue'}>{agent.messageManager.sendqueue.length}</td>
                                        <td key={agent.id + '-sentbox'}>{agent.messageManager.sentbox.length}</td>
                                        <td key={agent.id + '-energyjauge'}>{agent.energyJauge}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        );
    }
}