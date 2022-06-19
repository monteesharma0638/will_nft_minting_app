import * as React from "react";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function FreeMintCard({ delay }) {
  return (
    <Slide in direction="left" style={{ transitionDelay: delay }}>
      <Card sx={{ width: "100%" }} elevation={0}>
        <CardMedia
          component="img"
          height="200"
          image="/images/Slide_1.jpg"
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
            Free Mint
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Correct Network" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CancelIcon color="error" />
              </ListItemIcon>
              <ListItemText primary="0 Free Mint Available" />
            </ListItem>
          </List>
          <Typography variant="body2" color="text.secondary"></Typography>
          <Button
            fullWidth
            disableRipple
            startIcon={<RemoveIcon color="error" />}
            endIcon={<AddIcon color="action" />}
            sx={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            <TextField variant="standard" color="warning" fullWidth />
          </Button>
          <ButtonGroup fullWidth disableRipple>
            <Button color="info">Reset</Button>
            <Button color="success">Mint</Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </Slide>
  );
}
