import React, { useState } from "react";
import {
  Grid,
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LockOutlineIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (username === "admin" && password === "admin") {
      toast.success("🦄 Thanks For Login", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setTimeout(() => {
        navigate("/Home");
      }, 1000);
    } else if (username === "admin" && password !== "admin") {
      toast.warn("Enter a Valid Password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else if (username !== "admin" && password === "admin") {
      toast.warn("Enter a Valid User Name", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error("Fill the form", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Grid
        container
        sx={{ minHeight: "100vh", width: "100%", backgroundColor: "white" }}
      >
        {/* Left: Login Form */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: { xs: 1, md: 4 },
            px: { xs: 0.1, sm: 4, md: 6 },
            order: { xs: 2, md: 1 }, // On mobile, form appears below image
          }}
        >
          <Container maxWidth="sm">
            <Box
              component={Paper}
              elevation={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                width: "100%",
                maxWidth: { xs: "100%", sm: 400 },
                mx: "auto",
                backgroundColor: "white",
              }}
            >
              <Typography variant="h4" gutterBottom>
                Login
              </Typography>

              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlineIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility}>
                        <VisibilityIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                margin="normal"
              />

              <Button
                sx={{
                  alignSelf: "flex-end",
                  textTransform: "none",
                  color: "black",
                  mb: 1,
                }}
              >
                Forgot password?
              </Button>

              <Button
                fullWidth
                sx={{
                  backgroundImage: "linear-gradient(45deg, #33eaff, #e666fb)",
                  color: "white",
                  borderRadius: 36,
                  py: 1.5,
                  ":hover": {
                    backgroundImage: "linear-gradient(45deg, #2bcbe0, #c94be1)",
                  },
                }}
                onClick={handleClick}
              >
                Submit
              </Button>

              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                  pt: 2,
                }}
              >
                <LinkedInIcon sx={{ color: blue[300] }} />
                <GitHubIcon />
                <GoogleIcon />
              </Typography>

              <Box sx={{ pt: 4, textAlign: "center" }}>
                <Typography variant="body2">Don't have an account?</Typography>
                <Button
                  sx={{ mt: 1 }}
                  variant="outlined"
                  component={Link}
                  to="/SignIn"
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Container>

          {/* Right: Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              height: "100%", // Ensure the container takes full height
            }}
          >
            <Box
              sx={{
                width: "110rem",
                height: "110%",
                position: "relative",
                justifyContent: "flex-end",
              }}
            >
              <img
                src="https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Login Visual"
                style={{
                  width: "130vh",
                  height: "100%",
                  objectFit: "cover",
                  maxHeight: "100vh",
                  marginRight: 0,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
