import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Links } from "./Links";
import AccountCircle from '@mui/icons-material/AccountCircle';

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box display='flex' justifyContent='space-between' alignItems='center' sx={{width: '100%'}}>
          <Links to="/" title={"Courses"} />
          <AccountCircle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
