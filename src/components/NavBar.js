import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Avatar, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Container } from "@mui/system";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        variant="outlined"
        elevation={0}
      >
        <Toolbar variant="dense">
          <Box sx={{ display: "flex", flexGrow: 1 }} />
          <Box>
            <IconButton
              component="a"
              href="https://etherscan.io"
              target="_blank"
            >
              <Avatar
                src="/Icons/ethereum.png"
                component={motion.div}
                whileHover={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                alt="etherscan"
              />
            </IconButton>
            <IconButton component="a" href="https://opensea.io" target="_blank">
              <Avatar
                src="/Icons/opensea.png"
                component={motion.div}
                whileHover={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                alt="opensea"
              />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com"
              target="_blank"
            >
              <Avatar
                src="/Icons/twitterbutton.png"
                component={motion.div}
                whileHover={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                alt="Twitter"
              />
            </IconButton>
          </Box>
          <ConnectButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
