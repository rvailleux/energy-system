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
        neighbourgAgent.ackConnection(newConnection);

        return newConnection;
    }

    ackConnection(connection) {
        this.connections.push(connection);
    }

    removeConnection(connectionToRemove){
        this.connections = this.connections.filter((connection,index) => {
            return connection.id !== connectionToRemove.id;
        });
    }

    clearAllConnections(){
        while(this.connections.length > 0){
            let connectionToRemove = this.connections[0];
            connectionToRemove.disconnectAgents();            
        }
    }

    get neighbourgs(){

    return this.connections.length > 0 ? this.connections.map(connection => {
        if(connection.agents === undefined)
            return null;

        return connection.agents[0].id === this.id ? connection.agents[1] : connection.agents[0]}) : null;
    }

    toGraph(){
        return {id: this.id};
    }

    toString() {
        let returnString = "Agent id: "+this.id+"\n";;;;;

        returnString += "Connections number: "+ this.connections.length;

        return returnString;
    }

    static getNewAgentId() {
        return Agent.agentIDCount++;
    }
}

Agent.agentIDCount = 0;