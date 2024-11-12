import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Image = styled('img')({
    width:40,
    height:40,
    borderRadius:'50%',
    objectFit: 'cover',
})
const Name = styled(Typography)`
margin-left: 12px !important;
`
const Status = styled(Typography)`
margin-left: 12px !important;
font-size: 12px;
color: rgba(0,0,0,0.8);

`
const Component = styled(Box)`
background: #ededed;
display:flex;
align-item: center;
height:40px;
padding: 8px 16px;
`
const Rightitem= styled(Box)`
margin-left: auto;
& > svg{
    padding: 8px;
    font-size: 24px;
    color: #000;
}`
const ChatHeader = ({person}) => {
  return (
<Component>
<Image src={person.picture} alt="dp" /> 
    <Box>
        <Name>{person.name}</Name>
        <Status>Online</Status>
    </Box>
    <Rightitem>
        <SearchIcon/>
        <MoreVertIcon/>
    </Rightitem>
</Component>
  )
}

export default ChatHeader
