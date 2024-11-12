import React, { useContext, useState } from 'react'
import { Box, styled } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import Headermenu from './Headermenu';
import Infodrawer from '../../drawer/Infodrawer';
import { Accountcontext } from '../../context/Accountprovider';

const Component=styled(Box)`
height:40px;
background: #ededed;
padding:8px 16px;
display:flex;
align-items:center;
`
const Wrapper=styled(Box)`
margin-left:auto;
& > * {
    margin-left:2px;
    padding:8px;
}`

const Image = styled("img")({
    height:40,
    width:40,
    borderRadius:'50%'
})
const Header = () => {
    const {account}= useContext(Accountcontext);
    const toggledrawer=()=>{
        setOpendrawer(true);
    }
    const[opendrawer, setOpendrawer] = useState(false);
  return (
    <>
    <Component>
        <Image src={account.picture} alt="dp" onClick={()=>toggledrawer()}/>
        <Wrapper>
            <ChatIcon/>
            <Headermenu setOpendrawer={setOpendrawer}/>
        </Wrapper>
    </Component>
    <Infodrawer open={opendrawer} setOpen={setOpendrawer}/>
    </>
  )
}

export default Header
