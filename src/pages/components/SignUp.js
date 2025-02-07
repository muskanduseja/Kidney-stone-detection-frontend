import React from "react";
import { Card, Typography, TextField, Button } from "@mui/material";

const SignUp = () => {
  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 5, p: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Sign Up
      </Button>
    </Card>
  );
};

export default SignUp;