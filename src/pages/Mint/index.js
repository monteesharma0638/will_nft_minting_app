import React from "react";
import NavBar from "../../components/NavBar";
import { Container, Grid } from "@mui/material";
import FreeMintCard from "../../components/FreeMintCard";
import Footer from "../../components/Footer";

export default function Mint() {
  return (
    <div>
      <NavBar />
      <Container
        sx={{
          marginTop: 20,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FreeMintCard delay={400} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FreeMintCard delay={500} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
