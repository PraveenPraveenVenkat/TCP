import React from 'react';
import {
  Container,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from '@mui/material';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import PhoneTwoToneIcon from '@mui/icons-material/PhoneTwoTone';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import PersonIcon from '@mui/icons-material/Person';

const LinkedIN = () => {
  return (
    <Container sx={{
      paddingTop:12,
      alignItems:'center',
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          padding: 4,
          border: '2px solid #ccc',
          borderRadius: 4,
          height: '40rem',
          width: '60rem',
          backgroundColor: 'white',
          boxShadow: 4,
        }}
      >
        <Grid container direction="column" spacing={2}>
          {/* Contact Header */}
          <Grid item>
            <Box
              sx={{
                backgroundColor:' #4083ca',
                height: '6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 900,
                borderRadius: 4,
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: 'white', display: 'flex', alignItems: 'center',gap:2, }}
              >
                <MailRoundedIcon/>
                support@tcp.com
              </Typography>
            </Box>
          </Grid>

          {/* First & Last Name */}
          <Grid item>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                paddingTop:4,
                borderRadius:'12rem',
              }}
            >
              <TextField
  variant="outlined"
  label="Enter Your First Name"
  fullWidth
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <PersonIcon />
      </InputAdornment>
    ),
  }}
/>
              <TextField
                variant="outlined"
                label="Enter Your Last Name"
                fullWidth
                InputProps={{
                  startAdornment:(
                    <InputAdornment position='start'>
                    <PersonIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Box>
          </Grid>

          {/* Email, Contact, Message – Stacked */}
          <Grid item>
            <Box
            
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: 900,
                borderRadius: 4,
               
              }}
            >
              <TextField
                variant="outlined"
                label="Enter Your Email Address"
                fullWidth
                InputProps={{
                  startAdornment:(
                    <InputAdornment>
                    <MailOutlineTwoToneIcon/>
                    </InputAdornment>
                  )
                }}
              />
           
              <TextField
                variant="outlined"
                label="Contact Number"
                fullWidth
                InputProps={{
                  startAdornment:(
                    <InputAdornment>
                     <  PhoneTwoToneIcon/>
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                variant="outlined"
                label="Message"
                multiline
                rows={4}
                fullWidth
               
              />
              <Button variant="contained" sx={{width:'12rem',borderRadius:12,height:40}}>
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LinkedIN;


// import React from 'react';
// import { Container, Box,Grid, TextField, Typography, Button } from '@mui/material';
// import MailIcon from '@mui/icons-material/Mail';
// import PersonIcon from '@mui/icons-material/Person';

// const LinkedIN = () => {
//   return (
   
//       <Container >
        
//         <Box
//           // spacing={{ xs: 1, sm: 2 }}
//           direction="row"
//           useFlexGap
//           // sx={{display:'flex',padding:40,backgroundColor:'white' }}
//           sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: 2,
//           padding: 4,
//           border: '2px solid #ccc',
//           borderRadius: 4,
//           height:"38rem",
//           width:"50rem",
//           backgroundColor:'white', 
//           boxShadow: 4, }}
//         >
//           <Grid>

      
//           <Grid> 
//             <Box sx={{backgroundColor:'blue',
//             height:'3rem',
//             paddingTop:2,
//             width:600,
//             alignItems:'center',
//             borderRadius:4,
//             }}>

            
//           <Typography variant='p' sx={{backgroundColor:'blue',
//             height:'24rem',
//             paddingTop:2,
//             fullWidth
//           }}><MailIcon sx={{alignItems:'center',}}/>
//                support@tcp.com
//           </Typography>
//           </Box>
//           </Grid>  

//           <Grid spacing={2}  sx={{borderRadius:'14rem',gap:'12',}}>


//             <Box>

//         <TextField variant='outlined' label="Enter Your First Name" sx={{borderRadius:'14rem',gap:22,}}>
//           <PersonIcon />


//         </TextField>
//         <TextField variant='outlined' label="Enter Your Last Name" sx={{ borderRadius:14,}}>


//           </TextField>
//           </Box>
         
//         </Grid>
   
//         </Grid>

//         <Box sx={{
//             height:'3rem',
//             paddingTop:2,
//             width:600,
//             alignItems:'left',
//             borderRadius:4,
//             }}>

          
//         <TextField variant='outlined' label="Enter Your Email Address" sx={{ borderRadius:14,}}>
// </TextField>

//         <TextField variant='outlined' label="Contact Number" sx={{ borderRadius:14,}}>
// </TextField>

// <TextField variant='outlined' label="Message" sx={{ borderRadius:14,}}>
// </TextField>
// <Button variant="contained">Contained</Button>
// </Box>
//         </Box>
        
//       </Container>



//   );
// };

// export default LinkedIN;
