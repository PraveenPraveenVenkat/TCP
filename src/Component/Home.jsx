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
  useMediaQuery,
  ThemeProvider,
  createTheme,
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

// Define custom theme
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Mobile
      sm: 576, // Large mobile/Small tablet
      md: 768, // Tablet
      lg: 1024, // Laptop
      xl: 1280, // Desktop
      xxl: 1536, // Large Desktop
    },
  },
  palette: {
    primary: {
      main: "#172146",
    },
    secondary: {
      main: "#77feb8",
    },
  },
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  // Use our custom breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

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
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          width: "100%", 
          overflow: "hidden",
          height: "100vh",
          // xs:{marginTop:'72rem',}
        }}
      >
        <Grid
          container
          sx={{ 
            minHeight: "100vh", 
            width: "100%", 
            backgroundColor: "white",
          }}
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
              py: { xs: 2, sm: 3, md: 4 },
              px: { xs: 2, sm: 3, md: 6 },
              order: { xs: 2, md: 1 },
              width: "100%",
              height: { xs: "auto", md: "100vh" },
              overflow: "auto",
            }}
          >
            <Container 
              maxWidth="sm" 
              sx={{ 
                width: "100%",
                py: { xs: 2, sm: 3, md: 0 },
              }}
            >
              <Box
                component={Paper}
                elevation={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: { xs: 1.5, sm: 2 },
                  p: { xs: 2.5, sm: 3, md: 4 },
                  borderRadius: { xs: 3, md: 4 },
                  width: "100%",
                  maxWidth: { xs: "100%", sm: 400 },
                  mx: "auto",
                  backgroundColor: "white",
                  boxShadow: isMobile ? "0 4px 12px rgba(0,0,0,0.1)" : 6,
                }}
              >
                <Typography 
                  variant={isMobile ? "h5" : "h4"} 
                  gutterBottom
                  sx={{
                    mb: { xs: 1, md: 2 },
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                  }}
                >
                  Login
                </Typography>

                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  color="primary"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  margin="normal"
                  size={isMobile ? "small" : "medium"}
                />

                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  color="primary"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlineIcon color="primary" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility} size={isMobile ? "small" : "medium"}>
                          <VisibilityIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  margin="normal"
                  size={isMobile ? "small" : "medium"}
                />

                <Button
                  sx={{
                    alignSelf: "flex-end",
                    textTransform: "none",
                    color: theme.palette.primary.main,
                    mb: { xs: 0.5, md: 1 },
                    fontSize: isMobile ? "0.8rem" : "0.875rem",
                  }}
                >
                  Forgot password?
                </Button>

                <Button
                  fullWidth
                  color="secondary"
                  variant="contained"
                  sx={{
                    backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: "white",
                    borderRadius: 36,
                    py: { xs: 1, md: 1.5 },
                    mt: { xs: 1, md: 0 },
                    ":hover": {
                      backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.dark || "#0f1528"}, ${theme.palette.secondary.dark || "#4eccaa"})`,
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
                    gap: isMobile ? 2 : 3,
                    pt: { xs: 1.5, md: 2 },
                  }}
                >
                  <LinkedInIcon sx={{ color: blue[300], fontSize: isMobile ? "1.5rem" : "1.75rem" }} />
                  <GitHubIcon sx={{ fontSize: isMobile ? "1.5rem" : "1.75rem" }} />
                  <GoogleIcon sx={{ fontSize: isMobile ? "1.5rem" : "1.75rem" }} />
                </Typography>

                <Box sx={{ pt: { xs: 2, md: 4 }, textAlign: "center" }}>
                  <Typography variant="body2">Don't have an account?</Typography>
                  <Button
                    sx={{ mt: { xs: 0.5, md: 1 } }}
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to="/SignIn"
                    size={isMobile ? "small" : "medium"}
                  >
                    Sign In
                  </Button>
                </Box>
              </Box>
            </Container>
          </Grid>

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
              position: "relative",
              padding: 0,
              height: "100vh",
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src="https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Login Visual"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Login;