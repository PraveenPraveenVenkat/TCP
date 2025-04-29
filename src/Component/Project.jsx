
import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, TextField, Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Rows } from './Data.js';


const Project = () => {
  // const [data,setData]=useState();



useEffect (()=>{

//   const url = 'https://calorie-calculator.p.rapidapi.com/caloriecalculator.php';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-host': 'calorie-calculator.p.rapidapi.com'
// 	}
// };


// try {
//   return response.json();
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// fetch('https://calorie-calculator.p.rapidapi.com/caloriecalculator.php')
fetch('https://jsonplaceholder.typicode.com/posts')
         .then(Response => Response.json())
         .then(data=>console.log(data))
         .catch(error =>console.log('Error' ,error))


}, [] );

  return (
    <>
      <Container sx={{ bgcolor: 'white', mt: 3, minWidth: '65rem', height: '42rem', borderRadius: 5 }}>
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
     {/* <Typography>
     {data}
     </Typography> */}
    </>
  );
}

export default Project;