import React from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { Person, Email, Message } from "@mui/icons-material"; // Icons for fields

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Gradient background
      }}
    >
      <Container
        sx={{
          maxWidth: "500px",
          background: "rgba(255, 255, 255, 0.9)",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", color: "#333", mb: 3 }}
        >
          Contact Us
        </Typography>

        {/* Name Field */}
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: <Person sx={{ color: "#667eea", mr: 1 }} />, // Name icon
          }}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#667eea", // Border color
              },
              "&:hover fieldset": {
                borderColor: "#764ba2", // Hover border color
              },
            },
          }}
        />

        {/* Email Field */}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: <Email sx={{ color: "#667eea", mr: 1 }} />, // Email icon
          }}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#667eea", // Border color
              },
              "&:hover fieldset": {
                borderColor: "#764ba2", // Hover border color
              },
            },
          }}
        />

        {/* Message Field */}
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          InputProps={{
            startAdornment: <Message sx={{ color: "#667eea", mr: 1 }} />, // Message icon
          }}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#667eea", // Border color
              },
              "&:hover fieldset": {
                borderColor: "#764ba2", // Hover border color
              },
            },
          }}
        />

        {/* Send Message Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Gradient button
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16px",
            "&:hover": {
              background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)", // Hover effect
            },
          }}
        >
          Send Message
        </Button>
      </Container>
    </Box>
  );
};

export default Contact;