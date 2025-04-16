import React from 'react';
import { Grid, Paper,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Teams = () => {
  return (
    <div>
      <h4>Our Teams</h4>
      <Grid container rowSpacing={1}  spacing={2}
       sx={{
        justifyContent: "space-around",
        alignItems: "stretch",
      }}
      >
        <Grid item xs={2}>
          <Item>
            
            
          <Typography variant="h4" gutterBottom>
             Login
          </Typography>
</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>size=4</Item>
        </Grid>
        
      </Grid>





{/* <Grid
  container
  direction="row"
  sx={{
    justifyContent: "space-around",
    alignItems: "stretch",
  }}
> */}

    </div>




  );
};

export default Teams;






// import React from 'react'
// import { Grid,Item } from '@mui/material';

// const Teams = () => {
//   return (
//     <div>
//       <h4>Our Teams</h4>
    
//      <Grid container spacing={2}>
//   <Grid size={8}>
//     <Item>size=8</Item>
//   </Grid>
//   <Grid size={4}>
//     <Item>size=4</Item>
//   </Grid>
//   <Grid size={4}>
//     <Item>size=4</Item>
//   </Grid>
//   <Grid size={8}>
//     <Item>size=8</Item>
//   </Grid>
// </Grid> 
//     </div>
//   )
// }

// export default Teams;.