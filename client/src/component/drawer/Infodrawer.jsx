import { Box, Drawer, Typography, styled } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'
import Profile from './Profile';

const Infodrawer = ({open, setOpen}) => {
    const handleclose = () =>{
        setOpen(false);
    }
    const drawerstyle={
        left: 190,
        top: 30,
        height:'95%',
        width:'30%',
        borderRadius:'5px',
    }
    const Header = styled(Box)`
    background: #0035BD;
    height: 95px;
    color: #ffffff;
    display: flex;
    & > svg, &>p{
        margin-top: auto;
        padding:15px;
        font-weight: 600;
    }`
  return (
    <Drawer
    open={open}
    onClose={handleclose}
    PaperProps={{sx : drawerstyle}}
    style={{zIndex:1500}}>
        <Header>
            <ArrowBackIcon onClick={()=>setOpen(false)}/>
            <Typography>Profile</Typography>
        </Header>
        <Box>
            <Profile/>
        </Box>
    </Drawer>
  )
}

export default Infodrawer
