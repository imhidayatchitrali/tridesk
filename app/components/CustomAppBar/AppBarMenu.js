import { primaryColor } from '@/app/res/utils/themeColors';
import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { exit_session } from '@/app/res/utils/CommonFunctions';
const AppBarMenu = () => {
    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div  >
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
         onClick={handleClick}
         
          sx={{backgroundColor:primaryColor,borderRadius:0,cursor:"pointer",color:"white",gap:2,":hover":{backgroundColor:primaryColor}}}
        >
         <PersonIcon fontSize='25px'/>
         User
         <KeyboardArrowDownIcon fontSize='25px'/>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
          <MenuItem onClick={()=>{handleClose(); exit_session()}}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }

export default AppBarMenu