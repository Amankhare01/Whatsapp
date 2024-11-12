import bodyParser from "body-parser";
import Conversation from "../model/Conversation.js";
export const newConversation=async(req,res)=>{
    try {
        const senderId = req.body.senderId;
        const reciverId = req.body.receiverId;
        const exist = await Conversation.findOne({members:{$all:[senderId,reciverId]}});
        if(exist){
            return res.status(200).json("Conversation already exist");
        }
        const newConversation = new Conversation({
            members:[senderId,reciverId]
        })
        await newConversation.save();
        return res.status(200).json("Conversation already exist");
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getConversation=async(req,res)=>{
    try {
        const senderId = req.body.senderId;
        const reciverId = req.body.receiverId;
        let conversation = await Conversation.findOne({members:{$all:[senderId,reciverId]}});
        return res.status(200).json(conversation);
    } catch (error) {
        return res.status(500).json(error.message);
        console.log(error)
    }
}