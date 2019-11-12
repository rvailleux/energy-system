

export default class Connection{

    constructor(agentA, agentB){
        this.agents = [agentA, agentB];        
    }

    toString(){
        return this.agents[0] + " <-> " + this.agent[1];
    }
}

Connection.connectionsLibrary = [];