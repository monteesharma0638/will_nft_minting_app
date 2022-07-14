import { Button, Grow } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

import NavBar from "../../components/NavBar";
import Section1 from "./Section1";

export default function Home() {
  const [enterCarnival, setEnterCarnival] = React.useState(0);

  return (
    <div>
      {enterCarnival ? (
        <Grow
          in
          style={{
            transitionDuration: 1500,
            transitionTimingFunction: "ease",
          }}
        >
          <div
            style={{
              height: "100vh",
              backgroundImage: "url('/images/carnival.png')",
              backgroundSize: "100% 100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              style={{
                marginTop: "20rem",
              }}
              component={Link}
              to="/mint"
            >
              Enter to Carnival
            </Button>
          </div>
        </Grow>
      ) : (
        <>
          <NavBar />
          <Section1 setEnterCarnival={setEnterCarnival} />
          <Footer />
        </>
      )}
    </div>
  );
}
