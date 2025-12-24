import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Debug from "./pages/Debug";
import Portfolio from "./pages/Portfolio";
import Info from "./pages/Info";
import Booking from "./pages/Booking";
import AustinNeighborhood from "./pages/locations/AustinNeighborhood";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/info" element={<Info />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/debug" element={<Debug />} />
          <Route path="/locations/:neighborhood" element={<AustinNeighborhood />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}




