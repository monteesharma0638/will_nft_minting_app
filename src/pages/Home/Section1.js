import React from "react";
import {
  Card,
  Grid,
  Container,
  Typography,
  Slide,
  Zoom,
  Box,
  CardMedia,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import MintButton from "../../components/MintButton";

export default function Section1({ setEnterCarnival }) {
  return (
    <Slide direction="up" in style={{ transitionDelay: 300 }}>
      <Container
        style={{
          marginTop: 100,
          background: "radial-gradient(black, transparent)",
        }}
      >
        <Zoom in style={{ transitionDelay: 500 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: 50,
                md: 100,
              },
            }}
            color="greenyellow"
            textAlign="center"
          >
            {" "}
            Upside Down Town{" "}
          </Typography>
        </Zoom>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                sx={{
                  height: {
                    xs: 400,
                    sm: 500,
                    md: 600,
                  },
                }}
                image="/images/slide_1.jpg"
                alt="green iguana"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="white" variant="subtitle1">
              Upside Down Town is a 100% free mint multi-collection including
              10,000 PFP NFTs, all on the Ethereum blockchain, hosted on IPFS,
              smart contract ERC-721A with optimized gas. This is a CC0 project
              that only uses Twitter, no roadmap.
            </Typography>
            <Typography color="white" variant="subtitle1">
              The community is a very carefree mash of goblin degens who have
              one objective and that is reporting all scams they find. Instead
              of just blocking or ignoring them, Upside Down Town hunts them
              down and files reports until the scammers are destroyed!
            </Typography>
            <Typography color="white" variant="subtitle1">
              Much of the plans for Upside Down Town are kept private but it is
              clear we want to take you on a journey starting with the first
              free mint being an essential key to the rest of the puzzle. You
              can expect many announcements, multiple drops and puzzles to be
              solved for prizes from this project.
            </Typography>
            <Tooltip title="Go to Mint Page">
              <Box
                onClick={() => setEnterCarnival(1)}
                justifyContent="center"
                display="flex"
              >
                <MintButton />
              </Box>
            </Tooltip>
          </Grid>
        </Grid>
      </Container>
    </Slide>
  );
}
