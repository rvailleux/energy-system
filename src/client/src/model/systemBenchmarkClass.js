export default class SystemBenchmark{

    /**
     * 
     * @param {Object} options {nbAgents:{min:Int, max:Int}, nbConnectionsPerAgent:Int, nbMessageSeed: Int, energyFeedPerTick: Int, messageSize: Int, systemInstance:System}
     */
    constructor(options){
        this.systemInstance = options.systemInstance;
    }

    getTickReport(){
        return {
            tickerNumber: this.systemInstance.getCurrentTicker(),
            systemSyncProgress: 0.8, //%  = avg nb of agent sync on each message / nb of agents.
            avgMessageSpreadSpeed: 5, // avg nb of agent delivered per tick of diffusion
        }
    }
}