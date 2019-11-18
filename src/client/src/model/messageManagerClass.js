import Message from './messageClass'

export default class MessageManager{

    constructor(parentAgent){
            this.parentAgent = parentAgent;
            this.inbox = [];
            this.sendbox = [];
            this.sendqueue = [];
            this.sentbox = []; //["connection+msg hash"...]
    }

    receiveMessage(msgObject){

        if(!this.inbox.includes(msgObject)){

            console.log("Agent id:" + this.parentAgent.id + " received message id " + msgObject.id+ "inbox size: " + this.inbox.length);
            console.log({inbox: this.inbox});

            this.inbox.push(msgObject);
            this.queueMessage(msgObject);

            return true;
        }        

        console.log('ALREADY RECEIVED!');

        return false;
    }

    queueMessage(msgObject){
        
        this.parentAgent.connections.forEach(connection => {
            console.log("Agent id:" + this.parentAgent.id + " queue message id " + msgObject.id + " for connection " + connection.id);
            this.sendqueue.push({message:msgObject, connection: connection});
        });
    }

    sendMessages(energyAmount){
        let lastingEnergyAmount = energyAmount;     

        while(lastingEnergyAmount > 0 && this.sendqueue.length > 0 && this.sendqueue.slice(-1)[0].message.size <= lastingEnergyAmount){
            let nextMsg = this.sendqueue.pop();
            console.log("Agent id:" + this.parentAgent.id + " sending message id " + nextMsg.message.id + " to " + nextMsg.connection.getPairAgent(this.parentAgent).id);
            lastingEnergyAmount -= (this.sendMessage(nextMsg.message, nextMsg.connection) ? nextMsg.message.size : 0);
        }

        return lastingEnergyAmount;
    }

    sendMessage(msgObject, toConnectionObject){
        console.log("Agent id:" + this.parentAgent.id + " send message id " + msgObject.id + " to agent id : "+ toConnectionObject.getPairAgent(this.parentAgent).id);
        
        let diffusionDone = toConnectionObject.getPairAgent(this.parentAgent).ackMessage(msgObject)
        if(diffusionDone)
            this.sentbox.push(msgObject);

        return diffusionDone;
    }
}