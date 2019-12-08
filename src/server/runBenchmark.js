import SystemBenchmark from '../model/systemBenchmarkClass'
import fs from 'fs'
 
function main(){
    
    let fileName = "./results/result-"+Date.now()+".txt";

    const systemBenchmark = new SystemBenchmark({
        nbAgents:{min:5, max:10},
        nbConnectionsPerAgent:3,
        nbMessagesSeed:40,
        energyFeedPerTick: 5,
        maxEnergyHarvestPerAgent: 10,
        messageSize: 1,
        systemInstance: undefined,//systemObject
        systemDescription: undefined,// graphML
        fileName: fileName
    });

    systemBenchmark.seedMessages()
    systemBenchmark.startTicks();     
}

function tickEventHandler(systemObject){
    console.log(systemObject.getTickReport());
}

function isSyncEventHandler(systemObject){
    console.log("Finished");
}

main();