import React from 'react';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';

const DropAMail = () => {
  return (
    <Box sx={{ bgcolor: 'white', color: 'black', padding: 4 }}>
      <Typography variant="h4" sx={{ color: 'black' }}>
        Drop a Mail
      </Typography>
    </Box>
  );
};

export default DropAMail;
