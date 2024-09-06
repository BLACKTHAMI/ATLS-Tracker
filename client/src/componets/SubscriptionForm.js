import React, { useState } from "react";
import axios from "axios";

import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Snackbar,
} from "@mui/material";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/subscriptions", { email, phoneNumber });
      setSnackbarMessage("Subscription successful!");
      setOpenSnackbar(true);
      setEmail("");
      setPhoneNumber("");
    } catch (error) {
      console.error("Error subscribing:", error);
      setSnackbarMessage("Failed to subscribe. Please try again.");
      setOpenSnackbar(true);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Subscribe for Course Notifications
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phoneNumber"
            label="WhatsApp Number"
            type="tel"
            id="phoneNumber"
            autoComplete="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </Container>
  );
};

export default SubscriptionForm;
