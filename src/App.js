import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./ContextProvider";
import Home from "./pages/Home";
import Mint from "./pages/Mint";
import "react-slideshow-image/dist/styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WithContext Element={Home} />} />
        <Route path="/mint" element={<WithContext Element={Mint} />} />
      </Routes>
    </Router>
  );
}

function WithContext({ Element }) {
  return (
    <ContextProvider>
      <Element />
    </ContextProvider>
  );
}
