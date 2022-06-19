import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Avatar, IconButton } from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" color="white"></Typography>
          <Box sx={{ display: "flex", flexGrow: 1 }} />
          <IconButton>
            <Avatar
              src="/images/button-ether.png"
              style={{
                height: 75,
                width: 75,
              }}
              className="button-avatar"
              alt="..."
            />
          </IconButton>
          <IconButton>
            <Avatar
              src="/images/button-opensea.png"
              style={{
                height: 75,
                width: 75,
              }}
              className="button-avatar"
              alt="..."
            />
          </IconButton>
          <IconButton>
            <Avatar
              src="/images/twitterbutton.png"
              style={{
                height: 75,
                width: 75,
              }}
              className="button-avatar"
              alt="..."
            />
          </IconButton>
          <ConnectButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
