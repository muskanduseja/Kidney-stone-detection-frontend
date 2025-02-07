import React from "react";
import { Card, Typography, Box } from "@mui/material";

const Services = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg,rgb(67, 68, 75) 0%, #764ba2 100%)", // Gradient background
      }}
    >
      <Card
        sx={{
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          Our Services
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "#333",
            lineHeight: 1.7,
            fontSize: "1.1rem",
          }}
        >
          At Kidney Stones Detector, we provide a range of services to help
          individuals detect and manage kidney stones. Our services are designed
          to provide quick and accurate results, as well as expert advice for
          kidney stone prevention and treatment.
        </Typography>

        <Typography
          variant="h5"
          align="center"
          sx={{
            color: "#333",
            marginTop: "30px",
            fontWeight: "bold",
          }}
        >
          Our Key Services
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "#333",
            lineHeight: 1.7,
            fontSize: "1.1rem",
            marginTop: "20px",
          }}
        >
          <strong>Kidney Stone Detection:</strong> Our advanced diagnostic tools
          help detect kidney stones in the early stages, allowing for timely
          intervention and treatment.
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "#333",
            lineHeight: 1.7,
            fontSize: "1.1rem",
            marginTop: "20px",
          }}
        >
          <strong>Expert Health Insights:</strong> We provide personalized health
          advice to help prevent the formation of kidney stones and improve
          kidney health.
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "#333",
            lineHeight: 1.7,
            fontSize: "1.1rem",
            marginTop: "20px",
          }}
        >
          <strong>24/7 Online Consultation:</strong> Our expert team is available
          around the clock to answer any queries you may have regarding kidney
          stones and related health issues.
        </Typography>
      </Card>
    </Box>
  );
};

export default Services;