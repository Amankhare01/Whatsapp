import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { emptyChatImage } from "../../../constants/Data";
const Image = styled("img")({
  width: 400,
  marginTop:100,
});
const Text=styled(Box)`
text-align: center;
align-items: center;
`
const Text2=styled(Box)`
padding: 10px 10px;`
const Chat = () => {
  return (
    <>
      <Box>
        <Image src={emptyChatImage} alt="img" />
      </Box>
      <Text>
        <Typography>Whatsapp Web</Typography>
      </Text>
      <Text2>You could explore those options if you're looking to customize the appearance beyond what WhatsApp offers by default. Just be cautious when using third-party tools and make sure they're from reputable sources to avoid any security risks.</Text2>
      <Box></Box>
    </>
  );
};

export default Chat;
