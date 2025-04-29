import React from 'react';
import { Container, Box, ThemeProvider, Typography } from '@mui/material';
import {  createTheme,styled} from '@mui/material/styles';
import { green, blue, purple } from '@mui/material/colors';

const OurGrowth = () => {
                                                            // ? Custom theme with breakpoints
  const theme =  createTheme({
    breakpoints:{
      values:{
        mob:0,
        tab:786,
        lap:1024,
       desk:1200

      }
    }
  });
  const Responsive = styled ("div")(({theme})=>({
    [theme.breakpoints.up("mob")]:{
      color:green[500],
    },
    [theme.breakpoints.up("tab")]:{
      color:blue[500],
    },
    [theme.breakpoints.up("lap")]:{
      color: purple[900],
    },

  }));

  return (
    <>
    <ThemeProvider theme={theme}>
      <Responsive>
      <Typography variant='h2'>
        Media Query
      </Typography>
      </Responsive>

     
          </ThemeProvider>
    </>
  );
};

export default OurGrowth;