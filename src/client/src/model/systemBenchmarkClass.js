import System from "./systemClass";

export default class SystemBenchmark {

    /**
     * 
     * @param {Object} options {nbAgents:{min:Int, max:Int}, nbConnectionsPerAgent:Int, nbMessagesSeed: Int, energyFeedPerTick: Int, maxEnergyHarvestPerAgent: Int, messageSize: Int, systemInstance?:System, systemDescription?:{nodes[{id:Int}], links:[{source:Int, target:Int}]}}
     */
    constructor(options = []) {
        this.options = options;
        this.systemInstances = [];
        this.tickEvent = options.tickEventHandler !== undefined ? options.tickEventHandler : (systemObject) => {};
        this.isSyncEvent = options.isSyncEventHandler !== undefined ? options.isSyncEventHandler : (systemObject) => {};
 
        if (options.systemInstance !== undefined) {
            this.systemInstances.push(options.systemInstance);
        }
        if (options.systemDescription !== undefined) {
            this.systemInstances.push(System.getSystemFromGraphML(options.systemDescription, options));
        }        

        if (options.nbAgents !== undefined
            && options.nbConnectionsPerAgent !== undefined
            && options.nbMessagesSeed !== undefined
            && options.energyFeedPerTick !== undefined
            && options.maxEnergyHarvestPerAgent !== undefined
            && options.messageSize !== undefined) {
            let minNbAgent = options.nbAgents.min !== undefined && options.nbAgents.min > 0 ? options.nbAgents.min : 1;
            let maxNbAgent = options.nbAgents.max !== undefined ? options.nbAgents.max : 2;

            for (let i = Math.max(2,minNbAgent); i <= maxNbAgent; i++) {
                let specificOptions = options;
                specificOptions.nbAgents = i;
                this.systemInstances.push(new System(specificOptions));
            }
        }
    }

    seedMessages(){
        this.systemInstances.forEach(systemInstance =>{
            for (let i = 0; i < (this.options.nbMessagesSeed !== undefined ? this.options.nbMessagesSeed : 1) ; i++)
                systemInstance.seedMessage();
        });
    }

    tickEventHandler(systemObject){
        //console.log("System tick");
        //console.log({systemLog: systemObject.getTickReport()});
        this.tickEvent(systemObject);
    }

    isSyncEventHandler(systemObject){
        this.syncEvent(systemObject);
    }

    startTicks(){
        this.systemInstances.forEach(systemInstance =>{
            systemInstance.setTicker(this.tickEventHandler, this.isSyncEventHandler);
        });
    }
    stopTicks(){
        this.systemInstances.forEach(systemInstance =>{
            systemInstance.stopTicker();
        });
    }

    get systemInstance(){
        return this.systemInstances[0];
    }
}