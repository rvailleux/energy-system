

export default class Connection{

    constructor(agentA, agentB){
        this.agents = [agentA, agentB];
        this.id = Connection.getNewConnectionId();
    }

    disconnectAllAgents(){
        if(this.agents[0] != null)
            this.agent[0].removeConnection(this) ;

        if(this.agents[1] != null)
            this.agent[1].removeConnection(this) ;

        return
    }

    toString(){
        return "";
    }

    static getNewConnectionId(){
        return Connection.connectionIdCount++;
    }
}

Connection.connectionIdCount = 0