import Agent from './agentClass'

export default class System {
    constructor(
        numberAgents = 0,
        avgConnectionsPerAgent = 0,
        standardDeviationConnections = 0
    ) {
        this.agents = [];

        for (let i = 0; i < numberAgents; i++) {
            this.addAgent();
        }


    }

    distributeConnections(){
        
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

    toString() {
        let returnString = "";
        this.agents.forEach(agent => {
            returnString += agent.toString() +"\n";
        });

        return returnString;

    }
}