import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';


const Footer = () => {
  return (


    <Box sx={{ bgcolor: '#77feb8', color: 'white', py: 5,marginTop:"12rem" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} >
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{
                marginLeft:0 ,gap:12,

            }} gutterBottom>About Us</Typography>
            <Typography variant="body2">
              We are a team of passionate developers building  web apps with React and MUI.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <Link href="#" color:black underline="hover" display="block">Home</Link>
            <Link href="#" color:black underline="hover" display="block">Services</Link>
            <Link href="#" color:black underline="hover" display="block">Blog</Link>
            <Link href="#" color:black underline="hover" display="block">Contact</Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>Contact</Typography>
            <Typography variant="body2">Email: contact@example.com</Typography>
            <Typography variant="body2">Phone: +1 (555) 123-4567</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{
            paddingLeft:-2,
          }}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <Box>
              <IconButton href="#" color="inherit"><Facebook /></IconButton>
              <IconButton href="#" color="inherit"><Twitter /></IconButton>
              <IconButton href="#" color="inherit"><Instagram /></IconButton>
              <IconButton href="#" color="inherit"><LinkedIn /></IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center" pt={5}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} YourCompany. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
