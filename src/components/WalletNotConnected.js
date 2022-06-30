import * as React from "react";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";

export default function WalletNotConnected({ delay }) {
  return (
    <Slide in direction="left" style={{ transitionDelay: delay }}>
      <Card sx={{ width: "100%" }} elevation={0}>
        <CardMedia
          component="img"
          height="200"
          image="/images/WalletNotConnected.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            textAlign="center"
            gutterBottom
            variant="h4"
            component="div"
            fontFamily={"Fredoka One, cursive"}
          >
            Wallet Not Connected
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CancelIcon color="error" />
              </ListItemIcon>
              <ListItemText primary="Please Connect with an ethereum wallet" />
            </ListItem>
          </List>
          <Typography variant="body2" color="text.secondary"></Typography>
          <ButtonGroup fullWidth disableRipple>
            <Button component={Link} to="/" color="info">
              Go To Home
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </Slide>
  );
}
