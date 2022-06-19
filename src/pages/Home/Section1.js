import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

export default function Section1() {
  return (
    <div>
      <Container>
        <Box bgcolor="blue">
          <Grid container>
            <Grid item xs={6}>
              <Box display="flex" justifyContent="center">
                Hello 1
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" justifyContent="center">
                Hello 1
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
