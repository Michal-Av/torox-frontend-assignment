import React from "react";
import { AppBar, Toolbar, IconButton, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, rgba(13, 21, 48, 1) 0%, rgba(25, 32, 64, 1) 100%)",
        boxShadow: "none",
        color: "white",
        minWidth: "100%",
      }}
    >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box component="img" src="/logo.png" alt="Logo" sx={{ alignItems: "center", justifyContent: "center", height: 40, cursor: "pointer" }} />

          <Box sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <Button color="inherit" startIcon={<HomeIcon />} href="/home">
              Home
            </Button>
          </Box>

          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;
