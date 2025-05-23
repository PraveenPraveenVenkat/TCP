import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        bgcolor: "#77feb8",
        color: "white",
        py: 2,
      }}
    >
      <Typography variant="body2" color="error">
        © Copyrights - All Rights Reserved. {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
