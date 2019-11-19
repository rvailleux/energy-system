import Agent from './agentClass'

export default class System {
    constructor(
        numberOfAgents = 0,
        avgConnectionsPerAgent = 0,
        standardDeviationConnections = 0
    ) {
        this.agents = [];
        this.addAgents(numberOfAgents);
        this.distributeConnections(avgConnectionsPerAgent, standardDeviationConnections);
    }

    distributeConnections(avgConnectionsPerAgent, standardDeviationConnections) {

        this.agents.forEach(agent => {

            if (agent.connections.length >= avgConnectionsPerAgent)
                return;

            while (agent.connections.length < avgConnectionsPerAgent) {
                let eligibleAgentsList = this.agents.filter(randomAgent => { return agent.id !== randomAgent.id && !agent.neighbourgs.includes(randomAgent) && randomAgent.connections.length < avgConnectionsPerAgent });


                if (eligibleAgentsList.length > 0) {
                    let randomIndex = Math.round(Math.random() * (eligibleAgentsList.length - 1));
                    agent.addConnection(eligibleAgentsList[randomIndex]);
                } else {
                    let totalRemainerList = this.agents.filter(randomAgent => { return agent.id !== randomAgent.id });
                    if (totalRemainerList.length > 0) {
                        let randomIndex = Math.round(Math.random() * (totalRemainerList.length - 1));
                        agent.addConnection(totalRemainerList[randomIndex]);
                    }

                    break;
                }
            }
            return;
        });
    }

    getAllConnections() {
        let map = this.agents.reduce((connectionMap, agent) => {
            let map = connectionMap;
            agent.connections.forEach(connection => {
                
                connectionMap[connection.id] = connection;
            });

            return map;
        }, {});
        return Object.values(map);
    }

    clearAllConnections() {
        this.agents.forEach(agent => {
            agent.clearAllConnections();
        });
    }

    addAgents(numberOfAgents) {
        for (let i = 0; i < numberOfAgents; i++) {
            this.addAgent();
        }
    }

    addAgent(agentObject = null) {
        
        let newAgent = agentObject === null ? new Agent(this) : agentObject;
        this.agents.push(newAgent);

        return newAgent;
    }

    /**
     * 
     * @param {*} agentId 
     * @returns null || Agent Object
     */
    getAgentById(agentId) {
        let result = this.agents.filter(agent => agent.id === agentId);

        if(result.length > 1){
            throw new Error("Too many agents with the same id " + agentId);
        }
        else if(result.length <= 0){
            return null;
        } else if(result.length === 1){
            return result[0];
        }
        return null;
    }

    getRandomAgent(agentsArray = this.agents) {
        return agentsArray === undefined ? null : agentsArray[Math.round(Math.random() * (agentsArray.length - 1))]
    }

    tickCirculateMessages() {
        this.agents.forEach(agent => {
            agent.diffuseMessagesToNeighbourgs();
        });
    }

    tickEnergize(energyPerAgent) {
        this.agents.forEach(agent => {
            agent.feedEnergy(energyPerAgent);
        });
    }

    loadFromGraphML(graphMLObject) {
        if (graphMLObject !== undefined) {
            if (graphMLObject.nodes !== undefined) {
                graphMLObject.nodes.forEach(node => {
                    this.addAgent(Agent.getAgentFromGraphML(node, this));
                });
            }

            if (graphMLObject.links !== undefined) {
                graphMLObject.links.forEach(link =>{
                    let source = this.getAgentById(link.source) || new Agent(this, link.source.id);
                    let target = this.getAgentById(link.target) || new Agent(this, link.target.id);
                    source.addConnection(target);
                });
            }
        }
    }


    toGraph() {
        let nodes = this.agents.map(agent => { return agent.toGraph() });
        
        let links = this.getAllConnections().map(connection => {
            
            return connection.toGraph();
        });
        return { nodes: nodes, links: links };
    }

    toString() {
        let returnString = "";
        this.agents.forEach(agent => {
            returnString += agent.toString() + "\n";
        });

        return returnString;

    }
}