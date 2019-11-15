export default class Message{
    constructor(msgSize){
        this.size = msgSize;
        this.id = Message.getMessageId();
    }

    static getMessageId(){
        return "Message"+ Message.uniqueIdCount++;
    }
}

Message.uniqueIdCount = 0;

Message.getHashString = function(msgObject, connectionObject){
    return "MSG"+msgObject.id+"CONNECTION"+connectionObject.id;
}