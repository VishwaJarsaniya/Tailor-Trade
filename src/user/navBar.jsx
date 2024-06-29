import React, { useState } from "react";
import {
  CardContent,
  Card,
  Grid,
  Typography,
  Button,
  Box,
  useMediaQuery,
  Menu,
  MenuItem
} from "@mui/material";
import { useTheme } from "@mui/material/styles"; // Import the theme hook
import { Navigate } from "react-router-dom";
import bell from "../img/bell.png";
import profile from "../img/profile.png";
import menu from "../img/menu.png";

import Nav from "../Nav";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";

const NavBar1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { authState, logout } = useAuth();
  const { username, setUsername } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme(); // Use theme hook
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm')); // Corrected the theme usage

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    setTimeout(()=>{navigate("/user/login")},5000);
  };

  return (
    <>
      {isLargeScreen ? (
        <Box
          sx={{
            borderRadius: '2px',
            borderColor: 'grey',
            backgroundColor: '#f0f8ff',
            height: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 40px',
          }}
        >
          <img src={logo} alt="Logo" style={{ width: '170px' }} />
          <div>
            <Button sx={{ width: '130px' }}>
              <Typography sx={{ fontSize: '20px' }}>Home</Typography>
            </Button>
            <Button>
              <img src={bell} alt="Bell Icon" style={{ width: '25px' }} />
            </Button>
            <Button onClick={handleOpen}>
              <img src={profile} alt="Profile Icon" style={{ width: '30px', marginRight: '6px' }} />
              <Typography sx={{ fontSize: '20px' }}>{username}</Typography>
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Box>
      ) : (
        <Box
          sx={{
            borderRadius: '0.2px',
            borderColor: 'grey',
            backgroundColor: '#f0f8ff',
            height: '70px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
          }}
        >
          <Button onClick={handleMenuClick}>
            <img src={menu} alt="Menu Icon" style={{ width: '20px' }} />
          </Button>
          {isMenuOpen && (
            <Card
              sx={{
                position: 'absolute',
                top: '70px',
                left: 0,
                width: '290px',
                zIndex: 999,
                backgroundColor: "#fff"
              }}
            >
              <Nav />
            </Card>
          )}
        </Box>
      )}
    </>
  );
}

export default NavBar1;
