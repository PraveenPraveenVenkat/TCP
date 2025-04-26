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
      {/* <Container sx={{ paddingTop: 12, alignItems: 'center' }}>
        <Box
          sx={(theme) => ({
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
            [theme.breakpoints.up('md')]: {
              backgroundColor: 'blue',
            },
          })}
          >
          <div>{isSmallScreen ? 'Small screen' : 'Large screen'}</div>
          <div>{isSmallScreen ? 'Small screen' : 'Large screen'}</div>
        </Box>
      </Container> */}
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


// import React from 'react'
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

// const OurGrowth = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//    <>
//        <Container sx={{
//       paddingTop:12,
//       alignItems:'center',
//     }}>


//       <Box
//          sx={(theme) => ({
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: 2,
//           padding: 4,
//           border: '2px solid #ccc',
//           borderRadius: 4,
//           height: '40rem',
//           width: '60rem',
//           backgroundColor: 'white',
//           boxShadow: 4,
//           [theme.breakpoints.up('md')]: {
//             backgroundColor: 'blue',
//           },
//           })}
//       >
//          <div>
//         {isSmallScreen ? "Small screen" : "Large screen"}
//       </div>
//       </Box>
//     </Container>
//     </>
//   );
// };



// export default OurGrowth;
