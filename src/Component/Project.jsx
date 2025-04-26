// import { Typography } from '@mui/material'
// import React from 'react'

// const Project = () => {
//   return (
//     <>
//     <Typography variant='h2'>
//       table
//     </Typography>
//     </>

   
//   )
// }

// export default Project


import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, TextField } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Project = () => {


  return (
  <>


{/* export default function BasicTable() { */}
  {/* return ( */}
  <Container sx={{
      paddingTop:12,
      // height:'28rem',
      backgroundColor:'white'
    }}>

      {/* <TextField variant='p' type="password" sx={{color:'white',backgroundColor:'white',}}>

      </TextField> */}
      <TextField id="outlined-basic" label="Outlined" variant="outlined"  sx={{color:'black',backgroundColor:'white',pt:12}} />
      <Button variant="contained" >Add</Button>
       
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650, height:'42rem', }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>


  </>
  )
}

export default Project;






// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';

// const style = {
//   py: 0,
//   width: '100%',
//   maxWidth: 360,
//   borderRadius: 2,
//   border: '1px solid',
//   borderColor: 'divider',
//   backgroundColor: 'background.paper',
// };

// export default function DividerVariants() {
//   return (
//     <List sx={style}>
//       <ListItem>
//         <ListItemText primary="Full width variant below" />
//       </ListItem>
//       <Divider component="inset" />
//       <ListItem>
//         <ListItemText primary="Inset variant below" />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem>
//         <ListItemText primary="Middle variant below" />
//       </ListItem>
//       <Divider variant="li" component="li" />
//       <ListItem>
//         <ListItemText primary="List item" />
//       </ListItem>
//     </List>
//   );
// }
