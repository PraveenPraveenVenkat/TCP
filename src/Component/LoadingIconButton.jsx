// import * as React from 'react';
// import Tooltip from '@mui/material/Tooltip';
// import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';





// function LoadingIconButton() {
//     const [loading, setLoading] = React.useState(false);
//     React.useEffect(() => {
//       const timeout = setTimeout(() => {
//         setLoading(false);
//       }, 2000);
//       return () => clearTimeout(timeout);
//     });
//     return (
//       <Tooltip title="Click to see loading">
//         <IconButton onClick={() => setLoading(true)} loading={loading}>
//           <ShoppingCartIcon />
//         </IconButton>
//       </Tooltip>
//     );
//     return(<>
//     <h2>Welcome</h2>
//     </>


//     )
//   }
  
//   export default LoadingIconButton()


import React from 'react';
import { Tooltip, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function LoadingIconButton() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <h2>Welcome</h2>
      <Tooltip title="Click to see loading">
        <IconButton  sx={{
    padding: 2,         // or '16px'
    margin: 1,          // or '8px'
    color: 'primary.main',        // sets icon color
    backgroundColor: 'secondary.light', // sets button background
    '&:hover': {
      backgroundColor: 'secondary.main', // hover effect
    }
  }}
        size='large' onClick={() => setLoading(true)} loading={loading}>
          <ShoppingCartIcon />
        </IconButton>
      </Tooltip>
      
    </>
  );
}

export default LoadingIconButton;
