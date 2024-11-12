import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Accountcontext } from "../context/Accountprovider";
const Image=styled(Box)`
    display:flex;
    justify-content:center;
`
const Imagedp=styled('img')({
    borderRadius:"50%",
    height:100,
    width:100,
    padding: '20px 0',
})
const Boxwrapper=styled(Box)`
background:#ededed;
padding: 12px 30px 2px;
box-shadow:0 1px 3px rgba(0,0,0,0.08);
& : first-child{
    font-size:13px;
    color:#0035BD;
    font-weight: 100; 
}
& : last-child{
    margin: 14px 0;
    color: #4A4A4A;
}`
const Boxwrapper1=styled(Box)`
padding: 12px 30px 2px;
color: #4A4A4A;
opacity:.6;
box-shadow:0 1px 3px rgba(0,0,0,0.08);
`

const Profile = () => {
    const {account} = useContext(Accountcontext);

  return (
    <>
      <Image>
        <Imagedp src={account.picture} alt="dp" />
      </Image>
      <Boxwrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </Boxwrapper>
      <Boxwrapper1>
        <Typography >This is your google user name, you can not modify this name.</Typography>
      </Boxwrapper1>
      <Boxwrapper>
        <Typography>Discription</Typography>
        <Typography>Hey! i'm using Whatsapp</Typography>
      </Boxwrapper>
    </>
  );
};

export default Profile;
