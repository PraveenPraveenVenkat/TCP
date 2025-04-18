import { Button,Stack,  CardContent, Typography ,Grid,Box} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import LoginIcon from '@mui/icons-material/Login';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import React from 'react';
import { keyframes } from "@emotion/react";


const useStyles = makeStyles({
  title: {
    fontSize: "40px",
    paddingTop: 66,
    paddingLeft:'20rem',
    // marginLeft: ,
    marginLeft:70,
    fontFamily: 'Montserrat',

  },
  box: {
    display: 'flex',
    flexDirection: 'column', // <-- stack text, image, and icon vertically
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #ccc',
    padding: 12,
    width:"13rem",
    height: '19rem',
    borderRadius: 2,
    gap: '3rem',
    textAlign: 'center',
    paddingBottom:12,
  },
  image: {
    paddingTop:22,
    height: "8rem",
    width: "12.5rem",
  },
  // box: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   border: '2px solid #ccc',
  //   padding: 12,
  //   height: '19rem',
  //   paddingLeft: '5rem',
  //   gap: '2rem', // smaller gap to keep image inside
  //   borderRadius: 8,
  // },

 

});

const Home = () => {
  const classes = useStyles();
  const scroll=keyframes`
  0%{transform:translateX(100%);}
  100{transform:translateX)(-100%);}
  `;

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
    
{/* padding: { xs: 4, sm: 6, md: 8, lg: 12 }, */}
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

                                        {/* Our Services Section */}
         <Typography variant='h2' sx={{
            paddingTop:24,
          textAlign:"center"
         }}>
         Our Services
         </Typography>


         <Typography
          sx={{
            
           textAlign:"center",
            paddingTop:6,
          }}
        >
         Comprehensive Website Services to Ignite Your Online Success. Empower
         Your Business<br></br>  with Powerful Online Services from our Website.
          Designs.
        </Typography>


        {/* <Grid
      container
      columns={12}
      sx={{ minHeight: '100vh' }}
    >
      {/* LEFT SIDE - LOGIN FORM */}
      {/* <Grid
        columnSpan={{ xs: 12, md: 6 }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
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
              boxShadow: 4,
            }} */}
          {/* >  */}

          {/* <TextField
              fullWidth
              label="Username"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}></TextField> */}
              {/* //!First Grid Box */}
            
            
            <Grid container sx={{
              gap:8,paddingLeft: '13rem',paddingTop:"8rem",
              
            }} spacing={2}>
      <Grid item xs={4}>
        <Box className={classes.box}>
        
        <ArrowOutwardIcon  sx={{alignItems:"Left"}}/>
          <Typography variant="h6" sx={{mt:2,}}>Web Development</Typography>
          
          <img
            src='https://vdigtech.com/wp-content/uploads/2024/03/Image-20.jpg'
            alt='Web Dev'
            className={classes.image}
          />
         
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box className={classes.box}>
  
        <ArrowOutwardIcon  sx={{alignItems:"Left"}} />
          <Typography variant="h6"sx={{mt:2,}} >App Development</Typography>
          <img
            src='https://vdigtech.com/wp-content/uploads/2024/03/Image-21.jpg'
            alt='App Dev'
            className={classes.image}
          />
         
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box className={classes.box}>
        <ArrowOutwardIcon  sx={{alignItems:"Left"}}/>
          <Typography variant="h6" sx={{mt:2,}} >Digital Marketing</Typography>
          <img
            src='https://vdigtech.com/wp-content/uploads/2024/03/Image-27.jpg'
            alt='Digital Marketing'
            className={classes.image}
          />
       
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box className={classes.box}>
        <ArrowOutwardIcon  sx={{alignItems:"Left"}}/>
          <Typography variant="h6" sx={{mt:2,}}>Website Maintenance</Typography>
          <img
            src='https://vdigtech.com/wp-content/uploads/2024/03/Image-24.jpg'
            alt='Graphic Design'
            className={classes.image}
          />
         
        </Box>
      </Grid>

      
    </Grid>

    <Grid container sx={{
              gap:8,paddingLeft: '31.5rem',paddingTop:"2rem",
              
            }} spacing={2}>
     
     

       {/* //?Second Grid Box */}

      <Grid item xs={4}>
        <Box className={classes.box}>
        <ArrowOutwardIcon  sx={{alignItems:"Left"}}/>
          <Typography variant="h6">Digital Marketing</Typography>
          <img
            src='https://vdigtech.com/wp-content/uploads/2024/03/Untitled-design-2.png'
            alt='Digital Marketing'
            className={classes.image}
          />
       
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box className={classes.box}>
        <ArrowOutwardIcon  sx={{alignItems:"Left"}}/>
          <Typography variant="h6">Graphic Design</Typography>
          <img
            src='https://vdigtech.com/wp-content/uploads/2024/03/Untitled-design-1.png'
            alt='Graphic Design'
            className={classes.image}
          />
         
        </Box>
      </Grid>

      
    </Grid>
   
  <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        mt:4,
        padding:5,
        backgroundColor: "#a6d4fa",
        gap:6,
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          display: "inline-block",
          padding: "10px",
          animation: `${scroll} 10s linear infinite`,
        }}
      >
        
        <AutoAwesomeIcon sx={{gap:6,}}/>
      Creative People
 
      <AutoAwesomeIcon sx={{gap:6,}}/>
      Good Reviews
      <AutoAwesomeIcon sx={{gap:6,}}/>
      Awesome Design
      <AutoAwesomeIcon sx={{gap:6,}}/>
      Fast Delivery

      </Typography>
    </Box>
          {/*<ExpandLess></ExpandLess>*/}
</>
  );
};

export default Home;
