import { Box,Typography,TextField, Button,Container } from '@mui/material'
import { blue } from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react'
import { Link } from 'react-router-dom';

const LoginForm = () => {

  return (
    <>
    {/* style="padding 10px" */}
     <Container maxWidth="sm" sx={{mt:8}}>
        {/* <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            gap:2,
            padding:12,
            border:'12px solid #ccc',
            borderRadius:16,
            boxShadow:3,
        }} */}

         {/* Responsive   */}
         
        <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    padding: { xs: 4, sm: 6, md: 8, lg: 12 }, 
    border: '2px solid #ccc',
    borderRadius: 12,
    boxShadow: 24,
   
  }}
>

        
         <Typography variant="h4" gutterBottom>
             Login
          </Typography>
          <TextField
           fullWidth
           label="Name"
           variant="outlined"
            sx={{ borderRadius:12,
              
            }}
         />
     <TextField
           fullWidth
           label="Password"
           type="password"
           variant="outlined"
         />
      <Button sx={{
        paddingTop:3,
        color:'black',
        marginLeft:19,
        paddingBottom:3,


      }}>forgot password?</Button>
    
{/* 
    <Button
  sx={{
    backgroundColor: blue[500],
    ':hover': {
      backgroundColor: blue[700],
    },
    color: 'white',
    borderRadius: 36,
    width: {
      xs: '100%',    // full width on mobile
      sm: '300',       // smaller width on tablets
      md: '400',       // full size on desktop
    },
  }}
>
  Submit
</Button> */}
<Button
  sx={{
    backgroundImage: 'linear-gradient(45deg, #33eaff, #e666fb)',
    color: 'white',
    borderRadius: 36,
    width: {
      xs: '100%',    // full width on mobile
      sm: '300',       // smaller width on tablets
      md: '400',       // full size on desktop
    },
    ':hover': {
      backgroundImage: 'linear-gradient(45deg, #2bcbe0, #c94be1)', // optional hover gradient
    },
  }}
>
  Submit
</Button>




<Typography sx={{
display: 'flex',
alignItems: 'center',
  paddingTop:2,
  gap:4,
  


  }}> 
    <LinkedInIcon sx={{
      color:blue[200],
  
    }}/>
    
    <GitHubIcon />
    <GoogleIcon/>
   </Typography>
            

   <Typography sx={{
    marginTop:3,
   }}>
  <Link>Sign Up</Link>
 </Typography>
   
        </Box>
   
 
   
     </Container>  
    </>  
  )
}
export default LoginForm





 
