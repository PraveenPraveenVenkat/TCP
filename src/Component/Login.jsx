

import React, { useState } from 'react';
import {
  Grid, Container, Box, Paper, Typography,
  TextField, InputAdornment, IconButton, Button,
  useMediaQuery, useTheme
} from '@mui/material';
import { toast, Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import { blue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create custom theme with enhanced breakpoints
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,      // Mobile phones
      sm: 600,    // Tablets
      md: 900,    // Small laptops
      lg: 1200,   // Desktops
      xl: 1536,   // Large desktops
    },
  },
  palette: {
    primary: {
      main: '#33eaff',
    },
    secondary: {
      main: '#e666fb',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  // Use media queries for responsive behavior
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = () => {
    if (username === 'admin' && password === 'admin') {
      toast.success('🦄 Thanks For Login', {
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
        navigate('/Home');
      }, 1000);
    } else if (username === 'admin' && password !== 'admin') {
      toast.warn('Enter a Valid Password', {
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
    } else if (username !== 'admin' && password === 'admin') {
      toast.warn('Enter a Valid User Name', {
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
      toast.error('Fill the form', {
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

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Grid container sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        {/* Left: Login Form - This will be full width on mobile and half on desktop */}
        <Grid 
          item 
          xs={12} 
          md={6} 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            minHeight: '100vh',
            p: { xs: 2, sm: 4, md: 6 },
            order: { xs: 2, md: 1 } // On mobile, form appears below image
          }}
        >
          <Container maxWidth="sm">
            <Box 
              component={Paper} 
              elevation={isMobile ? 0 : 6} 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: 3, 
                p: { xs: 3, sm: 4 }, 
                borderRadius: theme.shape.borderRadius * 2, 
                width: '100%', 
                maxWidth: { xs: '100%', sm: 450 }, 
                backgroundColor: 'white',
                boxShadow: isMobile ? 'none' : undefined,
              }}
            >
              {/* Logo could go here */}
              <Typography 
                variant="h4" 
                sx={{ 
                  fontSize: { xs: '1.75rem', sm: '2rem' },
                  mb: 2,
                  color: '#333',
                  fontWeight: 700
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
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 1 }}
              />

              <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 1 }}
              />

              <Box 
                sx={{ 
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'flex-end', 
                  mb: 2 
                }}
              >
                <Button 
                  sx={{ 
                    textTransform: 'none', 
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: theme.palette.secondary.main,
                    }
                  }}
                >
                  Forgot password?
                </Button>
              </Box>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundImage: 'linear-gradient(45deg, #33eaff, #e666fb)',
                  color: 'white',
                  borderRadius: '24px',
                  padding: '10px 0',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    backgroundImage: 'linear-gradient(45deg, #2bcbe0, #c94be1)',
                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                    transform: 'translateY(-2px)'
                  },
                }}
                onClick={handleClick}
                size="large"
              >
                Login
              </Button>

              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#666', 
                  mt: 3, 
                  textAlign: 'center' 
                }}
              >
                Or sign in with
              </Typography>

              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: 4, 
                  mt: 1 
                }}
              >
                <IconButton 
                  sx={{ 
                    color: blue[700], 
                    '&:hover': { 
                      backgroundColor: blue[50] 
                    } 
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton 
                  sx={{ 
                    '&:hover': { 
                      backgroundColor: '#f0f0f0' 
                    } 
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton 
                  sx={{ 
                    color: '#DB4437', 
                    '&:hover': { 
                      backgroundColor: '#ffebee' 
                    } 
                  }}
                >
                  <GoogleIcon />
                </IconButton>
              </Box>

              <Box 
                sx={{ 
                  width: '100%', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 1, sm: 2 },
                  mt: 3 
                }}
              >
                <Typography variant="body1" sx={{ color: '#666' }}>
                  Don't have an account?
                </Typography>
                <Button 
                  variant="outlined" 
                  component={Link} 
                  to="/SignIn"
                  sx={{
                    borderColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.main,
                    '&:hover': {
                      borderColor: theme.palette.secondary.dark,
                      backgroundColor: 'rgba(230, 102, 251, 0.04)'
                    }
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Container>
        </Grid>

        {/* Right: Image - Hidden on mobile, visible on desktop */}
        <Grid 
          item 
          xs={12} 
          md={6} 
          sx={{ 
            display: { xs: 'none', md: 'block' },
            position: 'relative',
            overflow: 'hidden',
            order: { xs: 1, md: 2 } // On mobile, image appears above form (though hidden by default)
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.3)', // Overlay for better text visibility
              zIndex: 1
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              textAlign: 'center',
              width: '80%',
              color: 'white'
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Welcome Back
            </Typography>
            <Typography variant="body1">
              Access your account to manage your digital solutions
            </Typography>
          </Box>
          <img
            src='https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt="Login Visual"
            style={{ 
              width: '100%', 
              height: '100vh', 
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
// import React, { useState } from 'react';
// import {
//   Grid, Container, Box, Paper, Typography,
//   TextField, InputAdornment, IconButton, Button
// } from '@mui/material';
// import { toast, Bounce } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import PersonIcon from '@mui/icons-material/Person';
// import LockOutlineIcon from '@mui/icons-material/LockOutlined';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import GoogleIcon from '@mui/icons-material/Google';
// import { Link } from 'react-router-dom';
// import { blue } from '@mui/material/colors';
// // import logo from 'logo.png'


// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleClick = () => {
//     if (username === 'admin'  && password === 'admin') {
//       toast.success('🦄 Thanks For Login', {
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
//         navigate('/Home');
//       }, 1000);

//     } else if (username  === 'admin' && password !== 'admin'){
//       toast.warn('Enter a Valid Password', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: Bounce,
//         });
        
//     }else if (username  !== 'admin' && password === 'admin'){
//       toast.warn('Enter a Valid User Name', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         transition: Bounce,
//         });
        
//     }
//     else {
//       toast.error('Fill  the form', {
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

  
//   // padding: { xs: 1, sm: 6, md: 8, lg: 12, xl:14 },
//     // Mobile:0,table:768,laptop:1024:desktop:1200
    

//   return (
//     <Grid container sx={{ minHeight: '100vh', backgroundColor: 'white', }}>
//       {/* Left: Login Form */}
//       <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 4,   p: {
//       xs: 1,     // smaller padding on extra small screens
//       sm: 4,
//       md: 6,     // default padding on medium and up
//     }, }}>
//       {/* <img src='./logo.png' */}
//         <Container maxWidth="sm">
//           <Box component={Paper} elevation={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 4, borderRadius: 4, width: '100%', maxWidth: 400, backgroundColor: 'white' }}>
//             <Typography variant="h4" gutterBottom>Login</Typography>

//             <TextField
//               fullWidth
//               label="Username"
//               variant="outlined"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PersonIcon />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <TextField
//               fullWidth
//               label="Password"
//               type="password"
//               variant="outlined"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <LockOutlineIcon />
//                   </InputAdornment>
//                 ),
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton>
//                       <VisibilityIcon />
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <Button sx={{ alignSelf: 'flex-end', textTransform: 'none', color: 'black' }}>
//               Forgot password?
//             </Button>

//             <Button
//               fullWidth
//               sx={{
//                 backgroundImage: 'linear-gradient(45deg, #33eaff, #e666fb)',
//                 color: 'white',
//                 borderRadius: 36,
//                 ':hover': {
//                   backgroundImage: 'linear-gradient(45deg, #2bcbe0, #c94be1)',
//                 },
//               }}
//               onClick={handleClick}
//               // component={Link}
//               // to="/Home"
//             >
//               Submit
//             </Button>

//             <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, pt: 2 }}>
//               <LinkedInIcon sx={{ color: blue[300] }} />
//               <GitHubIcon />
//               <GoogleIcon />
//             </Typography>

//             <Grid item>
//             <Typography varient="p" sx={{pt:4,}}>
//             Dont' have Account   <Button sx={{ mt: 3 }} variant="outlined" component={Link} to="/SignIn">
//               SignIn
//             </Button>
           
//             </Typography>
//             </Grid>
           
          
//           </Box>
//         </Container>
//               {/* Right: Image */}
//       <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
//         <img
//           // src="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=600"
//           // src='https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//           // src='https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//           src='https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//           alt="Login Visual"
//           style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
//         />
//       </Grid>
//       </Grid>

  
//     </Grid>
//   );
  
// };

// export default Login;


// import React from 'react';
// import {
//   Box,
//   Typography,
//   TextField,
//   IconButton,
//   Button,
//   Container,
//   Grid,
//   InputAdornment,
//   Paper
// } from '@mui/material';
// import { blue } from '@mui/material/colors';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import GoogleIcon from '@mui/icons-material/Google';
// import PersonIcon from '@mui/icons-material/Person';
// import LockOutlineIcon from '@mui/icons-material/LockOutline';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import { Link } from 'react-router-dom';
// // import img from './img.png';
// // import logo from './logo.png';

// const Login = () => {
    
//   return (

//     <Grid
//     columnSpan={{ xs: 4,sm:6, md: 6,lg:12,xl:16 }}
//     container spacing={2}
//       columns={2}
//       sx={{ minHeight: '100vh',backgroundColor:"white" }}
//     >
//       {/*//? LEFT SIDE - LOGIN FORM */}
//       <Grid
       
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           p: 4,
//           paddingLeft:12,
          
//         }}
//       >
//         <Container maxWidth="sm">
//           {/* <img src={logo}></img> */}
//           <Box
//             component={Paper}
//             elevation={6}
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               gap: 2,
//               padding: 4,
//               border: '2px solid #ccc',
//               borderRadius: 4,
//               height:"28rem",
//               width:"22rem",
             
//               boxShadow: 4,
     
//             }}
//           >
//             <Typography variant="h4" gutterBottom>
//               Login
//             </Typography>

//             <TextField
//               fullWidth
//               label="Username"
//               variant="outlined"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PersonIcon />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <TextField
//               fullWidth
//               label="Password"
//               type="password"
//               variant="outlined"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <LockOutlineIcon />
//                   </InputAdornment>
//                 ),
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton>
//                       <VisibilityIcon />
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <Button
//               sx={{
//                 alignSelf: 'flex-end',
//                 textTransform: 'none',
//                 color: 'black',
//               }}
//             >
//               Forgot password?
//             </Button>

//             <Button
//               fullWidth
//               sx={{
//                 backgroundImage: 'linear-gradient(45deg, #33eaff, #e666fb)',
//                 color: 'white',
//                 borderRadius: 36,
//                 ':hover': {
//                   backgroundImage: 'linear-gradient(45deg, #2bcbe0, #c94be1)',
//                 },
//               }}
//               component= {Link} to={"/Home"}
//             >
//               Submit
//             </Button>

//             <Typography
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 gap: 3,
//                 pt: 2,
//               }}
//             >
//               <LinkedInIcon sx={{ color: blue[300] }} />
//               <GitHubIcon />
//               <GoogleIcon />
//             </Typography>

          
//             <Button sx={{ mt: 3 }} variant="contained"  component={Link} to={"/SignIn"}>
//             SignIn

//             </Button>
           
//               {/* <Link to="/SignIn">Sign Up</Link> */}
            
            
//           </Box>
//         </Container>



//    {/* //? RIGHT SIDE - IMAGE */}
//    <Grid
     
//         sx={{
//           height: '110%',
//           width: '113rem',
//           display: 'flex',
//           justifyContent: 'right',
//           alignItems: 'right',
//           overflow: 'hidden',
         
//         }}
//       >
//         <img
//           // src={img}
//           // src='https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//           src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//           // src='https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//           alt="Login Visual"
//           style={{
//             width: '100%',
//             height: '100%',
//             minHeight:100,
//             objectFit: 'cover',
//             alignItems: 'right',
//           }}
//         />
//       </Grid>
//       </Grid>

   
//     </Grid>
//   );
// };

// export default Login;
