import { Box,Typography,TextField, Button,Container } from '@mui/material'
import { blue } from '@mui/material/colors';
import React from 'react'

const LoginForm = () => {


  return (




    <>
    {/* style="padding 10px" */}
     <Container maxWidth="sm" sx={{mt:8}}>
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            gap:2,
            padding:12,
            border:'12px solid #ccc',
            borderRadius:16,
            boxShadow:3,
        }}
        >
         <Typography variant="h4" gutterBottom>
             Login
          </Typography>

          <Typography variant='h5'>Name</Typography>
          <TextField
           fullWidth
           label="Name"
           variant="outlined"
         />
     <Typography variant='h5'> Password</Typography>
     <TextField
           fullWidth
           label="Password"
           type="password"
           variant="outlined"
         />

         {/* <Button sx={{
            //  primary: blue,
             ":hover"
             backgroundColor=green[400],
         }} >Submit</Button>
      */}
    

         <Button
  sx={{
    backgroundColor: blue[500],       // Default background color
    ':hover': {
      backgroundColor: blue[700],     // Hover background color
    },
    color: 'white',                   // Text color
  }}
>
  Submit
</Button>
        </Box>
   
     </Container>  
    </>  
  )
}





export default LoginForm


// import React from 'react';
// import { Container, Typography, TextField, Button, Box } from '@mui/material';

// function LoginForm() {
//   return (
//     <Container maxWidth="sm" sx={{ mt: 8 }}>
//       <Box 
//         sx={{ 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'center',
//           gap: 2,
//           padding: 4,
//           border: '1px solid #ccc',
//           borderRadius: 2,
//           boxShadow: 3
//         }}
//       >
//         <Typography variant="h4" gutterBottom>
//           Login
//         </Typography>

//         <TextField
//           fullWidth
//           label="Name"
//           variant="outlined"
//         />

//         <TextField
//           fullWidth
//           label="Password"
//           type="password"
//           variant="outlined"
//         />

//         <Button variant="contained" color="primary" fullWidth>
//           Submit
//         </Button>
//       </Box>
//     </Container>
//   );
// }

// export default LoginForm;

