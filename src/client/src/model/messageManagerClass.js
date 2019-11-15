import Message from './messageClass'

export default class MessageManager{

    constructor(parentAgent){
            this.parentAgent = parentAgent;
            this.inbox = [];
            this.sendbox = [];
            this.sendQueue = [];
            this.sentBox = []; //["connection+msg hash"...]
    }

    receiveMessage(msgObject){
        if(this.inbox[msgObject.id] === undefined){
            this.inbox[msgObject.id] = {message: msgObject, status: 0};
            this.queueMessage(msgObject);
        }

        console.log("Agent id:" + this.parentAgent.id + " received message id " + msgObject.id);
    }

    queueMessage(msgObject){
        console.log("Agent id:" + this.parentAgent.id + " queued message id " + msgObject.id);
        this.parentAgent.connections.forEach(connection => {
            this.sendQueue.push({message:msgObject, connection: connection});
        });
    }

    sendMessages(energyAmount){
        let lastingEnergyAmount = energyAmount;
        
        while(lastingEnergyAmount > 0 && this.sendQueue.slice(-1).size <= lastingEnergyAmount){
            let nextMsg = this.sendQueue.pop();
            this.sendMessage(nextMsg.message, nextMsg.connection);
            lastingEnergyAmount += nextMsg.message.size;
        }
    }

    sendMessage(msgObject, toConnectionObject){
        console.log("Agent id:" + this.parentAgent.id + " send message id " + msgObject.id + " to agent id : "+ toConnectionObject.getPairAgent(this.parentAgent).id);
        return toConnectionObject.getPairAgent(this.parentAgent).ackMessage(msgObject);
        
    }
}