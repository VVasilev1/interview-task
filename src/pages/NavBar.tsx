import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";

export const NavBar: React.FC<{}> = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const [open, setOpen] = useState<boolean>(false);
  const navigation = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(!open);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickUsers = () => {
    setAnchorEl(null);
    navigation("/");
  };
  const handleCliskTasks = () => {
    setAnchorEl(null);
    navigation("/tasks");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />

            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClickUsers}>Users</MenuItem>
              <MenuItem onClick={handleCliskTasks}>Tasks</MenuItem>
            </Menu>
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
