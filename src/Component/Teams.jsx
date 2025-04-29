import React from 'react';
import { Grid, Box, Typography } from '@mui/material';


const Teams = () => {
  return (
    <>
      <Typography variant='h3' align="center" gutterBottom>
        Created For & Delivered By Experts
      </Typography>

      <Box xs={12} sm={4} md={4} lg={4} sx={{width:'70rem',height:'50rem',ml:12,}}>
             
        <Grid container spacing={4} sx={{justifyContent: 'center',}}>
              {/* First Row Services */}
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Box sx={{backgroundColor:'white',height:'30rem',borderColor:'#77feb8',}}>
                  <img src='https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600'   width={'50%'} height={'50%'}>  
                  </img>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%',borderColor:'#77feb8',borderRadius:'12rem' }}>
                  
                  </Box>
                  <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
                    Web Development
                  </Typography>
                </Box>
              </Grid>

              {/* <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box sx={{backgroundColor:'#00d4d7',height:'30rem',}}>
                  <img src='https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600' width={'50%'} height={'50%'}>  
                  </img>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                  
                  </Box>
                  <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
                    Web Development
                  </Typography>
                </Box>
              </Grid> */}
              {/* <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box sx={{backgroundColor:'#00d4d7',height:'30rem',}}>
                  <img src='https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600' width={'50%'} height={'50%'}>  
                  </img>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                  
                  </Box>
                  <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
                    Web Development
                  </Typography>
                </Box>
              </Grid> */}
              
              </Grid>

      </Box>
    </>
  );
};

export default Teams;
