const SystemBenchmark = require ('../../dist/client/src/model/systemBenchmarkClass');

function main(){

    const systemBenchmark = new SystemBenchmark({
        nbAgents:{min:5, max:10},
        nbConnectionsPerAgent:3,
        nbMessagesSeed:40,
        energyFeedPerTick: 5,
        maxEnergyHarvestPerAgent: 10,
        messageSize: 1,
        systemInstance: undefined,//systemObject
        systemDescription: undefined,// graphML
        tickEvent: tickEventHandler,
        isSyncEvent: isSyncEventHandler,
    });

    systemBenchmark.

    systemBenchmark.seedMessages();
    systemBenchmark.startTicks();

}

function tickEventHandler(systemObject){
    console.log(systemObject.getTickReport());
}

function isSyncEventHandler(systemObject){
    console.log("Finished");
}