import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { Accountcontext } from '../../context/Accountprovider'
import { getConversation } from '../../service/Api'

const Chatbox1 = () => {
  const {person,account} = useContext(Accountcontext);
  const [Conversation, setconversation]=useState({});
  useEffect(()=>{
    const getconverstaiondetails = async()=>{
      let data = await getConversation({senderId:account.sub, receiverId:person.sub})
      setconversation(data)
    }
    getconverstaiondetails();
  },[person.sub,account.sub]);
  return (
<Box>
    <ChatHeader person={person}/>
    <Messages person={person} Conversation={Conversation}/>
</Box>
  )
}

export default Chatbox1
