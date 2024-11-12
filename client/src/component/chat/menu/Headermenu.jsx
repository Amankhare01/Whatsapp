import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material";

const Menuoption = styled(MenuItem)`
font-size:14px;
padding: 15px 60px 4px 24px;
color: #4A4A4A;
align-items: center;
padding-bottom: 4px;
`

const Headermenu = ({setOpendrawer}) => {
  const [open, setOpen] = useState(null);
  const handleClose=()=>{
    setOpen(null);
  }
  const handleclick=(e)=>{
    setOpen(e.currentTarget);
  }
  return (
    <>
      <MoreVertIcon onClick={handleclick}/>
      <Menu
        id="basic-menu"
        anchorEl={open}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Menuoption onClick={()=>{handleClose(); setOpendrawer(true);}}>Profile</Menuoption>
      </Menu>
    </>
  );
};

export default Headermenu;
