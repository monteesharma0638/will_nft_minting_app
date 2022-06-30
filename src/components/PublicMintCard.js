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
import CircleIcon from "@mui/icons-material/Circle";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import NftContractAbi from "./../abi/NftContract.json";
import { useContractRead, useContractWrite } from "wagmi";
import { contractAddress } from "../Config";

const nftContractArguments = {
  addressOrName: contractAddress,
  contractInterface: NftContractAbi,
};

export default function PublicMintCard({ delay, setAlert }) {
  const [inputValue, setInputValue] = React.useState(0);

  const publicMintFee = useContractRead(nftContractArguments, "publicMintFee", {
    watch: true,
  }).data;

  function handleIncrement() {
    handleChange(inputValue + 1);
  }

  function handleDecrement() {
    handleChange(inputValue - 1);
  }

  async function handleChange(value) {
    if (value !== "") {
      const number = Number(value);
      if (number) {
        setInputValue(Math.abs(number));
      }
    } else {
      setInputValue(0);
    }
  }

  const { write, error, isError } = useContractWrite(
    nftContractArguments,
    "publicMint"
  );

  React.useEffect(() => {
    if (isError) {
      try {
        const message = error.message.split("message")[1].split("data")[0];
        setAlert(message);
      } catch (err) {
        setAlert(error.message);
      }
    }
  }, [isError]);

  async function handlePublicMint() {
    write({
      args: [inputValue],
      overrides: {
        value: window.BigInt(Number(publicMintFee) * inputValue),
      },
    });
  }

  return (
    <Slide in direction="left" style={{ transitionDelay: delay }}>
      <Card sx={{ width: "100%" }} elevation={0}>
        <CardMedia
          component="img"
          height="200"
          image="/images/luffyChiba.jpg"
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
            Public Mint
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <ListItemText
                primary={`Minting fee: ${
                  Number(publicMintFee) / 10 ** 18
                } ether`}
              />
            </ListItem>
          </List>
          <Typography variant="body2" color="text.secondary"></Typography>
          <Button
            fullWidth
            disableRipple
            startIcon={<RemoveIcon color="error" onClick={handleDecrement} />}
            endIcon={<AddIcon color="action" onClick={handleIncrement} />}
            sx={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            <TextField
              inputProps={{
                style: {
                  textAlign: "center",
                },
              }}
              variant="standard"
              color="warning"
              onChange={(e) => handleChange(e.target.value)}
              fullWidth
              value={inputValue}
            />
          </Button>
          <ButtonGroup fullWidth disableRipple>
            <Button color="success" onClick={handlePublicMint}>
              Mint
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </Slide>
  );
}
