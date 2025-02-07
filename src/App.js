import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import TopNavbar from "./TopNavbar";
import HomePage from "./pages/homepage";
import Login from "./pages/components/Login"; 
import SignUp from "./pages/components/SignUp"; 
import AboutUs from "./pages/components/AboutUs";
import Services from "./pages/components/Services";
import Contact from "./pages/components/Contact"; // ✅ Corrected import path
import Footer from "./pages/components/Footer"; // ✅ Ensure Footer is included

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlassCursor from "./pages/components/GlassCursor";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <div>
          <TopNavbar />
          <div style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<HomePage />} /> 
              <Route path="/login" element={<Login />} /> 
              <Route path="/signup" element={<SignUp />} /> 
              <Route path="/about-us" element={<AboutUs />} /> 
              <Route path="/services" element={<Services />} /> 
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer /> {/* ✅ Added Footer component */}
          <GlassCursor />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;