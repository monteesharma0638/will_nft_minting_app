import {
  AppBar,
  Container,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import ApiIcon from "@mui/icons-material/Api";
import { useContractRead } from "wagmi";
import { contractAddress, chainId } from "../Config";

import NftContractAbi from "./../abi/NftContract.json";

const nftContractArguments = {
  addressOrName: contractAddress,
  contractInterface: NftContractAbi,
};

export default function BelowNavBar({ account }) {
  const totalSupply = useContractRead(nftContractArguments, "totalSupply", {
    watch: true,
    chainId,
  }).data;
  const MAX_Supply = useContractRead(nftContractArguments, "MAX_Supply", {
    chainId,
  }).data;
  const owned = useContractRead(nftContractArguments, "balanceOf", {
    args: [account],
    chainId,
    watch: true,
  }).data;
  const remainingSupply = useContractRead(
    nftContractArguments,
    "remainingSupply",
    {
      chainId,
      watch: true,
    }
  ).data;

  return (
    <div>
      <AppBar
        position="static"
        color="transparent"
        variant="outlined"
        elevation={0}
      >
        <Toolbar variant="dense">
          <Container>
            <Grid container style={{ color: "white" }}>
              <Grid item xs={12} sm={6} lg={3}>
                <ListItem>
                  <ListItemIcon>
                    <ApiIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Owned : ${owned}`} />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <ListItem>
                  <ListItemIcon>
                    <ApiIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Total Supply : ${totalSupply}`} />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <ListItem>
                  <ListItemIcon>
                    <ApiIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Maximum Supply : ${MAX_Supply}`} />
                </ListItem>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <ListItem>
                  <ListItemIcon>
                    <ApiIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Remaining Supply : ${remainingSupply}`}
                  />
                </ListItem>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
