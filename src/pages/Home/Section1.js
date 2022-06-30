import React from "react";
import {
  Card,
  Grid,
  Container,
  Typography,
  Button,
  ButtonGroup,
  Slide,
  Zoom,
  Box,
  CardMedia,
} from "@mui/material";
import { Fade } from "react-slideshow-image";
import { Link } from "react-router-dom";
import MintButton from "../../components/MintButton";

const slideImages = [
  {
    url: "images/slide_1.jpg",
    caption: "Slide 1",
  },
];

export default function Section1() {
  return (
    <Slide direction="up" in style={{ transitionDelay: 300 }}>
      <Container
        style={{
          marginTop: 100,
          background: "radial-gradient(black, transparent)",
        }}
      >
        <Zoom in style={{ transitionDelay: 500 }}>
          <Typography variant="h1" color="greenyellow" textAlign="center">
            {" "}
            Up-side down Town{" "}
          </Typography>
        </Zoom>
        <Typography color="white" variant="subtitle1">
          Minting refers to the process of taking a digital asset (such as
          digital art or music) and placing it on the blockchain. Once the asset
          is minted to the blockchain, it can then be traded on the best NFT
          marketplaces, allowing you to monetize your creation.
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Card>
              <CardMedia
                component="img"
                height="600"
                image="/images/slide_1.jpg"
                alt="green iguana"
              />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h3" color="whitesmoke">
              {" "}
              Details{" "}
            </Typography>
            <Typography color="white" variant="subtitle1">
              Minting refers to the process of taking a digital asset (such as
              digital art or music) and placing it on the blockchain. Once the
              asset is minted to the blockchain, it can then be traded on the
              best NFT marketplaces, allowing you to monetize your creation.
            </Typography>
            <Typography color="white" variant="subtitle1">
              Minting refers to the process of taking a digital asset (such as
              digital art or music) and placing it on the blockchain. Once the
              asset is minted to the blockchain, it can then be traded on the
              best NFT marketplaces, allowing you to monetize your creation.
            </Typography>
            <Box
              component={Link}
              to="/mint"
              justifyContent="center"
              display="flex"
            >
              <MintButton />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Slide>
  );
}
