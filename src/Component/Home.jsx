import { Button,Stack,  CardContent, Typography ,Grid,Box,ListItem,Divider,ListItemText,} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import LoginIcon from '@mui/icons-material/Login';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
  button:{
     backgroundColor:"white",
     color:'black',
     font:"caption",
     height:'4rem',
     width:'10rem',
     borderRadius:'24rem',
     paddingBottom:"12",
     textAlign:'center',
  alignContent:'center',
  '&:hover': {
    backgroundColor: '#243683',
   
  },
     
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

});

const Home = () => {
  const classes = useStyles();
  const scroll=keyframes`
  0%{transform:translateX(100%);}
  100{transform:translateX)(-100%);}
  `;
  const handleclick =(ListItemText)=>{
    // setOpenIndex(openIndex === index ? null :index);
  }

  return (
    <>
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
  to="/Home" 
>
  LOGIN <LoginIcon />
</Button>
    
{/* padding: { xs: 4, sm: 6, md: 8, lg: 12 }, */}
      <CardContent>
      
        <Typography variant="h1" sx={{
          fontSize:'5.5rem',paddingLeft:'18rem'
        }} >
          Best <br /> Place for Creative <br /> Digital Solution
        </Typography>


        <Grid item xs={2}>
        <Typography
          sx={{
            
            marginRight: 11,
            paddingLeft:'20rem',
            paddingTop:6,
            fontSize: '1.5rem',
          }}
        >
          Unlock the Power of Web Presence with our <br />
          Professional Website Designing Service! Elevate <br />
          Your Online Presence with Stunning Website <br />
          Designs.
        </Typography>
        {/* <img src="https://vdigtech.com/wp-content/uploads/2024/03/banner_home02-DD9Q8T2.jpg" sx={{alignItems:'right,'}} alt="" /> */}
     
          </Grid>
          </CardContent>
      

      <Stack direction="row" sx={{
         paddingLeft:'20rem',
         paddingTop:5,
      }} gap={12}>
      
        <Button sx={{
             border:2,
         color:'white',
         spacing:4,
        '&:hover': {
      backgroundColor: '#115293',
    },
        

      }}>GET STARTED< TrendingFlatIcon /> </Button> 
      <Button sx={{
             border:2,
         color:'white',
         spacing:2,
         '&:hover':{
          backgroundColor:'#115293',
         }

      }}>ABOUT US< TrendingFlatIcon /> </Button> 
        
         
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
            fontSize:'1.2rem',
          }}
        >
         Comprehensive Website Services to Ignite Your Online Success. Empower
         Your Business<br></br>  with Powerful Online Services from our Website.
          Designs.
        </Typography>


     
              {/* //!First Grid Box */}
            
            
            <Grid container sx={{
              gap:8,paddingLeft: '16rem',paddingTop:"8rem",
              
            }} spacing={2}>
      <Grid item xs={4}>
        <Box className={classes.box} sx={{backgroundColor:"#77feb8",}}>
        
        <ArrowOutwardIcon  sx={{alignItems:"Left",paddingLeft:"12rem",}}/>
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
          <Grid  direction="row">
          < AppShortcutIcon sx={{alignItems:"Left",}}/>
  
            <ArrowOutwardIcon  sx={{alignItems:"right",paddingLeft:"12rem",}} />
          </Grid>
        
          <Typography variant="h6"sx={{mt:2,}} >App Development </Typography>
          <img
            src='https://vdigtech.com/wp-content/uploads/2024/03/Image-21.jpg'
            alt='App Dev'
            className={classes.image}
          />
         
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box className={classes.box}>
        <ArrowOutwardIcon  sx={{alignItems:"Left",paddingLeft:"12rem",}}/>
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
        <ArrowOutwardIcon  sx={{alignItems:"Left",paddingLeft:"12rem",}}/>
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
        <ArrowOutwardIcon  sx={{alignItems:"Left",paddingLeft:"12rem",}}/>
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
        <ArrowOutwardIcon  sx={{alignItems:"Left",paddingLeft:"12rem",}}/>
          <Typography variant="h6">Graphic Design</Typography>
          <img
            src='https://vdigtech.com/wp-content/uploads/2024/03/Untitled-design-1.png'
            alt='Graphic Design'
            className={classes.image}
          />
         
        </Box>
      </Grid>
    </Grid>

    {/* //?Scroll  or Marque Tag*/}
   
  <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        mt:4,
        padding:5,
        backgroundColor: "#77feb8",
        gap:6,
        color:"black"
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
          <Grid container spacing={2} sx={{
            paddingLeft:"20rem",
            paddingTop:"10rem",
          }}>
           

           
            <Typography variant='h3'>
            One-stop digital marketing <br/> services 🎯
            </Typography>

            <Typography variant='p' sx={{paddingTop:12,paddingLeft:'',}}>
            Get benefits with the best Digital Marketing Service with unique<br/> strategies. Improve the search visibility of your website with <br/>the proper techniques of our digital marketing experts. Boost sales <br/> and optimize your page for more user engagement.
            </Typography>

            <Grid container spacing={3} item xs={3}>
              <Typography variant='p' className={classes.button}>
              CONVERSION
              </Typography>
              <Typography variant='p' className={classes.button}>
              OPTIMIZATION
              </Typography>
              <Typography variant='p' className={classes.button}>
              ECOMMERCE
              </Typography>
              <Typography variant='p' className={classes.button}>
              ANALYTIC
              </Typography>
              <Typography variant='p' className={classes.button}>
              LINK BUILDING
              </Typography>
              <Typography variant='p' className={classes.button}>
              STRATEGY
              </Typography>
              {/* <Grid>
                <img src="https://vdigtech.com/wp-content/uploads/2024/03/about_home02-TELVHCF.jpg" alt="img" />
              </Grid> */}
              </Grid>
             
          
          </Grid>


             <Grid container spacing={3} columnGap={2} sx={{paddingLeft:"20rem",gap:14,paddingTop:"12rem",}}>
                    {/* //?Container 1 */}
              <Grid item xs={3}>
                <Box sx={{backgroundColor:"#172146",height:'15rem',width:'17rem',}}>
                  <Typography variant='p'>
                           Step 01
                  </Typography>
                  <Typography variant='h5'>
                        Web Inspection
                  </Typography>
                  <Divider sx={{color:'white',width:'10rem',}}/>
                  <Typography variant='p'>
                  Proper inspection of a website with <br/>the best tools for the next stage.
                  </Typography>
                </Box>

            </Grid>
                  {/* //?Container 2 */}
            <Grid item xs={3}>
                <Box sx={{backgroundColor:"#22C23E",height:'15rem',width:'17rem',}}>
                  <Typography variant='p'>
                  Step 02
                  </Typography>
                  <Typography variant='h5'>
                  Deep Optimization
                  </Typography>
                  <Divider sx={{color:'white',width:'10rem',}}/>
                  <Typography variant='p'>
                 
Optimizing the website with special strategies by covering all its needs
                  </Typography>
                </Box>

            </Grid>


              {/* //?Container 3 */}
            <Grid item xs={3}>
                <Box sx={{backgroundColor:"#172146",height:'15rem',width:'17rem',}}>
                  <Typography variant='p'>
                  Step 03
                  </Typography>
                  <Typography variant='h5'>
                  Analyze Growth
                  </Typography>
                  <Divider sx={{color:'white',width:'10rem',}}/>
                  <Typography variant='p'>
                  Expert analysis of website data for deploying a strategy for further growth.
                  </Typography>
                </Box>

            </Grid>
            
            </Grid>
              



          <Box sx={{
            paddingLeft:"20rem",
            paddingTop:"10rem",
          }}>
            <Typography variant='h3' >
            E-commerce Integration
            </Typography>

            <Typography variant='p' sx={{paddingTop:'12rem',}}>
            Specializing the website with unique E-commerce features <br/>integration to develop a user-centric web page.
            </Typography>
        {/* {open ? <ExpandLess /> : <ExpandMore />} */}
              <Typography > 
               WHICH TYPE OF E-COMMERCE WEBSITES HAVE YOU DEVELOPED IN THE PAST?   <ArrowForwardIcon sx={{paddingLeft:2,paddingTop:2,}} onclick={()=>handleclick(ListItemText)}/>
              </Typography>
              <ListItemText variant="p">
              We are a leading company designing websites for various  <br/>prospects. Our experts have having capability of designing <br/> websites in any language as well as WordPress. In the past, we <br/> have designed many e-commerce websites using PHP, HTML, <br/> & WordPress, and also ready to face challenges to develop from it.
              </ListItemText>
          
            <Divider sx={{width:'45rem',paddingTop:2,color:"white",}}/>


            <Typography>
              HOW MUCH TIME DOES IT NEED FOR AN ONLINE STORE TO GO LIVE?  <ArrowForwardIcon sx={{paddingLeft:15,paddingTop:2,}}/>
              </Typography>
              <ListItemText variant="p">
              It depends, Actually developing an E-commerce website is not an <br/> easy thing. It requires many features as well as a specific<br/> language to design an e-commerce site. At us, we take the time <br/> period very seriously, and our experts design it in a very short <br/> time period. Normally it takes a month to design an e-commerce <br/> website but we can make it quick for you.
              </ListItemText>
              <Divider sx={{width:'45rem',paddingTop:2,}}/>


              <Typography>
               WHAT IF I FACE ANY ISSUES ON MY E-COMMERCE WEBSITE AFTER DELIVERY?  <ArrowForwardIcon sx={{paddingLeft:6,paddingTop:2,}}/>
              </Typography>
              <ListItemText variant="p">
              No need to worry about it as you will not face any major issues on your website. At first,<br/> our support team will stay connected with  you and observe the website's performance. <br/>Next to this, you can contact us any time regarding any issues about the website and our<br/> support team will resolve your issues as soon as possible.
              </ListItemText>
              <Divider sx={{width:'45rem',paddingTop:2,}}/>

          </Box>
</>
  );
};

export default Home;
