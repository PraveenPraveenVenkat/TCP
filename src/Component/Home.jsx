import { 
  Button, 
  Stack, 
  Typography, 
  Grid, 
  Box, 
  ThemeProvider, 
  Divider, 
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
import Animation from "./Animation.gif";

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
  width: '100%',
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
      <Container maxWidth="2xl" disableGutters sx={{ overflow: 'hidden' }}>
  
        <Box sx={{ position: 'relative', width: '100%' , }}>
  {/* Background Image */}
  <img src={Animation} alt="Animation" style={{ width: '100%', display: 'block' }} />

  {/* Overlay Text & Buttons */}
  <Box
    sx={{
      position: 'absolute',
      top: '83%',
      left: '20%',
      transform: 'translate(-50%, -50%)',
      color: '#fff', // adjust for contrast
      textAlign: 'center',
      padding: 2,
      pt: { xs: 0, sm: 4, md: 6, lg: 10 }
      // p:{
      //    sm:1,
      //    sm:4,
      //    lg:8,
      // },
    }}
  >
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: '0.9rem', sm: '1.2rem', md: '1.5rem' },
        pl:{xs:8}
        
      }}
    >
      Unlock the Power of Web Presence with our <br />
      Professional Website Designing Service! Elevate <br />
      Your Online Presence with Stunning Website <br />
      Designs.
    </Typography>

    <Stack
      direction={{ xs: 'row', sm: 'row',md:'row',lg:'row' }}
      spacing={{ xs: 1, sm: 6,md:7,lg:12 }}
      sx={{  justifyContent: 'center', pt:{xs:2},ml:{xs:12}}}
    >
      <StyledButton>
        GET STARTED <TrendingFlatIcon sx={{ ml: 1 }} />
      </StyledButton>
      <StyledButton>
        ABOUT US <TrendingFlatIcon sx={{ ml: 1 }} />
      </StyledButton>
    </Stack>
  </Box>
</Box>

       
     
        <Box sx={{  color: 'white', pt: { xs: 12, sm: 6, md: 8, lg: 8 } }}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h1" sx={{
                  fontSize: { xs: '3rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                  fontWeight: 700,
                  mb: 3,
                }}>
                  Best <br /> Place for Creative <br /> Digital Solution
                </Typography>
                
             
              </Grid>
              
              <Grid item xs={12} md={6} sx={{ 
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center' 
              }}>
                {/* Placeholder for hero image */}
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
            
            <Grid container spacing={4} sx={{justifyContent: 'center',}}>
              {/* First Row Services */}
              <Grid item xs={12} sm={6} md={4} lg={8}>
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
              
              <Grid item xs={12} sm={6} md={4} lg={8}>
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
              
              <Grid item xs={12} sm={6} md={4} lg={8}>
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
              <Grid item xs={12} sm={6} md={4} lg={8}>
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
              
              <Grid item xs={12} sm={6} md={4} lg={8}>
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
              
              <Grid item xs={12} sm={6} md={4} lg={2}>
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
          // width:{l:'100%', xl:'100%',xxl:'100%'},
          width: '100%',
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
                
                <Grid container spacing={2} item={3}>
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
        {/* <Box sx={{ py: { xs: 6, md: 8 ,lg:6},  }}>
          // <Container>
          //   <Grid container spacing={6}>
          //     {steps.map((step, index) => (
          //       <Grid item xs={12} sm={6} md={4} lg={6} key={index}>
          //         <Box
          //           sx={{
          //             backgroundColor: step.bgColor,
          //             color: step.color,
          //             borderRadius: '16px',
          //             padding: 4,
          //             minHeight: { xs: 'auto', md: '18rem' },
          //             boxShadow: 4,
          //             transition: 'transform 0.3s',
          //             '&:hover': {
          //               transform: 'translateY(-5px)',
          //             },
          //           }}
          //         >
          //           <Typography variant="subtitle1" sx={{ opacity: 0.7, fontWeight: 600 }}>
          //             {step.step}
          //           </Typography>
          //           <Typography variant="h5" sx={{ fontWeight: 'bold', my: 1 }}>
          //             {step.title}
          //           </Typography>
          //           <Divider
          //             sx={{
          //               backgroundColor: step.color === 'white' ? '#ffffffaa' : '#00000088',
          //               width: '100%',
          //               mb: 2,
          //             }}
          //           />
          //           <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
          //             {step.desc}
          //           </Typography>
          //         </Box>
          //       </Grid>
          //     ))}
          //   </Grid>
          // </Container>
        </Box> */}


        <box>
        <Container>
            <Grid container spacing={6} item={3}>
              {steps.map((step, index) => (
                <Grid item xs={4} sm={6} md={8} lg={12} key={index}>
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
        </box>

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

      </Container>
    </ThemeProvider>
  );
};

export default Home;

