import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { LogoutOutlined } from "@mui/icons-material";
import { Route, Redirect , useNavigate} from 'react-router-dom';

import axios from 'axios'


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  const navigateToSignin = () => {
    // 👇️ navigate to /contacts
    navigate(`/login`);
  };
  const isAuthenticated = !!localStorage.getItem('token');
  const handleLogout = () => {
    axios.get('http://localhost:5000/api/signout').then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('id')
     navigateToSignin()
    });
  };
  

  return (
   
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
      
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton>
          <LogoutOutlined 
          onClick={handleLogout}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
