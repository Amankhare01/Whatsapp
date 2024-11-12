import { Box, Dialog, styled } from '@mui/material'
import React, { useContext } from 'react'
import Menu from './menu/Menu'
import Chatbox1 from './chat/Chatbox1'
import { Accountcontext } from '../context/Accountprovider'
import Chat from './chat/Chat'
const dialogbox1={

    height:"100%",
    width:"100%",
    maxwidth:"100%",
    maxheight:"100%",
    overflow:"hidden",
    backgroundColor:'none'
  }
  const Component=styled(Box)`
  display:flex;`

  const Leftcomponent=styled(Box)`
  min-width:450px;`;
  const Rightcomponent=styled(Box)`
  min-width:300px;
  width:73%;
  height:100%;
  border-left:1px solid rgba(0,0,0,0.14);
  `;

const Chatbox = () => {
  const {person} = useContext(Accountcontext);
  return (
<Dialog
    open={true}
    PaperProps={{sx:dialogbox1}}
    hideBackdrop={true}
    maxWidth={"md"}
    >
        <Component>
        <Leftcomponent>
            <Menu/>
        </Leftcomponent>
        <Rightcomponent>
        {/* <Chatbox1/> */}
        {Object.keys(person).length ? <Chatbox1/>:<Chat/>}
        </Rightcomponent>
        </Component>
        
    </Dialog>
  )
}

export default Chatbox
