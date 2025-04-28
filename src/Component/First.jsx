import { Typography,Box,Stack,Button } from "@mui/material";
import React from "react";
import { styled, width } from '@mui/system';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Link } from 'react-router-dom';
import Animation from "./Animation.gif";

const  First =()=>{


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
      

    return(
    <>
             <Box sx={{ position: 'relative', width: '100%' , }}>
  {/* Background Image */}
<img src={Animation} alt="Animation" style={{ width: '100%', display: 'block', }}  />


  {/* Overlay Text & Buttons */}
  <Box
    sx={{
      position: 'absolute',
      top: '53%',
      left: '20%',
      transform: 'translate(-50%, -50%)',
      color: '#fff', // adjust for contrast
      textAlign: 'center',
      padding: 2,
      pt: { xs: 3, sm: 4, md: 6, lg: 10 },
      width:{xs:'100%', md:'100%'},
    //   height:{xs:'100%', md:'100%'},
   
    }}
  >
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: '0.9rem', sm: '1.2rem', md: '1.5rem' },
        pl:{xs:8,lg:2},
        mt:2,
        
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
      <StyledButton  component={Link} to="/Login">
        LOG IN <TrendingFlatIcon sx={{ ml: 1 }} />
      </StyledButton>
      <StyledButton>
        ABOUT US <TrendingFlatIcon sx={{ ml: 1 }} />
      </StyledButton>
    </Stack>
  </Box>
</Box>
       
    </>

    )
}
export default First;