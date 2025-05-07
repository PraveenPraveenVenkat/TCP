import React from "react";
import {
  Container,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
import PhoneTwoToneIcon from "@mui/icons-material/PhoneTwoTone";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import PersonIcon from "@mui/icons-material/Person";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import SpeedDial from '@mui/material/SpeedDial';
import { createTheme,  ThemeProvider } from "@mui/material/styles";
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';


//  ? Custom theme with breakpoints
const theme = createTheme({
  breakpoints: {
    values: {
      mob: 0,
      tab: 786,
      lap: 1024,
      desk: 1200,
    },
  },
});

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];


const LinkedIN = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ paddingTop: 12, alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            padding: 4,
            border: "2px solid #ccc",
            borderRadius: 4,
            backgroundColor: "white",
            boxShadow: 4,
            width: { xs: "100%", sm: "90%", md: "20rem" },
          }}
        >
          <Grid container direction="column" spacing={4}>
            {/* //? Header  */}
            <Grid item>
              <Box
                sx={{
                  backgroundColor: "#4083ca",
                  height: "6rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  borderRadius: 4,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    fontWeight: 500,
                  }}
                >
                  <MailRoundedIcon />
                  support@tcp.com
                </Typography>
              </Box>
            </Grid>

            {/* //? Name Fields */}
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  paddingTop: 4,
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
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>

            {/* // ?Contact Info */}
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <TextField
                  variant="outlined"
                  label="Enter Your Email Address"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                        <MailOutlineTwoToneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  variant="outlined"
                  label="Contact Number"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                        <PhoneTwoToneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  variant="outlined"
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                />
                <Button
                  variant="contained"
                  sx={{ width: "12rem", borderRadius: 12, height: 40 }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
          
        </Box>
        <Box sx={{ height: 3, transform: 'translateX(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>

      </Container>






 



    </ThemeProvider>
  );
};

export default LinkedIN;
