import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../service/Api';
import Conversation from './Conversation';
import {Box, Divider, styled} from '@mui/material'
import { Accountcontext } from '../../context/Accountprovider';
const Component = styled(Box)`
height: 81vh;
overflow: overlay;`;
const StyledDivider = styled(Divider)`
margin: 0 0 0 70px;
`
const Coversation = ({text}) => {
  const {account} = useContext(Accountcontext);
    const[users, setUsers]=useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            let response = await getUsers();
            // const filteredData = response.filter(user => user.name && user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(response);
        }
        fetchData();
    },[text]);
  return (
    <Component>
      {
        users.map(user => (
          user.sub !== account.sub &&
          <>
          <Conversation user={user}/>
          <StyledDivider/>
          </>
        )
        )
      }
    </Component>
  )
}

export default Coversation
