

export default class Connection{

    constructor(agentA, agentB){
        this.agents = [agentA, agentB];
        this.id = Connection.getNewConnectionId();
    }

    getPairAgent(differentFromThisAgent){
        return this.agents[0].id !== differentFromThisAgent ? this.agents[0] : this.agents[1];
    }

    disconnectAllAgents(){
        if(this.agents[0] != null)
            this.agent[0].removeConnection(this) ;

        if(this.agents[1] != null)
            this.agent[1].removeConnection(this) ;

        return
    }

    toGraph(){
        return { source: this.agents[0].id, target: this.agents[1].id};
    }

    toString(){
        return "";
    }

    static getNewConnectionId(){
        return "CONNECTION"+Connection.connectionIdCount++;
    }
}

Connection.connectionIdCount = 0