// MUI
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";

//icon----------------------------------------------------------------------
import NewspaperIcon from "@mui/icons-material/Newspaper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Brightness4Icon from "@mui/icons-material/Brightness4";
// React---------------------------------------------------------------------------

import { useState, useContext } from "react";
import React from "react";
import ColorContext from "../context/ColorModeContext";

//Link--------------------------------------------------------------------------------
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";


//-------------------------------------------------------------------------------------

const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const colorMode = useContext(ColorContext);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <NewspaperIcon />
        </IconButton>
        <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
          海外滞在&コード学習ブログ
        </Typography>
        <Stack direction="row" spacing={1}>
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/Output">
            <Button color="inherit">Output</Button>
          </Link>
          <Link to="/ContactForm">
            <Button color="inherit">Contact</Button>
          </Link>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            My blogs
          </Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
          onClose={handleClose}
          anchorOrigin={{
            vartical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            verical: "top",
            horizontal: "right",
          }}
        >
          <Link to='/Almenia'>
            <MenuItem onClick={handleClose}>Almenia Blog</MenuItem>
          </Link>
          <Link to='/Thailand'>
            <MenuItem onClick={handleClose}>Thailand Blog</MenuItem>
          </Link>
          <Link to='/India'>
            <MenuItem onClick={handleClose}>India Blog</MenuItem>
          </Link>
          <Link to='/Vietnam'>
            <MenuItem onClick={handleClose}>Vietnam Blog</MenuItem>
          </Link>
          <Link to='/China'> 
            <MenuItem onClick={handleClose}>Chian Blog</MenuItem>
          </Link>
          <Link to='/Georgia'>
            <MenuItem onClick={handleClose}>Georgia Blog</MenuItem>
          </Link>
        </Menu>
        <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
          <Brightness4Icon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
