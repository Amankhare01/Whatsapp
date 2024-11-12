import React, { useContext } from 'react'
import {AppBar,Toolbar,styled,Box} from '@mui/material'
import { Accountcontext } from './context/Accountprovider'
import Loginbox from './account/Loginbox'
import Chatbox from './chat/Chatbox'
const Header=styled(AppBar)`
height:200px;
background-color: #0035BD;
box-shadow: none;
`
const InerHeader=styled(AppBar)`
height:125px;
background-color: #0035BD;
box-shadow: none;
`
const Messenger = () => {
  const {account} = useContext(Accountcontext)
  return (
    <Box>{
      account ? <>
      <InerHeader>
            <Toolbar>
      
            </Toolbar>
        </InerHeader>
        <Chatbox/>
      </>
    :
        <>
        <Header>
            <Toolbar>
      
            </Toolbar>
        </Header>
        <Loginbox/>
        </>
    }
    </Box>
  )
}

export default Messenger
