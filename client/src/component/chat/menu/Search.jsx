import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputBase, styled } from '@mui/material';

const Component=styled(Box)`
height:45px;
border-bottom:1px solid #f2f2f2;
display:flex;
align-items:center;
`
const Wrapper=styled(Box)`
background-color: #f0f2f5;
position:relative;
margin:0 13px;
width:100%;
border-radius:10px;
`

const Icon = styled(Box)`
position:absolute;
height:100%;
padding:6px 10px;
color:#919191;
`
const Inputfield=styled(InputBase)`
width:100%;
padding:16px;
height:15px;
padding-left:65px;
`
const Search = ({setText}) => {
  return (
    <Component>
        <Wrapper>
            <Icon>
                <SearchIcon
                fontSize='small'/>
            </Icon>
            <Inputfield placeholder='Search or Start new chat'
            onChange={(e)=>setText(e.target.value)}/>
        </Wrapper>
    </Component>
  )
}

export default Search
