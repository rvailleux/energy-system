import Connection from './connectionClass'
import MessageManager from './messageManagerClass';


export default class Agent {
    constructor(parentSystem, agentId = null) {
        this.parentSystem = parentSystem;
        this.connections = [];
        if(agentId !== null){
            if(this.parentSystem.getAgentById(agentId) === null){
                this.id = agentId;
            } else 
                throw new Error("Can't instanciate two agents with the same id "+ agentId);
        } else 
            this.id = Agent.getNewAgentId();

        this.messageManager = new MessageManager(this);
        this.energyJauge = 0;
    }

    addConnection(neighbourgAgent) {

        if(this.neighbourgs.includes(neighbourgAgent))
            throw new Error("Connection from " + this.id+" to "+ neighbourgAgent.id + " already exists.");

        let newConnection = new Connection(this, neighbourgAgent);
        this.connections.push(newConnection);
        neighbourgAgent.ackConnection(newConnection);

        return newConnection;
    }

    ackConnection(connection) {
        this.connections.push(connection);
    }

    removeConnection(connectionToRemove) {
        this.connections = this.connections.filter((connection, index) => {
            return connection.id !== connectionToRemove.id;
        });
    }

    clearAllConnections() {
        while (this.connections.length > 0) {
            let connectionToRemove = this.connections[0];
            connectionToRemove.disconnectAgents();
        }
    }

    get neighbourgs() {
        return this.connections.length > 0 ? this.connections.map(connection => {
            return connection.agents[0].id === this.id ? connection.agents[1] : connection.agents[0]
        }) : [];
    }

    ackMessage(msgObject) {
        return this.messageManager.receiveMessage(msgObject);
    }

    seedMessage(msgObject) {
        //simulate the reception of a new message
        this.messageManager.receiveMessage(msgObject);
    }

    diffuseMessagesToNeighbourgs() {
        this.energyJauge = this.messageManager.sendMessages(this.energyJauge);
    }

    feedEnergy(amount){
        this.energyJauge = ((this.energyJauge + amount) > this.parentSystem.options.maxEnergyHarvestPerAgent ? this.parentSystem.options.maxEnergyHarvestPerAgent : this.energyJauge + amount);
    }

    toGraph() {
        return { id: this.id };
    }

    toString() {
        let returnString = "Agent id: " + this.id + "\n";

        returnString += "Connections number: " + this.connections.length;

        return returnString;
    }

    static getAgentFromGraphML(graphMLNodeObject, systemObject){
            if(graphMLNodeObject !== undefined){
                if(systemObject.getAgentById(graphMLNodeObject.id) != null){
                    throw new Error("Can't load graphML, already existing agent id "+graphMLNodeObject.id);
                }
                else {
                    let newAgent = new Agent(systemObject, graphMLNodeObject.id);
                    return newAgent;
                }
            }

            return null;
    }
    
    static getNewAgentId() {
        return "AGENT" + Agent.agentIDCount++;
    }
}


Agent.agentIDCount = 0;