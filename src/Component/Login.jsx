import React from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
  Container,
  Grid,
  InputAdornment,
  Paper,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        backgroundColor: 'white',
      }}
    >
      {/* Left: Login Form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4, md: 6 },
          py: 4,
        }}
      >
        <Container maxWidth="sm">
          <Box
            component={Paper}
            elevation={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              p: 4,
              borderRadius: 4,
              width: '100%',
              maxWidth: 400,
              backgroundColor: 'white',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>

            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlineIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <VisibilityIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              sx={{
                alignSelf: 'flex-end',
                textTransform: 'none',
                color: 'black',
              }}
            >
              Forgot password?
            </Button>

            <Button
              fullWidth
              sx={{
                backgroundImage: 'linear-gradient(45deg, #33eaff, #e666fb)',
                color: 'white',
                borderRadius: 36,
                ':hover': {
                  backgroundImage: 'linear-gradient(45deg, #2bcbe0, #c94be1)',
                },
              }}
              component={Link}
              to="/Home"
            >
              Submit
            </Button>

            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3,
                pt: 2,
              }}
            >
              <LinkedInIcon sx={{ color: blue[300] }} />
              <GitHubIcon />
              <GoogleIcon />
            </Typography>

            <Button
              sx={{ mt: 3 }}
              variant="contained"
              component={Link}
              to="/SignIn"
            >
              SignIn
            </Button>
          </Box>
        </Container>
        <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg"
          alt="Login Visual"
          style={{
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
          }}
        />
      </Grid>
      </Grid>

      {/* Right: Image */}
   
    </Grid>
  );
};

export default Login;


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
