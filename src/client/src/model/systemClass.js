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
                let eligibleAgentsList = this.agents.filter(randomAgent => { return agent.id !== randomAgent.id && randomAgent.connections.length < avgConnectionsPerAgent });


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

    addAgent() {
        let newAgent = new Agent(this);

        this.agents.push(newAgent);

        return newAgent;
    }

    getRandomiseAgents(agentsArray = this.agents) {
        /**
         * Randomize array element order in-place.
         * Using Durstenfeld shuffle algorithm.
         */
        let array = agentsArray;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

    toGraph() {
        let nodes = this.agents.map(agent => { return agent.toGraph() });
        let links = this.getAllConnections().map(connection => {
            return { source: connection.agents[0].id, target: connection.agents[1].id};
        });
        console.log(links);
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