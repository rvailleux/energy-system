import Connection from './connectionClass'


export default class Agent {
    constructor(parentSystem) {
        this.parentSystem = parentSystem;
        this.connections = [];
        this.id = Agent.getNewAgentId()
    }

    addConnection(neighbourgAgent) {
        let newConnection = new Connection(this, neighbourgAgent);
        this.connections.push(newConnection);
        neighbourgAgent.ackConnection(this);

        return newConnection;
    }

    ackConnection(fromAgent) {
        this.connections.push(fromAgent);
    }

    toString() {
        let returnString = "Agent " + this.id + " (" + this.connections.length + " connections): \n";

        this.connections.forEach(connection => {
            returnString += "- " + connection.toString()+"\n";
        });

        return returnString;
    }

    static getNewAgentId() {
        return Agent.agentIDCount++;
    }
}

Agent.agentIDCount = 0;