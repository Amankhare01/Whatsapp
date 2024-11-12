import React from 'react'
import { Box, Typography, styled } from '@mui/material'

const Text = styled(Box)`
  color: black;
  width: 100%;
`

const Message = ({ message }) => {
  // Check if message text is available
  const text = message && message.text ? message.text : '';

  return (
    <Text>
      <Typography variant="body1">{text}</Typography>
      {/* {message.createdAt && (
        <Typography variant="caption">{message.createdAt}</Typography>
      )} */}
    </Text>
  );
};

export default Message;
