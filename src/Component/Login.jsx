
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

// import React, { useState } from "react";
// import {
//   Grid,
//   Container,
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Button,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { toast, Bounce } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import PersonIcon from "@mui/icons-material/Person";
// import LockOutlineIcon from "@mui/icons-material/LockOutlined";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";
// import { Link } from "react-router-dom";
// import { blue } from "@mui/material/colors";

// // Custom styles with media queries
// const styles = {
//   "@media (max-width: 600px)": {
//     loginContainer: {
//       padding: "16px",
//       marginTop: "20px",
//       marginBottom: "20px",
//     },
//     formPaper: {
//       padding: "16px",
//       borderRadius: "16px",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//     },
//     loginTitle: {
//       fontSize: "1.5rem",
//       marginBottom: "16px",
//     },
//     socialIcons: {
//       gap: "20px",
//     },
//   },
// };

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const handleClick = () => {
//     if (username === "admin" && password === "admin") {
//       toast.success("🦄 Thanks For Login", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: Bounce,
//       });
//       setTimeout(() => {
//         navigate("/Home");
//       }, 1000);
//     } else if (username === "admin" && password !== "admin") {
//       toast.warn("Enter a Valid Password", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: Bounce,
//       });
//     } else if (username !== "admin" && password === "admin") {
//       toast.warn("Enter a Valid User Name", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: Bounce,
//       });
//     } else {
//       toast.error("Fill the form", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: Bounce,
//       });
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <Box 
//       sx={{ 
//         width: "100%", 
//         overflow: "hidden",
//         height: "100vh",
//       }}
//     >
//       <Grid
//         container
//         sx={{ 
//           minHeight: "100vh", 
//           width: "100%", 
//           backgroundColor: "white",
//         }}
//       >
//         {/* Left: Login Form */}
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             py: { xs: 2, md: 4 },
//             px: { xs: 2, sm: 4, md: 6 },
//             order: { xs: 2, md: 1 },
//             width: "100%",
//             height: { xs: "auto", md: "100vh" },
//             overflow: "auto",
//           }}
//         >
//           <Container 
//             maxWidth="sm" 
//             sx={{ 
//               width: "100%",
//               py: { xs: 2, md: 0 },
//               ...(isMobile && styles["@media (max-width: 600px)"].loginContainer)
//             }}
//           >
//             <Box
//               component={Paper}
//               elevation={6}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 gap: { xs: 1.5, md: 2 },
//                 p: { xs: 2.5, md: 4 },
//                 borderRadius: { xs: 3, md: 4 },
//                 width: "100%",
//                 maxWidth: { xs: "100%", sm: 400 },
//                 mx: "auto",
//                 backgroundColor: "white",
//                 ...(isMobile && styles["@media (max-width: 600px)"].formPaper)
//               }}
//             >
//               <Typography 
//                 variant={isMobile ? "h5" : "h4"} 
//                 gutterBottom
//                 sx={{
//                   mb: { xs: 1, md: 2 },
//                   ...(isMobile && styles["@media (max-width: 600px)"].loginTitle)
//                 }}
//               >
//                 Login
//               </Typography>

//               <TextField
//                 fullWidth
//                 label="Username"
//                 variant="outlined"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <PersonIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//                 margin="normal"
//                 size={isMobile ? "small" : "medium"}
//               />

//               <TextField
//                 fullWidth
//                 label="Password"
//                 type={showPassword ? "text" : "password"}
//                 variant="outlined"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <LockOutlineIcon />
//                     </InputAdornment>
//                   ),
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton onClick={togglePasswordVisibility} size={isMobile ? "small" : "medium"}>
//                         <VisibilityIcon />
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//                 margin="normal"
//                 size={isMobile ? "small" : "medium"}
//               />

//               <Button
//                 sx={{
//                   alignSelf: "flex-end",
//                   textTransform: "none",
//                   color: "black",
//                   mb: { xs: 0.5, md: 1 },
//                   fontSize: isMobile ? "0.8rem" : "0.875rem",
//                 }}
//               >
//                 Forgot password?
//               </Button>

//               <Button
//                 fullWidth
//                 sx={{
//                   backgroundImage: "linear-gradient(45deg, #33eaff, #e666fb)",
//                   color: "white",
//                   borderRadius: 36,
//                   py: { xs: 1, md: 1.5 },
//                   mt: { xs: 1, md: 0 },
//                   ":hover": {
//                     backgroundImage: "linear-gradient(45deg, #2bcbe0, #c94be1)",
//                   },
//                 }}
//                 onClick={handleClick}
//               >
//                 Submit
//               </Button>

//               <Typography
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap: isMobile ? 2 : 3,
//                   pt: { xs: 1.5, md: 2 },
//                   ...(isMobile && styles["@media (max-width: 600px)"].socialIcons)
//                 }}
//               >
//                 <LinkedInIcon sx={{ color: blue[300], fontSize: isMobile ? "1.5rem" : "1.75rem" }} />
//                 <GitHubIcon sx={{ fontSize: isMobile ? "1.5rem" : "1.75rem" }} />
//                 <GoogleIcon sx={{ fontSize: isMobile ? "1.5rem" : "1.75rem" }} />
//               </Typography>

//               <Box sx={{ pt: { xs: 2, md: 4 }, textAlign: "center" }}>
//                 <Typography variant="body2">Don't have an account?</Typography>
//                 <Button
//                   sx={{ mt: { xs: 0.5, md: 1 } }}
//                   variant="outlined"
//                   component={Link}
//                   to="/SignIn"
//                   size={isMobile ? "small" : "medium"}
//                 >
//                   Sign In
//                 </Button>
//               </Box>
//             </Box>
//           </Container>
//         </Grid>

//         {/* Right: Image */}
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{
//             display: { xs: "none", md: "flex" },
//             alignItems: "center",
//             justifyContent: "center",
//             overflow: "hidden",
//             position: "relative",
//             padding: 0,
//             height: "100vh",
//             order: { xs: 1, md: 2 },
//           }}
//         >
//           <Box
//             sx={{
//               position: "absolute",
//               top: 0,
//               right: 0,
//               bottom: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//             }}
//           >
//             <img
//               src="https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt="Login Visual"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 objectPosition: "center",
//               }}
//             />
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Login;