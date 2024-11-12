import { Dialog,Box, Typography, List, ListItem, styled} from '@mui/material'
import React, { useContext } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import { qrCodeImage } from '../../constants/Data'
import { Accountcontext } from '../context/Accountprovider';
import { adduser } from '../service/Api';

const dialogbox={
  height:"96%",
  marginTop:"12%",
  width:"60%",
  maxwidth:"100%",
  maxheight:"100%",
  // boxShadow:"none",
  overflow:"none"
}
const Boxflex=styled(Box)`
display:flex;`
const Boxflex1=styled(Box)`
padding:20px;`
const Qrcode=styled('img')`
height:150px;
width:150px;
margin: 20px 20px 0 20px;`

const Title=styled(Typography)`
font-size: 26px;
color: #525252;
font-weight: 300;
font-family:inherit;
margin-bottom:20px;`

const Loginbox = () => {

  const {setAccount}=useContext(Accountcontext);

  const loginsuccess=async(res)=>{
    const decode = jwtDecode(res.credential);
    setAccount(decode);
    await adduser(decode);
  }
  const loginerror=(res)=>{
    console.log("Error", res)
  }
  return (
    <Dialog
    open={true}
    PaperProps={{sx:dialogbox}}
    hideBackdrop={true}>
      <Boxflex>
        <Boxflex1>
          <Title> To use Whatsapp in your PC</Title>
          <List>
            <ListItem>1. Open Whatsapp on your phone</ListItem>
            <ListItem>2. Tap on setting and select linked device</ListItem>
            <ListItem>3. Open scanner and scan this fucking QR</ListItem>
          </List>
        </Boxflex1>
        <Boxflex1>
          <Qrcode src={qrCodeImage} alt="qrcode" />
          <Box>
            <GoogleLogin
            onSuccess={loginsuccess}
            onError={loginerror}/>
          </Box>
        </Boxflex1>
      </Boxflex>
    </Dialog>
  )
}

export default Loginbox
