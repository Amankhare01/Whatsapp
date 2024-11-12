import { Box, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import { Accountcontext } from '../../context/Accountprovider';
import { setconversation } from '../../service/Api';
const Component = styled(Box)`
display:flex;
height:45px;
padding: 13px 0;
cursor: pointer;
`;
const Image = styled('img')({
    width:50,
    height:50,
    borderRadius:'50%',
    padding: '0 14px',
    objectFit: 'cover'

})
const Conversation = ({user}) => {
  const {setperson, account} = useContext(Accountcontext);
  
  const getuser=async()=>{
    setperson(user);
    await setconversation({senderId:account.sub, reciverId: user.sub});
  }
  return (
    <Component onClick={()=>getuser()}>
        <Box>
            <Image src={user.picture} alt="dp" />
        </Box>
        <Box>
            <Typography>{user.name}</Typography>
        </Box>
    </Component>
  )
}

export default Conversation
