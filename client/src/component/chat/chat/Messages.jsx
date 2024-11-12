import { Box, styled } from '@mui/material';
import React, { useContext, useEffect, useState, useRef } from 'react';
import Footer from './Footer';
import { Accountcontext } from '../../context/Accountprovider';
import { getMessage, newMessage } from '../../service/Api';
import Message from './Message';

const Bgimg = styled(Box)`
  background-size: 100%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Messages = ({ person, conversations }) => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const messagesEndRef = useRef(null);
  const { account } = useContext(Accountcontext);

  useEffect(() => {
    const fetchMessageDetails = async () => {
      if (conversations && conversations._id) {
        const data = await getMessage(conversations._id);
        console.log('Fetched messages:', data); // Debug log
        setMessages(data);
      }
    };
    fetchMessageDetails();
  }, [conversations]);

  useEffect(() => {
    // Scroll to bottom every time messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      if (!conversations || !conversations._id) {
        console.error('Conversations or conversations ID is missing');
        return;
      }
      const message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationsId: conversations._id,
        type: 'text',
        text: value,
      };
      await newMessage(message);
      setValue('');
      setMessages((prevMessages) => [...prevMessages, message]); // Add new message to the state
    }
  };

  return (
    <Bgimg>
      <Component>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
      />
    </Bgimg>
  );
};

export default Messages;
