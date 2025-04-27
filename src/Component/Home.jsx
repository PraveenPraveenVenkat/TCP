import { 
  Button, 
  Stack, 
  CardContent, 
  Typography, 
  Grid, 
  Box, 
  ThemeProvider, 
  Divider, 
  ListItemText, 
  Container, 
  useMediaQuery 
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import { useState } from 'react';
import { keyframes } from "@emotion/react";

// Create a responsive theme with custom breakpoints
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,      // Mobile
      sm: 576,    // Large mobile/Small tablet
      md: 768,    // Tablet
      lg: 1024,   // Laptop
      xl: 1280,   // Desktop
      xxl: 1536   // Large Desktop
    }
  },
  palette: {
    primary: {
      main: '#172146',
    },
    secondary: {
      main: '#77feb8',
    }
  },
});

// Define keyframes for scrolling animation
const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

// Styled components for reusability
const ServiceBox = styled(Box)(({ theme, bgColor }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #ccc',
  padding: '1rem',
  height: '19rem',
  borderRadius: '8px',
  gap: '1rem',
  textAlign: 'center',
  backgroundColor: bgColor || 'transparent',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  },
  [theme.breakpoints.down('md')]: {
    height: '16rem',
    padding: '0.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    height: '14rem',
  },
}));

const ServiceImage = styled('img')({
  maxWidth: '100%',
  height: '8rem',
  marginTop: '0.5rem',
  objectFit: 'cover',
});

const StyledButton = styled(Button)(({ theme }) => ({
  border: '2px solid white',
  color: 'white',
  height: '55px',
  width: '10rem',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#77feb8',
    color: 'black',
    transform: 'translateY(-3px)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '8rem',
    height: '45px',
    fontSize: '0.8rem',
  },
}));

const Home = () => {
  const [openSection, setOpenSection] = useState(null);
  
  const handleClick = (section) => {
    setOpenSection(prev => (prev === section ? null : section)); // toggle
  };

  // Use theme breakpoints for responsive logic
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLaptop = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  const steps = [
    {
      step: 'Step 01',
      title: 'Web Inspection',
      desc: 'Proper inspection of a website with the best tools for the next stage.',
      bgColor: '#172146',
      color: 'white',
    },
    {
      step: 'Step 02',
      title: 'Deep Optimization',
      desc: 'Optimizing the website with special strategies by covering all its needs.',
      bgColor: '#77feb8',
      color: 'black',
    },
    {
      step: 'Step 03',
      title: 'Analyze Growth',
      desc: 'Expert analysis of website data for deploying a strategy for further growth.',
      bgColor: '#172146',
      color: 'white',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" disableGutters sx={{ overflow: 'hidden' }}>
        {/* Hero Section */}
        <Box sx={{ bgcolor: '#121212', color: 'white', pt: { xs: 4, sm: 6, md: 8, lg: 12 } }}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h1" sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                  fontWeight: 700,
                  mb: 3,
                }}>
                  Best <br /> Place for Creative <br /> Digital Solution
                </Typography>
                
                <Typography variant="body1" sx={{
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                  mb: 4,
                }}>
                  Unlock the Power of Web Presence with our <br />
                  Professional Website Designing Service! Elevate <br/>
                  Your Online Presence with Stunning Website <br />
                  Designs.
                </Typography>
                
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={{ xs: 2, sm: 4 }}
                  sx={{ mb: 6 }}
                >
                  <StyledButton>
                    GET STARTED <TrendingFlatIcon sx={{ ml: 1 }} />
                  </StyledButton>
                  <StyledButton>
                    ABOUT US <TrendingFlatIcon sx={{ ml: 1 }} />
                  </StyledButton>
                </Stack>
              </Grid>
              
              <Grid item xs={12} md={6} sx={{ 
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center' 
              }}>
                {/* Placeholder for hero image */}
                <Box sx={{ 
                  bgcolor: '#333', 
                  width: '100%', 
                  height: '400px',
                  borderRadius: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#777',
                }}>
                  Banner Image Placeholder
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Services Section */}
        <Box sx={{ py: { xs: 6, md: 12 } }}>
          <Container>
            <Typography variant="h2" sx={{
              textAlign: "center",
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              mb: 2,
            }}>
              Our Services
            </Typography>
            
            <Typography variant="body1" sx={{
              textAlign: "center",
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              mb: 6,
            }}>
              Comprehensive Website Services to Ignite Your Online Success. Empower
              Your Business with Powerful Online Services from our Website Designs.
            </Typography>
            
            <Grid container spacing={3}>
              {/* First Row Services */}
              <Grid item xs={12} sm={6} md={4}>
                <ServiceBox bgColor="#77feb8">
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <ArrowOutwardIcon sx={{ color: 'black' }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
                    Web Development
                  </Typography>
                  <ServiceImage src='https://vdigtech.com/wp-content/uploads/2024/03/Image-20.jpg' alt='Web Dev' />
                </ServiceBox>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <ServiceBox>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <ArrowOutwardIcon />
                  </Box>
                  <Typography variant="h6" sx={{ 
                    '&:hover': { color: '#77feb8' },
                    fontWeight: 'bold'
                  }}>
                    App Development
                  </Typography>
                  <ServiceImage src='https://vdigtech.com/wp-content/uploads/2024/03/Image-21.jpg' alt='App Dev' />
                </ServiceBox>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <ServiceBox>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <ArrowOutwardIcon />
                  </Box>
                  <Typography variant="h6" sx={{ 
                    '&:hover': { color: '#77feb8' },
                    fontWeight: 'bold'
                  }}>
                    Digital Marketing
                  </Typography>
                  <ServiceImage src='https://vdigtech.com/wp-content/uploads/2024/03/Image-27.jpg' alt='Digital Marketing' />
                </ServiceBox>
              </Grid>
              
              {/* Second Row Services */}
              <Grid item xs={12} sm={6} md={4}>
                <ServiceBox>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <ArrowOutwardIcon />
                  </Box>
                  <Typography variant="h6" sx={{ 
                    '&:hover': { color: '#77feb8' },
                    fontWeight: 'bold'
                  }}>
                    Website Maintenance
                  </Typography>
                  <ServiceImage src='https://vdigtech.com/wp-content/uploads/2024/03/Image-24.jpg' alt='Website Maintenance' />
                </ServiceBox>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <ServiceBox>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <ArrowOutwardIcon />
                  </Box>
                  <Typography variant="h6" sx={{ 
                    '&:hover': { color: '#77feb8' },
                    fontWeight: 'bold'
                  }}>
                    SEO & Analytics
                  </Typography>
                  <ServiceImage src='https://vdigtech.com/wp-content/uploads/2024/03/Untitled-design-2.png' alt='SEO & Analytics' />
                </ServiceBox>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <ServiceBox>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <ArrowOutwardIcon />
                  </Box>
                  <Typography variant="h6" sx={{ 
                    '&:hover': { color: '#77feb8' },
                    fontWeight: 'bold'
                  }}>
                    Graphic Design
                  </Typography>
                  <ServiceImage src='https://vdigtech.com/wp-content/uploads/2024/03/Untitled-design-1.png' alt='Graphic Design' />
                </ServiceBox>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Scrolling Banner */}
        <Box sx={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          width: "100%",
          py: { xs: 2, md: 3 },
          backgroundColor: "#77feb8",
          color: "black"
        }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "inline-block",
              padding: "10px",
              animation: `${scroll} 20s linear infinite`,
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            <AutoAwesomeIcon sx={{ mx: 2 }} />
            Creative People
            <AutoAwesomeIcon sx={{ mx: 2 }} />
            Good Reviews
            <AutoAwesomeIcon sx={{ mx: 2 }} />
            Awesome Design
            <AutoAwesomeIcon sx={{ mx: 2 }} />
            Fast Delivery
          </Typography>
        </Box>

        {/* Digital Marketing Section */}
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant='h3' sx={{ 
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                  mb: 3,
                }}>
                  One-stop digital marketing <br/> services 🎯
                </Typography>
                
                <Typography variant='body1' sx={{ mb: 4 }}>
                  Get benefits with the best Digital Marketing Service with unique<br/> 
                  strategies. Improve the search visibility of your website with <br/>
                  the proper techniques of our digital marketing experts. Boost sales <br/> 
                  and optimize your page for more user engagement.
                </Typography>
                
                <Grid container spacing={2}>
                  {['CONVERSION', 'OPTIMIZATION', 'ECOMMERCE', 'ANALYTIC', 'LINK BUILDING', 'STRATEGY'].map((text) => (
                    <Grid item xs={6} sm={4} key={text}>
                      <Button 
                        sx={{
                          backgroundColor: "white",
                          color: 'black',
                          height: { xs: '3rem', md: '4rem' },
                          width: '100%',
                          borderRadius: '24px',
                          fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                          whiteSpace: 'nowrap',
                          '&:hover': {
                            backgroundColor: '#77feb8',
                          },
                        }}
                      >
                        {text}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              
              <Grid item xs={12} md={6} sx={{ 
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {/* Placeholder for marketing image */}
                <Box sx={{ 
                  bgcolor: '#f5f5f5', 
                  width: '100%', 
                  height: '400px',
                  borderRadius: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#777',
                }}>
                  Marketing Image Placeholder
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Process Steps Section */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#f9f9f9' }}>
          <Container>
            <Grid container spacing={3}>
              {steps.map((step, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    sx={{
                      backgroundColor: step.bgColor,
                      color: step.color,
                      borderRadius: '16px',
                      padding: 4,
                      minHeight: { xs: 'auto', md: '18rem' },
                      boxShadow: 4,
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ opacity: 0.7, fontWeight: 600 }}>
                      {step.step}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', my: 1 }}>
                      {step.title}
                    </Typography>
                    <Divider
                      sx={{
                        backgroundColor: step.color === 'white' ? '#ffffffaa' : '#00000088',
                        width: '100%',
                        mb: 2,
                      }}
                    />
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      {step.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* E-commerce FAQ Section */}
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Container>
            <Typography variant='h3' sx={{ 
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
              mb: 2,
            }}>
              E-commerce Integration
            </Typography>

            <Typography variant="body1" sx={{ mb: 4 }}>
              Specializing the website with unique E-commerce features
              integration to develop a user-centric web page.
            </Typography>

            {/* FAQ Items */}
            {[
              {
                id: 1,
                question: 'WHICH TYPE OF E-COMMERCE WEBSITES HAVE YOU DEVELOPED IN THE PAST?',
                answer: 'We are a leading company designing websites for various prospects. Our experts have capability of designing websites in any language as well as WordPress...'
              },
              {
                id: 2,
                question: 'HOW MUCH TIME DOES IT NEED FOR AN ONLINE STORE TO GO LIVE?',
                answer: 'It depends. Actually, developing an E-commerce website is not an easy thing...'
              },
              {
                id: 3,
                question: 'WHAT IF I FACE ANY ISSUES ON MY E-COMMERCE WEBSITE AFTER DELIVERY?',
                answer: 'No need to worry about it as you will not face any major issues on your website...'
              }
            ].map((item) => (
              <Box key={item.id} sx={{ mb: 2 }}>
                <Typography 
                  onClick={() => handleClick(item.id)} 
                  sx={{ 
                    cursor: 'pointer', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'Arial', 
                    fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.25rem' },
                    fontWeight: 'medium',
                    py: 1.5
                  }}
                >
                  {item.question}
                  <ArrowForwardIcon sx={{ color: '#77feb8', transform: openSection === item.id ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s' }} />
                </Typography>
                
                {openSection === item.id && (
                  <Typography variant="body1" sx={{ py: 2, pl: 2, borderLeft: '3px solid #77feb8' }}>
                    {item.answer}
                  </Typography>
                )}
                
                <Divider sx={{ width: '100%', mt: 1.5 }} />
              </Box>
            ))}
          </Container>
        </Box>

        {/* Footer Placeholder */}
        <Box sx={{ bgcolor: '#172146', color: 'white', py: 4, mt: 6 }}>
          <Container>
            <Typography variant="h6" align="center">
              © 2025 Digital Solutions Company. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;

// import { Button,Stack,  CardContent, Typography ,Grid,Box, ThemeProvider,Divider,ListItemText,} from '@mui/material';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
// import LoginIcon from '@mui/icons-material/Login';
// import {  createTheme} from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
// import AppShortcutIcon from '@mui/icons-material/AppShortcut';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import {useState} from 'react';
// import { keyframes } from "@emotion/react";

//   const theme =  createTheme({
//     breakpoints:{
//       values:{
//         mob:0,
//         tab:786,
//         lap:1024,
//        desk:1200

//       }
//     }
//   });

// const useStyles = makeStyles({
//   title: {
//     fontSize: "40px",
//     paddingTop: 66,
//     paddingLeft:'20rem',
//     marginLeft:70,
//     fontFamily: 'Montserrat',
//   },
//   button:{
//      backgroundColor:"white",
//      color:'black',
//      font:"caption",
//      height:'4rem',
//      width:'10rem',
//      borderRadius:'24rem',
//      paddingBottom:"12",
//      textAlign:'center',
//   alignContent:'center',
//   '&:hover': {
//     backgroundColor: '#77feb8', 
//   },
     
//   },
//   box: {
//     display: 'flex',
//     flexDirection: 'column', 
//     alignItems: 'center',
//     justifyContent: 'center',
//     border: '2px solid #ccc',
//     padding: 14,
//     width:"15rem",
//     height: '19rem',
//     borderRadius: 2,
//     gap: '3rem',
//     textAlign: 'center',
//     paddingBottom:12,
//   },
//   image: {
//     paddingTop:12,
//     height: "8rem",
//     width: "12.5rem",
//   },

// });

// const Home = () => {
//   const classes = useStyles();
//   const scroll=keyframes`
//   0%{transform:translateX(100%);}
//   100{transform:translateX)(-100%);}
//   `;
//   // const handleclick =(ListItemText)=>{
//     // setOpenIndex(openIndex === index ? null :index);
//   // }
//   const [openSection, setOpenSection] = useState(null);
//   const handleClick = (section) => {
//     setOpenSection(prev => (prev === section ? null : section)); // toggle
//   };




// const steps = [
//   {
//     step: 'Step 01',
//     title: 'Web Inspection',
//     desc: 'Proper inspection of a website with the best tools for the next stage.',
//     bgColor: '#172146',
//     color: 'white',
//   },
//   {
//     step: 'Step 02',
//     title: 'Deep Optimization',
//     desc: 'Optimizing the website with special strategies by covering all its needs.',
//     bgColor: '#77feb8',
//     color: 'black',
//   },
//   {
//     step: 'Step 03',
//     title: 'Analyze Growth',
//     desc: 'Expert analysis of website data for deploying a strategy for further growth.',
//     bgColor: '#172146',
//     color: 'white',
//   },
// ];

 

//   return (
//     <>

    
//     <ThemeProvider theme={theme}>
//       <CardContent >
      
//       {/* <Grid> */}

//       <Grid item xs={2} >
//         <Typography variant="h1" sx={{
//           fontSize:'5.5rem',paddingLeft:'18rem',paddingTop:12,
//           // padding: { xs: 1, sm: 6, md: 8, lg: 12, xl:14 },
//         }} >
//           Best <br /> Place for Creative <br /> Digital Solution
//         </Typography>


       
//         <Typography
//           sx={{
            
//             marginRight: 11,
//             paddingLeft:'18.5rem',
//             paddingTop:6,
//             fontSize: '1.5rem',
            
//           }}
//         >
//           Unlock the Power of Web Presence with our <br />
//           Professional Website Designing Service! Elevate <br/>
//           Your Online Presence with Stunning Website <br />
//           Designs.
//         </Typography>
//         {/* <img src="https://vdigtech.com/wp-content/uploads/2024/03/banner_home02-DD9Q8T2.jpg" sx={{alignItems:'right,'}} alt="" /> */}
    
     
//           </Grid>
//           </CardContent>
      

//       <Stack direction="row" sx={{
//          paddingLeft:'19.5rem',
//          paddingTop:5,
//       }} gap={12}>
      
//         <Button sx={{
//              border:2,
//          color:'white',
//          spacing:4,
//          height:55,
//          width:'10rem',
//         '&:hover': {
//       backgroundColor: '#77feb8',
//       color:'black'
//     },
        

//       }}>GET STARTED< TrendingFlatIcon /> </Button> 
//       <Button sx={{
//              border:2,
//          color:'white',
//          spacing:4,
//          height:55,
//          width:'10rem',
//          '&:hover':{
//           backgroundColor:'#77feb8',
//            color:'black'
//          }

//       }}>ABOUT US< TrendingFlatIcon /> </Button> 
        
         
//          </Stack>

//                                         {/*//? Our Services Section */}
//          <Typography variant='h2' sx={{
//             paddingTop:24,
//           textAlign:"center"
//          }}>
//          Our Services
//          </Typography>



//          {/* src='https://vdigtech.com/wp-content/uploads/2024/03/person_home02-USU94UZ.png' */}

//          {/* </Grid>     */}



         

//          <Typography
//           sx={{
            
//            textAlign:"center",
//             paddingTop:6,
//             fontSize:'1.2rem',
//           }}
//         >
//          Comprehensive Website Services to Ignite Your Online Success. Empower
//          Your Business<br></br>  with Powerful Online Services from our Website.
//           Designs.
//         </Typography>

//                               {/* //?First Grid Box */}
            
//             <Grid container sx={{
//               gap:8,paddingLeft: '16rem',paddingTop:"8rem",
              
//             }} spacing={2}>
//       <Grid item xs={4}>
//         <Box className={classes.box} sx={{backgroundColor:"#77feb8",}}>
//           {/* <img src='https://vdigtech.com/wp-content/uploads/2024/03/development-1.png' ></img> */}
        
//         <ArrowOutwardIcon  sx={{alignItems:"Left",paddingLeft:"12rem",color:'black'}}/>
//           <Typography variant="h6"  sx={{mt:2,color:'black',
//             '&: hover':{
//               color:'#f5f5f5',
//               transform: 'translateY(-15px)',
//             },
//           }}>Web Development</Typography>
          
//           <img
//             src='https://vdigtech.com/wp-content/uploads/2024/03/Image-20.jpg'
//             alt='Web Dev'
//             className={classes.image}
//           />
         
//         </Box>
//       </Grid>

//       <Grid item xs={4}>
//         <Box className={classes.box}>
//           <Grid  direction="row">
      
//             <ArrowOutwardIcon  sx={{alignItems:"right",paddingLeft:"12rem",}} />
//           </Grid>
//         {/* <img src='https://vdigtech.com/wp-content/uploads/2024/03/XMLID_1809_.png' sx={{alignItems:"Left",}}></img> */}
//           <Typography variant="h6"sx={{mt:2, '&:hover':{
//               color:'#77feb8',
//             },
//             }} >App Development </Typography>
//           <img
//             src='https://vdigtech.com/wp-content/uploads/2024/03/Image-21.jpg'
//             alt='App Dev'
//             className={classes.image}
//           />
         
//         </Box>
//       </Grid>

//       <Grid item xs={4}>
//         <Box className={classes.box}>
//         {/* <img src='https://vdigtech.com/wp-content/uploads/2024/03/brainstorming-1.png'></img> */}
//         <ArrowOutwardIcon  sx={{alignItems:"Left",paddingLeft:"12rem",}}/>
//           <Typography variant="h6" sx={{mt:2,'&:hover':{
//               color:'#77feb8',
//             },}} >Digital Marketing</Typography>
//           <img
//             src='https://vdigtech.com/wp-content/uploads/2024/03/Image-27.jpg'
//             alt='Digital Marketing'
//             className={classes.image}
//           />
       
//         </Box>
//       </Grid>

//       <Grid item xs={4}>
//         <Box className={classes.box}>
//         {/* https://vdigtech.com/wp-content/uploads/2024/03/branding-1.png */}
//         <ArrowOutwardIcon  sx={{alignItems:"Left",paddingLeft:"12rem",}}/>
//           <Typography variant="h6" sx={{mt:2,'&:hover':{
//               color:'#77feb8',
//             },}}>Website Maintenance</Typography>
//           <img
//             src='https://vdigtech.com/wp-content/uploads/2024/03/Image-24.jpg'
          
//             alt='Graphic Design'
//             className={classes.image}
//           />
//         </Box>
//       </Grid>

      
//     </Grid>

//     <Grid container sx={{
//               gap:8,paddingLeft: '31.5rem',paddingTop:"2rem",
              
//             }} spacing={2}>
//                                                  {/* //?Second Grid Box */}

//       <Grid item xs={2}>
//         <Box className={classes.box}>
//         {/* <img src='https://vdigtech.com/wp-content/uploads/2024/03/Group-1-2.png'></img> */}
//         <ArrowOutwardIcon  sx={{alignItems:"Left",paddingLeft:"12rem",}}/>
//           <Typography variant="h6" sx={{'&:hover':{
//               color:'#77feb8',
//             },}}>Digital Marketing</Typography>
//           <img
//             src='https://vdigtech.com/wp-content/uploads/2024/03/Untitled-design-2.png'
//             alt='Digital Marketing'
//             className={classes.image}
//           />
       
//         </Box>
//       </Grid>

//       <Grid item xs={4}>
//         <Box className={classes.box}>

//         {/* <img src='https://vdigtech.com/wp-content/uploads/2024/03/optimization-1.png'></img> */}
//         <ArrowOutwardIcon  sx={{alignItems:"Left",paddingLeft:"12rem",}}/>
//           <Typography variant="h6" sx={{'&:hover':{
//               color:'#77feb8',
//             },}}>Graphic Design</Typography>
//           <img
//             src='https://vdigtech.com/wp-content/uploads/2024/03/Untitled-design-1.png'
//             alt='Graphic Design'
//             className={classes.image}
//           />
         
//         </Box>
//       </Grid>
//     </Grid>
//                                              {/* //?Scroll  or Marque Tag*/}
//   <Box
//       sx={{
//         overflow: "hidden",
//         whiteSpace: "nowrap",
//         width: "100%",
//         mt:4,
//         padding:5,
//         backgroundColor: "#77feb8",
//         gap:6,
//         color:"black"
//       }}
//     >
//       <Typography
//         variant="h6"
//         component="div"
//         sx={{
//           display: "inline-block",
//           padding: "10px",
//           animation: `${scroll} 10s linear infinite`,
//         }}
//       >
        
//         <AutoAwesomeIcon sx={{gap:6,}}/>
//       Creative People
//       <AutoAwesomeIcon sx={{gap:6,}}/>
//       Good Reviews
//       <AutoAwesomeIcon sx={{gap:6,}}/>
//       Awesome Design
//       <AutoAwesomeIcon sx={{gap:6,}}/>
//       Fast Delivery

//       </Typography>
//     </Box>
//           <Grid container spacing={2} sx={{
//             paddingLeft:"20rem",
//             paddingTop:"10rem",
//           }}>
           

           
//             <Typography variant='h3'>
//             One-stop digital marketing <br/> services 🎯
//             </Typography>

//             <Typography variant='p' sx={{paddingTop:12,paddingLeft:'',}}>
//             Get benefits with the best Digital Marketing Service with unique<br/> strategies. Improve the search visibility of your website with <br/>the proper techniques of our digital marketing experts. Boost sales <br/> and optimize your page for more user engagement.
//             </Typography>

//             <Grid container spacing={3} item xs={3}>
//               <Typography variant='p' className={classes.button}>
//               CONVERSION
//               </Typography>
//               <Typography variant='p' className={classes.button}>
//               OPTIMIZATION
//               </Typography>
//               <Typography variant='p' className={classes.button}>
//               ECOMMERCE
//               </Typography>
//               <Typography variant='p' className={classes.button}>
//               ANALYTIC
//               </Typography>
//               <Typography variant='p' className={classes.button}>
//               LINK BUILDING
//               </Typography>
//               <Typography variant='p' className={classes.button}>
//               STRATEGY
//               </Typography>
//               {/* <Grid>
//                 <img src="https://vdigtech.com/wp-content/uploads/2024/03/about_home02-TELVHCF.jpg" alt="img" />
//               </Grid> */}
//               </Grid>
             
          
//           </Grid>


//           <Grid
//       container
//       spacing={4}
//       justifyContent="center"
//       sx={{
//         paddingTop: '8rem',
//         paddingX: { xs: 2, md: '10rem' },
//       }}
//     >
//       {steps.map((step, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <Box
//             sx={{
//               backgroundColor: step.bgColor,
//               color: step.color,
//               borderRadius: '16px',
//               padding: 4,
//               minHeight: '18rem',
//               boxShadow: 4,
//               transition: 'transform 0.3s',
//               '&:hover': {
//                 transform: 'translateY(-5px)',
//               },
//             }}
//           >
//             <Typography variant="subtitle1" sx={{ opacity: 0.7, fontWeight: 600 }}>
//               {step.step}
//             </Typography>
//             <Typography variant="h5" sx={{ fontWeight: 'bold', marginY: 1 }}>
//               {step.title}
//             </Typography>
//             <Divider
//               sx={{
//                 backgroundColor: step.color === 'white' ? '#ffffffaa' : '#00000088',
//                 width: '18rem',
//                 marginBottom: 2,
//               }}
//             />
//             <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
//               {step.desc}
//             </Typography>
//           </Box>
//         </Grid>
//       ))}
//     </Grid>


// <Box sx={{ paddingLeft: "20rem", paddingTop: "10rem" }}>
//       <Typography variant='h3'>
//         E-commerce Integration
//       </Typography>

//       <Typography sx={{ paddingTop: '2rem' }}>
//         Specializing the website with unique E-commerce features <br />
//         integration to develop a user-centric web page.
//       </Typography>

//       {/* Section 1 */}
//       <Typography onClick={() => handleClick(1)} sx={{ cursor: 'pointer', marginTop: 4, fontFamily: 'Arial', fontSize: "20px" }}>
//         WHICH TYPE OF E-COMMERCE WEBSITES HAVE YOU DEVELOPED IN THE PAST?
//         <ArrowForwardIcon sx={{ paddingLeft: 2, color: '#77feb8' }} />
//       </Typography>
//       {openSection === 1 && (
//         <ListItemText>
//           We are a leading company designing websites for various <br />
//           prospects. Our experts have capability of designing <br />
//           websites in any language as well as WordPress...
//         </ListItemText>
//       )}
//       <Divider sx={{ width: '45rem', paddingTop: 2 }} />

//       {/* Section 2 */}
//       <Typography onClick={() => handleClick(2)} sx={{ cursor: 'pointer', marginTop: 4, fontFamily: 'Arial', fontSize: "20px" }}>
//         HOW MUCH TIME DOES IT NEED FOR AN ONLINE STORE TO GO LIVE?
//         <ArrowForwardIcon sx={{ paddingLeft: 2, color: '#77feb8' }} />
//       </Typography>
//       {openSection === 2 && (
//         <ListItemText>
//           It depends. Actually, developing an E-commerce website is not an easy thing...
//         </ListItemText>
//       )}
//       <Divider sx={{ width: '45rem', paddingTop: 2 }} />

//       {/* Section 3 */}
//       <Typography onClick={() => handleClick(3)} sx={{ cursor: 'pointer', marginTop: 4, fontFamily: 'Arial', fontSize: "20px" }}>
//         WHAT IF I FACE ANY ISSUES ON MY E-COMMERCE WEBSITE AFTER DELIVERY?
//         <ArrowForwardIcon sx={{ paddingLeft: 2, color: '#77feb8' }} />
//       </Typography>
//       {openSection === 3 && (
//         <ListItemText>
//           No need to worry about it as you will not face any major issues on your website...
//         </ListItemText>
//       )}
//       <Divider sx={{ width: '45rem', paddingTop: 2 }} />
//     </Box>
//     <Box>

//     </Box>
//     </ThemeProvider>
// </>
//   );
// };

// export default Home;




// // import React, { useState } from 'react';
// // import {
// //   Typography,
// //   Divider,
// //   Box,
// //   ListItemText
// // } from '@mui/material';
// // import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// // const EcommerceInfo = () => {
// //   const [openSection, setOpenSection] = useState(null);

//   // const handleClick = (section) => {
//   //   setOpenSection(prev => (prev === section ? null : section)); // toggle
//   // };

// //   return (
//     // <Box sx={{ paddingLeft: "20rem", paddingTop: "10rem" }}>
//     //   <Typography variant='h3'>
//     //     E-commerce Integration
//     //   </Typography>

//     //   <Typography sx={{ paddingTop: '2rem' }}>
//     //     Specializing the website with unique E-commerce features <br />
//     //     integration to develop a user-centric web page.
//     //   </Typography>

//     //   {/* Section 1 */}
//     //   <Typography onClick={() => handleClick(1)} sx={{ cursor: 'pointer', marginTop: 4 }}>
//     //     WHICH TYPE OF E-COMMERCE WEBSITES HAVE YOU DEVELOPED IN THE PAST?
//     //     <ArrowForwardIcon sx={{ paddingLeft: 2 }} />
//     //   </Typography>
//     //   {openSection === 1 && (
//     //     <ListItemText>
//     //       We are a leading company designing websites for various <br />
//     //       prospects. Our experts have capability of designing <br />
//     //       websites in any language as well as WordPress. In the past, we <br />
//     //       have designed many e-commerce websites using PHP, HTML, <br />
//     //       & WordPress, and also ready to face challenges to develop from it.
//     //     </ListItemText>
//     //   )}
//     //   <Divider sx={{ width: '45rem', paddingTop: 2 }} />

//     //   {/* Section 2 */}
//     //   <Typography onClick={() => handleClick(2)} sx={{ cursor: 'pointer', marginTop: 4 }}>
//     //     HOW MUCH TIME DOES IT NEED FOR AN ONLINE STORE TO GO LIVE?
//     //     <ArrowForwardIcon sx={{ paddingLeft: 2 }} />
//     //   </Typography>
//     //   {openSection === 2 && (
//     //     <ListItemText>
//     //       It depends. Actually, developing an E-commerce website is not an <br />
//     //       easy thing. It requires many features as well as a specific <br />
//     //       language to design an e-commerce site. At us, we take the time <br />
//     //       period very seriously, and our experts design it in a very short <br />
//     //       time period. Normally it takes a month to design an e-commerce <br />
//     //       website but we can make it quick for you.
//     //     </ListItemText>
//     //   )}
//     //   <Divider sx={{ width: '45rem', paddingTop: 2 }} />

//     //   {/* Section 3 */}
//     //   <Typography onClick={() => handleClick(3)} sx={{ cursor: 'pointer', marginTop: 4 }}>
//     //     WHAT IF I FACE ANY ISSUES ON MY E-COMMERCE WEBSITE AFTER DELIVERY?
//     //     <ArrowForwardIcon sx={{ paddingLeft: 2 }} />
//     //   </Typography>
//     //   {openSection === 3 && (
//     //     <ListItemText>
//     //       No need to worry about it as you will not face any major issues on your website. At first, <br />
//     //       our support team will stay connected with you and observe the website's performance. <br />
//     //       Next to this, you can contact us any time regarding any issues about the website and our <br />
//     //       support team will resolve your issues as soon as possible.
//     //     </ListItemText>
//     //   )}
//     //   <Divider sx={{ width: '45rem', paddingTop: 2 }} />
//     // </Box>
// //   );
// // };

// // export default EcommerceInfo;
