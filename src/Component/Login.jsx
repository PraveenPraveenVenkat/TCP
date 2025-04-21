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
  Paper
} from '@mui/material';
import { blue } from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import img from './img.png';

const Login = () => {
  return (

    <Grid
    container spacing={2}
      columns={2}
      sx={{ minHeight: '100vh', }}
    >
      {/*//? LEFT SIDE - LOGIN FORM */}
      <Grid
        columnSpan={{ xs: 12, md: 6 }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
          paddingLeft:12,
          
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
              padding: 4,
              border: '2px solid #ccc',
              borderRadius: 4,
              height:"28rem",
              width:"22rem",
             
              boxShadow: 4,
     
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
              component= {Link} to={"/Home"}
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

            <Typography sx={{ mt: 3 }}>
              <Link to="/signup">Sign Up</Link>
            </Typography>
          </Box>
        </Container>



   {/* //? RIGHT SIDE - IMAGE */}
   <Grid
        columnSpan={{ xs: 12, md: 6 }}
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'right',
          overflow: 'hidden',
         
        }}
      >
        <img
          src={img}
          alt="Login Visual"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            alignItems: 'right',
          }}
        />
      </Grid>
      </Grid>

   
    </Grid>
  );
};

export default Login;
