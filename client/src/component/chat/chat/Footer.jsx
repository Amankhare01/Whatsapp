import { Box, InputBase, styled } from "@mui/material";
import React from "react";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
const Conatiner = styled(Box)`
height: 55px;
background: #ededed;
display: flex;
width: 100%;
align-items: center;
padding: 0 15px;
& > * {
    margin: 5px;
    color: #929292;
}`;
const Search = styled(Box)`
background: #ffffff;
padding: 0 0 0 10px;
border-radius: 20px;
width: calc(90% - 100px);
`
const Footer = ({sendText,setValue,value}) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendText(e);
    }
  };
  // const [text, setText]=useState('');
  return (
    <Conatiner>
      <EmojiEmotionsOutlinedIcon />
      <AttachFileIcon/>
      <Search>
        <InputBase
        placeholder="Start Messesing"
        onChange={(e)=>setValue(e.target.value)}
        // onKeyPress={(e)=>sendText(e)}
        onKeyDown={handleKeyDown}
        value={value}
        />
      </Search>
        <MicIcon/>
    </Conatiner>
  );
};

export default Footer;
