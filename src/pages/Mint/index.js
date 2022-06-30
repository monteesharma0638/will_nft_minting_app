import React from "react";
import NavBar from "../../components/NavBar";
import { Container, Grid } from "@mui/material";
import FreeMintCard from "../../components/FreeMintCard";
import Footer from "../../components/Footer";
import PublicMintCard from "../../components/PublicMintCard";
import { useAccount } from "wagmi";
import WalletNotConnected from "../../components/WalletNotConnected";
import BelowNavBar from "../../components/BelowNavBar";
import AnimateAlert from "../../components/AnimateAlert";

export default function Mint() {
  const account = useAccount();
  const [open, setOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("An Error Occured");

  function setAlert(message) {
    setAlertMessage(message);
    setOpen(true);
  }

  return (
    <div>
      <NavBar />
      {account.data && account.data.address ? (
        <BelowNavBar account={account.data.address} />
      ) : (
        <></>
      )}
      <Container
        sx={{
          marginTop: 10,
        }}
      >
        <AnimateAlert
          message={alertMessage}
          type="error"
          open={open}
          setOpen={setOpen}
        />
        <Grid
          container
          spacing={4}
          style={{
            marginTop: 10,
          }}
        >
          <Grid item xs={12} md={6}>
            {account.data && account.data.address ? (
              <FreeMintCard
                delay={400}
                account={account.data.address}
                setAlert={setAlert}
              />
            ) : (
              <WalletNotConnected delay={400} />
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            {account.data && account.data.address ? (
              <PublicMintCard
                delay={500}
                account={account.data.address}
                setAlert={setAlert}
              />
            ) : (
              <WalletNotConnected delay={500} />
            )}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
