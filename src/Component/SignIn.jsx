
import {
    Container,
    Typography,
    Button,
    Box,
    TextField,
    InputAdornment,
  } from '@mui/material';
  import PersonIcon from '@mui/icons-material/Person';
  import MailOutlineIcon from '@mui/icons-material/MailOutline';
  import GoogleIcon from '@mui/icons-material/Google';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import HttpsIcon from '@mui/icons-material/Https';
  import { blue, } from '@mui/material/colors';
  import React from 'react';
  
  const SignIn = () => {
    return (

      <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url('https://images.pexels.com/photos/941195/pexels-photo-941195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      
      }}
    >                                             
                                        {/* //?SignIn Form */}
        <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom>
           Sign In
         </Typography>
          <Box
            sx={{
              display: 'flex',
              height: '500px',
              boxShadow: 3,
              borderRadius: 2,
              overflow: 'hidden',
              p: {
                xs: 1,     // smaller padding on extra small screens
                sm: 4,
                md: 6,}
            }}
          >
                                       {/* //? Left Side */}
            <Box
              sx={{
                width: '50%',
                backgroundColor: '#77feb8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                Welcome To TCP
              </Typography>
            </Box>
  
                                      {/*//? Right Side */}
            <Box
              sx={{
                width: '50%',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 4,
              }}
            >
              <Typography variant="h5" align="center" color='secondary' gutterBottom>
                Welcome User
              </Typography>
  
              <TextField
                variant="outlined"
                label="Name"
                fullWidth
                margin="normal"
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
                label="Email"
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="outlined"
                label="Password"
                fullWidth
                margin="normal"
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HttpsIcon />
                    </InputAdornment>
                  ),
                }}
              />

             <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, pt: 2 }}>
              <LinkedInIcon sx={{ color: blue[700] }} />
              <GitHubIcon  sx={{ color: '#262626', }} />
              <GoogleIcon sx={{ color: '#262626', }} />
            </Typography>


                   
              <Button variant="contained" sx={{width:'12rem',
                marginLeft:20, 
                marginTop:12,
                borderRadius:2,
                p: {
                  xs: 3,     // smaller padding on extra small screens
                  sm: 2,
                  md: 2,}
                }}>Contained</Button>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  };
  


//   import * as React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Dialog from '@mui/material/Dialog';
// import PersonIcon from '@mui/icons-material/Person';
// import AddIcon from '@mui/icons-material/Add';
// import Typography from '@mui/material/Typography';
// import { blue } from '@mui/material/colors';

// const emails = ['username@gmail.com', 'user02@gmail.com'];

// function SimpleDialog(props) {
//   const { onClose, selectedValue, open } = props;

//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   const handleListItemClick = (value) => {
//     onClose(value);
//   };

//   return (
//     <Dialog onClose={handleClose} open={open}>
//       <DialogTitle>Set backup account</DialogTitle>
//       <List sx={{ pt: 0 }}>
//         {emails.map((email) => (
//           <ListItem disablePadding key={email}>
//             <ListItemButton onClick={() => handleListItemClick(email)}>
//               <ListItemAvatar>
//                 <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
//                   <PersonIcon />
//                 </Avatar>
//               </ListItemAvatar>
//               <ListItemText primary={email} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//         <ListItem disablePadding>
//           <ListItemButton
//             autoFocus
//             onClick={() => handleListItemClick('addAccount')}
//           >
//             <ListItemAvatar>
//               <Avatar>
//                 <AddIcon />
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary="Add account" />
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Dialog>
//   );
// }

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

// export default function SimpleDialogDemo() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

//   return (
//     <div>
//       <Typography variant="subtitle1" component="div">
//         Selected: {selectedValue}
//       </Typography>
//       <br />
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open simple dialog
//       </Button>
//       <SimpleDialog
//         selectedValue={selectedValue}
//         open={open}
//         onClose={handleClose}
//       />
//     </div>
//   );
// }

  export default SignIn;
  
// import {
//     Container,
//     Typography,
//     Grid,
//     Box,
//     TextField,
//     InputAdornment,
//   } from '@mui/material';
//   import PersonIcon from '@mui/icons-material/Person';
//   import MailOutlineIcon from '@mui/icons-material/MailOutline';
//   import HttpsIcon from '@mui/icons-material/Https';
//   import React from 'react';
  
//   const SignIn = () => {
//     return (
//       <Container maxWidth="md" sx={{ paddingTop: 5 }}>
//         <Typography variant="h2" align="center" gutterBottom>
//           Sign In
//         </Typography>
  
//         <Box
//           sx={{
//             backgroundColor: 'white',
//             minHeight: '35rem',
//             color: 'black',
//             display: 'flex',
//           }}
//         >
//           {/* Left Side */}
//           <Grid
//             item
//             xs={6}
//             sx={{
//               backgroundColor: '#77feb8',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               textAlign: 'center',
//             }}
//           >
//             <Typography variant="h3">Welcome To TCP</Typography>
//           </Grid>
  
//           {/* Right Side */}
//           <Grid
//             item
//             xs={6}
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               padding: 4,
//             }}
//           >
//              <Typography variant="h6" sx={{alignContent:'center'}}>Welcome User</Typography>
//             <Box>
//               <TextField
//                 variant="outlined"
//                 label="Name"
//                 fullWidth
//                 margin="normal"
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <PersonIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//                 <TextField
//                 variant="outlined"
//                 label=" Email"
//                 fullWidth
//                 margin="normal"
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       < MailOutlineIcon/>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//                   <TextField
//                 variant="outlined"
//                 label=" Password"
//                 fullWidth
//                 margin="normal"
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <HttpsIcon/>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
              
  
//               {/* You can add more fields like Last Name, Email, Password, etc. */}
//             </Box>
//           </Grid>
//         </Box>
//       </Container>
//     );
//   };
  
//   export default SignIn;
  
// import { Container, Typography,Grid,Box,TextField,InputAdornment } from '@mui/material'
// import PersonIcon from '@mui/icons-material/Person';

// import React from 'react'

// const SignIn = () => {
//   return (
//     <>
//      <Container sx={{
//             paddingTop:12,
//         }}>
//             <Typography variant='h2'>Sign In</Typography>
//         <Box sx={{
//             backgroundColor:'white',
//             height:'35rem',
//             color:'black',
//             paddingTop:12,
//         }}>
//              <Grid item
//         sx={{
//             width:'50%',
//             backgroundColor:'#77feb8',
//             textAlign:'center',
//             height:'58.3vh',
//             }}>
//         <Typography varient="h2" >Welcome To TCP</Typography>
//         </Grid>

// <Grid item>

// <Box sx={{
//             width:'-50%',

//             textAlign:'center',
//             height:'58.3vh',
//             }}>
//         <TextField
//        sx={{color:'black',backgroundColor:"white"}}
//   variant="outlined"
//   label="Enter Your First Name"
//   fullWidth
//   InputProps={{
//     startAdornment: (
//       <InputAdornment position="start">
//         <PersonIcon />
//       </InputAdornment>
//     ),
//   }}
// />        </Box>


// </Grid>
   
//         <Grid>

//         </Grid>
//        </Box>
       
//      </Container>
//     </>
    
//   )
// }

// export default SignIn
