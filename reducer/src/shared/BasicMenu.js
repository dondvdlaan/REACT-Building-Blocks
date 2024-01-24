import * as React from 'react';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


/**
 * Component for basic menu
 */
export default function BasicMenu() {

  // ********* Constants and variables ********* 
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  let navigate = useNavigate();

  // ********* Eventhandlers ********* 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="Options">
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
      </Tooltip>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => navigate("/reducerI")}>Simple reducer</MenuItem>
        <MenuItem onClick={() => navigate("/reducerII")}>S Reducer TS</MenuItem>
        <MenuItem onClick={() => navigate("/reducerIII")}>Reducer TS</MenuItem>
        <MenuItem onClick={() => navigate("/reducerIV")}>Reducer TS useC</MenuItem>
      </Menu>
    </div>
  );
}
