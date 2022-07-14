import React from "react";
import { Container } from "@mui/system";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Link,
  Typography,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <Box style={{ minHeight: 100, marginTop: 150 }} bgcolor="#000000cf">
      <Container>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="space-around"
        >
          <Grid item xs={6}>
            <Typography variant="h1" fontSize={70} color="white">
              follow us :-{" "}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <List>
              <ListItem disablePadding>
                <Link
                  href="#"
                  underline="always"
                  color="secondary"
                  component={ListItemButton}
                  disableRipple
                >
                  <ListItemIcon>
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
                  </ListItemIcon>

                  <ListItemText primary="Etherscan" />
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  href="#"
                  underline="always"
                  color="secondary"
                  component={ListItemButton}
                  disableRipple
                >
                  <ListItemIcon>
                    <Avatar
                      src="/Icons/opensea.png"
                      component={motion.div}
                      whileHover={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                      }}
                      alt="Opensea"
                    />
                  </ListItemIcon>
                  <ListItemText primary="opensea" />
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  href="#"
                  underline="always"
                  color="secondary"
                  component={ListItemButton}
                  disableRipple
                >
                  <ListItemIcon>
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
                  </ListItemIcon>
                  <ListItemText primary="Twitter" />
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
