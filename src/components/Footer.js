import React from "react";
import { Container } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
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
} from "@mui/material";

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
                  disableFocusRipple
                >
                  <ListItemIcon>
                    <FacebookIcon />
                  </ListItemIcon>

                  <ListItemText primary="Facebook" />
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  href="#"
                  underline="always"
                  color="secondary"
                  component={ListItemButton}
                  disableRipple
                  disableFocusRipple
                >
                  <ListItemIcon>
                    <TwitterIcon />
                  </ListItemIcon>
                  <ListItemText primary="Twitter" />
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  href="#"
                  underline="always"
                  color="secondary"
                  component={ListItemButton}
                  disableRipple
                  disableFocusRipple
                >
                  <ListItemIcon>
                    <TelegramIcon />
                  </ListItemIcon>
                  <ListItemText primary="Telegram" />
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
