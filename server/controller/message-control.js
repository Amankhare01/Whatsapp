import conversation from "../model/Conversation.js";
import Message from "../model/message.js";

export const newMessages=async(req,res)=>{
    try {
        const newMessages = new Message(req.body);
        await newMessages.save();
        await conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text});
        return res.status(200).json("message sent succesfuly");
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getmessage=async(req,res)=>{
    try {
        const message = await Message.find({conversationId: req.params.id});
        return res.status(200).json(message);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}