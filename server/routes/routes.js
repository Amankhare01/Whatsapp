import express from 'express';
import { adduser, getUsers } from '../controller/usercontroller.js';
import { getConversation, newConversation } from '../controller/Conversation_control.js';
import { getmessage, newMessages } from '../controller/message-control.js';
const route = express.Router();

route.post('/add',adduser);
route.get('/users',getUsers);
route.post('/conversation/add', newConversation)
route.post('/conversation/get', getConversation)
route.post('/message/add',newMessages)
route.get('/message/get/:id',getmessage)
export default route;