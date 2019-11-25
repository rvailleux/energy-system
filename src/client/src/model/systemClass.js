import Agent from './agentClass'
import Message from './messageClass';

export default class System {

    /**
     *  
     * @param {*} options {nbAgents:Int, nbConnectionsPerAgent:Int, nbMessagesSeed: Int, energyFeedPerTick: Int, maxEnergyHarvestPerAgent: Int, messageSize: Int, systemInstance?:System, systemDescription:?{nodes:[{id:}], links:[{source:Int, target:Int}]}}
     */
    constructor(options = []) {
        this.options = options;
        this.agents = [];
        this.addAgents(options.nbAgents !== undefined ? options.nbAgents: 0);
        this.distributeConnections(options.nbConnectionsPerAgent!== undefined ? options.nbConnectionsPerAgent: 0);
        this.tickerTracker = 0;
    }

    distributeConnections(avgConnectionsPerAgent) {

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
                        try{
                        let randomIndex = Math.round(Math.random() * (totalRemainerList.length - 1));
                        agent.addConnection(totalRemainerList[randomIndex]);
                        } catch(e)
                        {
                            console.log("Abort creating new connection between two agents that are already connected.");
                        }
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

        if (result.length > 1) {
            throw new Error("Too many agents with the same id " + agentId);
        }
        else if (result.length <= 0) {
            return null;
        } else if (result.length === 1) {
            return result[0];
        }
        return null;
    }

    getRandomAgent(agentsArray = this.agents) {
        return agentsArray === undefined ? null : agentsArray[Math.round(Math.random() * (agentsArray.length - 1))]
    }

    setTicker(tickCallback, isSyncCallback){
        this.tickEvent = tickCallback;
        this.isSyncEvent = isSyncCallback;
        
        this.timerID = setInterval(
            () => this.tick(),
            10
          );
    }

    stopTicker(){
        clearInterval(this.timerID);
    }

    tick() {        
        if(this.isSyncComplete()){
            this.stopTicker();
            this.isSyncEvent(this);
            return;
        }
        this.tickCirculateMessages();
        this.tickEnergize(this.options.energyFeedPerTick);
        this.tickerTracker++;
        this.tickEvent(this);
    }

    tickCirculateMessages() {
        this.agents.forEach(agent => {
            agent.diffuseMessagesToNeighbourgs();
        });
    }

    seedMessage(){
        this.getRandomAgent().seedMessage(new Message(this.options.messageSize!== undefined ? this.options.messageSize : 1));
    }

    tickEnergize(energyPerAgent) {
        this.agents.forEach(agent => {
            agent.feedEnergy(energyPerAgent);
        });
    }

    getCurrentTicker() {
        return this.tickerTracker;
    }

    isSyncComplete(nbOfMessageToSync) {
        try {
            this.agents.forEach(agent => {
                if (agent.messageManager.inbox.length < this.options.nbMessagesSeed) {
                    throw Error();
                }
            });
        } catch (e) {
            return false;
        }

        return true;
    }

    getMessagesStatus() {
        let messagesOverview = [];


        this.agents.forEach(agent => {

            agent.messageManager.inbox.forEach(message => {

                if (messagesOverview[message.id] === undefined)
                    messagesOverview[message.id] = { inbox: [], sendqueue: [] };

                messagesOverview[message.id].inbox.push(agent);
            });

            agent.messageManager.sendqueue.forEach(messageEntry => {

                if (messagesOverview[messageEntry.message.id] === undefined)
                    messagesOverview[messageEntry.message.id] = { inbox: [], sendqueue: [] };

                messagesOverview[messageEntry.message.id].sendqueue.push(agent);
            });

        });

        return messagesOverview;
    }

    /**
     * %  = avg nb of agent sync on each message / nb of agents.
     */
    getSyncProgress() {

        let messageStatusArray = this.getMessagesStatus();

        return Object.keys(messageStatusArray).reduce((totalMessagesReceived, msgId) => {
            return totalMessagesReceived + messageStatusArray[msgId].inbox.length;
        }, 0) / Object.keys(messageStatusArray).length / this.agents.length;
    }

    // avg nb of agent delivered per tick of diffusion
    getAvgMessageSpreadSpeed() {
        return 5;
    }

    getTickReport() {
        return {
            tickerNumber: this.getCurrentTicker(),
            systemSyncProgress: this.getSyncProgress(),
            avgMessageSpreadSpeed: this.getAvgMessageSpreadSpeed() // avg nb of agent delivered per tick of diffusion
        }
    }

    toGraph() {
        let nodes = this.agents.map(agent => { return agent.toGraph() });

        let links = this.getAllConnections().map(connection => {

            return connection.toGraph();
        });
        return {nodes: nodes, links: links, options: this.options};
    }

    toString() {
        let returnString = "";
        this.agents.forEach(agent => {
            returnString += agent.toString() + "\n";
        });

        return returnString;

    }

    static getSystemFromGraphML(graphMLObject, options) {

        let newSystem = new System(options);

        if (graphMLObject !== undefined) {
            if (graphMLObject.nodes !== undefined) {
                graphMLObject.nodes.forEach(node => {
                    newSystem.addAgent(Agent.getAgentFromGraphML(node, newSystem));
                });
            }

            if (graphMLObject.links !== undefined) {
                graphMLObject.links.forEach(link => {
                    let source = newSystem.getAgentById(link.source) || new Agent(newSystem, link.source.id);
                    let target = newSystem.getAgentById(link.target) || new Agent(newSystem, link.target.id);
                    source.addConnection(target);
                });
            }
        }

        newSystem.options.nbAgents = newSystem.agents.length;
        newSystem.options.nbConnectionsPerAgent = newSystem.agents.reduce((avg, agent) => {return avg + agent.neighbourgs.length / newSystem.agents.length}, 0);

        return newSystem;

    }
}