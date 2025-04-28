
import React from 'react';
import { Container, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, TextField, Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Rows = [
  { "food":"Frozen yoghurt", "Calories":159, "fat":6.0, "Carbs": 24 , "Protein":4.0 },
  { "food":"Ice cream sandwich", "Calories": 237, "fat":9.0, "Carbs": 37 , "Protein":4.3 },
  { "food":"Eclair", "Calories":262, "fat":16, "Carbs":24, "Protein":6.0 },
  { "food":"Cupcake", "Calories":356, "fat":3.7, "Carbs":64 , "Protein":4.3 },
  { "food":"Gingerbread", "Calories":519, "fat":6.0, "Carbs": 24 , "Protein":3.9 },
];

const Project = () => {
  return (
    <>
      <Container sx={{ bgcolor: 'white', mt: 3, minWidth: '65rem', height: '42rem', borderRadius: 12 }}>
        <TextField id="outlined-basic" label="Food" variant="outlined" sx={{ mt: 2 }} /> 
        <Button variant="contained" sx={{ mt: 3, px: 4, mx: 5 }}>Add</Button> 

        <TableContainer component={Paper}>
          <Table sx={{ height: '2rem' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Food (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Rows.map((item) => (
                <TableRow key={item.food} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">{item.food}</TableCell>
                  <TableCell align="right">{item.Calories}</TableCell>
                  <TableCell align="right">{item.fat}</TableCell>
                  <TableCell align="right">{item.Carbs}</TableCell>
                  <TableCell align="right">{item.Protein}</TableCell>
                  <TableCell align="right">
                    <Grid container spacing={1} justifyContent="flex-start">
                      <Grid item>
                        <Button variant="contained" sx={{ bgcolor: '#00b600', pl: 2 }}>
                          <EditIcon />
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" sx={{ bgcolor: '#cf040c' }}>
                          <DeleteOutlineIcon />
                        </Button>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Project;

// import { Container, Table, TableBody, TableContainer, TableHead, TableRow, TextField, Button, Grid } from '@mui/material';
// import Paper from '@mui/material/Paper';
// import TableCell from '@mui/material/TableCell';
// import React from 'react'
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import Rows from './data'


// const Project = () => {
  

//   return (
//     <>
  
//      <Container sx={{bgcolor:'white',mt:3,minWidth: '65rem', height:'42rem',borderRadius:12}}>
//           <TextField id="outlined-basic" label="Food" variant="outlined"  sx={{mt:2}}  /> 
//       <Button variant="contained"  sx={{mt:3,px:4,mx:5}}  >Add</Button> 

//        <TableContainer   Component={Paper}>
//         <Table sx={{ height:'2rem', }}  aria-label="simple table">
//           <TableHead>
//             <TableRow>
//             <TableCell>Food (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//                <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                <TableCell align="right">Protein&nbsp;(g)</TableCell>
             
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {Rows.map((item,index)=>(
//                              <TableRow
//                      key={index}
//                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//                   <TableCell component="th" scope="row" sx={{padding:4}}>
//                {item.food}
//               </TableCell>
//              <TableCell align="right">{item.calories}</TableCell>  
//              <TableCell align="right">{item.fat}</TableCell> 
//               <TableCell align="right">{item.carbs}</TableCell>
//              <TableCell align="right">{item.protein}</TableCell>
//              <Grid item={4} >
//              <Button variant="contained"sx={{bgcolor:'#00b600',pl:2}}> <EditIcon/> </Button>
//              <Button variant="contained" sx={{bgcolor:'#cf040c',gap:12}}> < DeleteOutlineIcon/> </Button>
//              </Grid>
            


//              </TableRow>

//            ))}
                  
             
//           </TableBody>
//         </Table>

//        </TableContainer>
//      </Container>
//     </>

   
//   )
// }
// export default Project