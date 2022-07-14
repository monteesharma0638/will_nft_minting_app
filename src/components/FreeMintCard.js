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
import NftContractAbi from "./../abi/NftContract.json";
import { useContractRead, useContractWrite } from "wagmi";
import { contractAddress } from "../Config";

const nftContractArguments = {
  addressOrName: contractAddress,
  contractInterface: NftContractAbi,
};

export default function FreeMintCard({ delay, account, setAlert }) {
  const [inputValue, setInputValue] = React.useState(0);

  const freeMintAllowed = useContractRead(
    nftContractArguments,
    "freeMintAllowed",
    {
      args: [account],
      watch: true,
    }
  ).data;

  const { write, error, isError } = useContractWrite(
    nftContractArguments,
    "freeMint"
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
        if (number <= freeMintAllowed) {
          setInputValue(Math.abs(number));
        }
      }
    } else {
      setInputValue(0);
    }
  }

  async function handleFreeMint() {
    write({
      args: [inputValue],
    });
  }

  return (
    <Slide in direction="left" style={{ transitionDelay: delay }}>
      <Card sx={{ width: "100%" }} elevation={0}>
        <CardMedia
          component="img"
          height="200"
          image="/images/luffy.png"
          alt="Nft"
        />
        <CardContent>
          <Typography
            textAlign="center"
            gutterBottom
            variant="h4"
            component="div"
            fontFamily={"Fredoka One, cursive"}
          >
            Allowed Mint
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                {!Number(freeMintAllowed) ? (
                  <CancelIcon color="error" />
                ) : (
                  <CheckCircleIcon color="success" />
                )}
              </ListItemIcon>
              <ListItemText
                primary={`${
                  freeMintAllowed ? freeMintAllowed : 0
                } Free Mint Allowed`}
              />
            </ListItem>
          </List>
          <Typography variant="body2" color="text.secondary"></Typography>
          <Button
            fullWidth
            disableRipple
            startIcon={<RemoveIcon onClick={handleDecrement} color="error" />}
            endIcon={<AddIcon onClick={handleIncrement} color="action" />}
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
              fullWidth
              onChange={(e) => handleChange(e.target.value)}
              value={inputValue}
            />
          </Button>
          <ButtonGroup fullWidth disableRipple>
            <Button color="info" onClick={handleFreeMint}>
              Mint
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </Slide>
  );
}
