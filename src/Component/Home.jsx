import { Button,Stack,  CardContent, Typography } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import LoginIcon from '@mui/icons-material/Login';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles({
  title: {
    fontSize: "40px",
    paddingTop: 66,
    paddingLeft:'20rem',
    // marginLeft: ,
    marginLeft:70,
    fontFamily: 'Montserrat',

  },



});

const Home = () => {
  const classes = useStyles();

  return (
    <>
  {/* <Button sx={{
             border:2,
         color:'black',
         spacing:4,
        '&:hover': {
      backgroundColor: '#115293',
      paddingRight:12, */}
    {/* }, */}
       {/* onclick={()} */}
  {/* component={Link} to={"./Login"}  */}
       {/* }}>LOGIN<LoginIcon/> </Button>  */}
       <Button
  sx={{
    border: 2,
    color: 'black',
    spacing: 4,
    '&:hover': {
      backgroundColor: '#115293',
      paddingRight: 12,
    },
  }}
  component={Link}
  to="/login" // Make sure your route is set up like <Route path="/login" element={<LoginPage />} />
>
  LOGIN <LoginIcon />
</Button>
    
      <CardContent>
        <Typography variant="h3" className={classes.title}>
          Best <br /> Place for Creative <br /> Digital Solution
        </Typography>

        <Typography
          sx={{
            
            marginRight: 11,
            paddingLeft:'20rem',
            paddingTop:6,
          }}
        >
          Unlock the Power of Web Presence with our <br />
          Professional Website Designing Service! Elevate <br />
          Your Online Presence with Stunning Website <br />
          Designs.
        </Typography>
      </CardContent>

      


 {/* <Typography sx={{
        paddingLeft:'20rem',
        gap:12,
       }}>  */}
      <Stack direction="row" sx={{
         paddingLeft:'20rem',
         paddingTop:5,
      }} gap={12}>
      
        <Button sx={{
             border:2,
         color:'black',
         spacing:4,
        '&:hover': {
      backgroundColor: '#115293',
    },
        //  :hover

      }}>GET STARTED< TrendingFlatIcon /> </Button> 
      <Button sx={{
             border:2,
         color:'black',
         spacing:2,
         '&:hover':{
          backgroundColor:'#115293',
         }
         
        //  :hover

      }}>ABOUT US< TrendingFlatIcon /> </Button> 
         {/* </Typography> */}
         </Stack>
</>
  );
};

export default Home;



{/* <Stack direction="row" gap={2}>
  <Button>One</Button>
  <Button>Two</Button>
</Stack> */}


// <Box display="flex" gap={2}>
//   <Button>One</Button>
//   <Button>Two</Button>
// </Box>


// <Button sx={{ mr: 2 }}>One</Button>
// <Button>Two</Button>



// <Button
//   sx={{
//     backgroundColor: '#1976d2',
//     color: '#fff',
//     '&:hover': {
//       backgroundColor: '#115293',
//     },
//   }}
// >
//   Hover Me
// </Button>


// <Box
//   sx={{
//     padding: 1,
//     cursor: 'pointer',
//     '&:hover': {
//       color: 'primary.main',
//       backgroundColor: '#f0f0f0',
//     },
//   }}
// >
//   Hover over me!
// </Box>
