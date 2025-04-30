import {
  Container,
  Typography,
  Button,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HttpsIcon from "@mui/icons-material/Https";
import { blue } from "@mui/material/colors";
import React from "react";

const SignIn = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url('https://images.pexels.com/photos/941195/pexels-photo-941195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* //?SignIn Form */}
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Sign In
        </Typography>
        <Box
          sx={{
            display: "flex",
            height: "500px",
            boxShadow: 3,
            borderRadius: 2,
            overflow: "hidden",
            p: {
              xs: 1, // smaller padding on extra small screens
              sm: 4,
              md: 6,
            },
          }}
        >
          {/* //? Left Side */}
          <Box
            sx={{
              width: "50%",
              backgroundColor: "#77feb8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Welcome To TCP
            </Typography>
          </Box>

          {/*//? Right Side */}
          <Box
            sx={{
              width: "50%",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 4,
            }}
          >
            <Typography
              variant="h5"
              align="center"
              color="secondary"
              gutterBottom
            >
              Welcome User
            </Typography>

            <TextField
              variant="outlined"
              label="Name"
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              label="Email"
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              label="Password"
              fullWidth
              margin="normal"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HttpsIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                pt: 2,
              }}
            >
              <LinkedInIcon sx={{ color: blue[700] }} />
              <GitHubIcon sx={{ color: "#262626" }} />
              <GoogleIcon sx={{ color: "#262626" }} />
            </Typography>

            <Button
              variant="contained"
              sx={{
                width: "12rem",
                marginLeft: 20,
                marginTop: 12,
                borderRadius: 2,
                p: {
                  xs: 3, // smaller padding on extra small screens
                  sm: 2,
                  md: 2,
                },
              }}
            >
              Contained
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default SignIn;
