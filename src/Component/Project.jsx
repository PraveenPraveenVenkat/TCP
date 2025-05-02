import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableContainer,
  Typography,
  CircularProgress,
  TableHead,
  TableRow,
  TableCell,
  TextField,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Rows } from "./Data.js";
import axios from "axios";

// const Project = (props) => {
//   const { items } = props;

//    const [item,setItem]=useState([]);
//    const [food,setFood]=useState("");
//    const [calories ,setCalories] =useState("");

//    const handleAdd=()=>{
//      if(food && calories){

//       const newItem = {
//         id: Date.now().toString(),
//         food,
//         calories
//       };
//       setItems([...items, newItem]);
//       setFood('');
//       setCalories('');
//     }
//   };

const Project = (props) => {
  const [items, setItems] = useState([]);
  const [food, setFood] = useState("");
  const [auto, setAuto] = useState(0);
  const [data, setData] = useState([]);

  const handleAdd = () => {
    if (food) {
      const newItem = {
        id: setAuto(auto + 1),
        food,
      };

      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      setFood("");
      // setCalories('');

      console.log("Added item:", newItem);
      console.log("All items:", updatedItems);
    }
  };

  // Optional: map over props.items if passed in
  const listFromProps = props.items?.map((item) => (
    <div key={item.id}>
      <p>
        {item.food} - {item.calories} cal (from props)
      </p>
    </div>
  ));

  //  console.log(items);

  useEffect(() => {
    // fetch( 'https://food-calories1.p.rapidapi.com/categories/Pork/foods')
    // .then((res)=>res.json())
    // .then((data)=>console.log(data))

    // const api=axios.create({
    //   baseURL:
    // })
    // ?Get Method
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/recipes");
        setData(response.data.recipes);
      } catch (error) {
        console.log("Error fetching:", error);
      }
    };
    fetchData();
    // ?POST METHOD
    const addItem = async () => {
      try {
        const newItem = { name: "NewItem" };
        const response = await axios.post(
          "https://dummyjson.com/recipes",
          newItem
        );
        console.log(`Item added:`, response.data);
      } catch (error) {
        console.log(`error item:`, error);
        // console.log('Error adding item:', error);
        addItem();
      }
    };
  }, []);
  console.log(data);

  //   const listFromProps=props.items.map((item)=>{
  //  console.log(item)}
  //   )

  return (
    <Container sx={{ backgroundColor: "white", padding: 4 }}>
      <TextField
        label="Food"
        variant="outlined"
        sx={{ mt: 2, mr: 2 }}
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <Button variant="contained" sx={{ mt: 3 }} onClick={handleAdd}>
        Add
      </Button>
      {/* //? List from local state  */}
      {items.map((item) => (
        <Box
          className="item"
          key={item.id}
          style={{ backgroundColor: "white", marginTop: 20 }}
        >
          <Box className="content" sx={{ display: "flex", gap: "12" }}>
            <Box className="header" style={{ color: "black" }}>
              {item.food}{" "}
            </Box>
            <Box style={{ color: "black" }}>{item.calories}</Box>
            <DeleteIcon
              onClick={() => deleteItem(item.id)}
              sx={{ color: "red", paddingLeft: "60rem" }}
            />
          </Box>
        </Box>
      ))}
      <Typography variant="h4" sx={{ color: "black" }} gutterBottom>
        Recipe List
      </Typography>
      <List>
        {data.map((recipe) => (
          <ListItem key={recipe.id} sx={{ color: "black" }} divider>
            <ListItemText
              primary={recipe.name}
              secondary={`Cuisine: ${recipe.cuisine} | Calories: ${recipe.caloriesPerServing}| servings:${recipe.servings}| mealType:${recipe.mealType}`}
            />
          </ListItem>
        ))}
      </List>
      {/* //? Render list from props if provided */}
      {listFromProps}
    </Container>
  );
};

export default Project;

// return(
//   <>
//    <Container sx={{ backgroundColor: 'white', padding: 4 }}>
//   <TextField
//     label="Food"
//     variant="outlined"
//     sx={{ mt: 2, mr: 2 }}
//     value={food}
//     onChange={(e) => setFood(e.target.value)}
//   />
//   <TextField
//     label="Calories"
//     variant="outlined"
//     sx={{ mt: 2, mr: 2 }}
//     value={calories}
//     onChange={(e) => setCalories(e.target.value)}
//   />
//   <Button
//     variant="contained"
//     sx={{ mt: 3 }}
//     onClick={handleAdd}
//   >
//     Add
//   </Button>

//   {items.map((item) => (
//     <div className="item" key={item.id} style={{ backgroundColor: "white", marginTop: 20 }}>
//       <div className="content">
//         <div className="header" style={{ color: "black" }}>{item.food}</div>
//         <div style={{ color: "black" }}>{item.calories}</div>
//       </div>
//     </div>
//   ))}
// </Container>
//     </>
//   )
// })

// return (

//   <>

//   <div>
//     {list}
//   </div>
{
  /* <Container
        sx={{
          bgcolor: "white",
          mt: 3,
          minWidth: "65rem",
          height: "42rem",
          borderRadius: 5,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Food"
          variant="outlined"
          sx={{ mt: 2 }}
        />
        <Button variant="contained" sx={{ mt: 3, px: 4, mx: 5 }} onClick={handleClickOpen}>
          Add
        </Button>


      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email); // log the email
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>

        <TableContainer component={Paper}>
          <Table sx={{ height: "2rem" }} aria-label="simple table">
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
                <TableRow
                  key={item.food}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.food}
                  </TableCell>
                  <TableCell align="right">{item.Calories}</TableCell>
                  <TableCell align="right">{item.fat}</TableCell>
                  <TableCell align="right">{item.Carbs}</TableCell>
                  <TableCell align="right">{item.Protein}</TableCell>
                  <TableCell align="right">
                    <Grid container spacing={1} justifyContent="flex-start">
                      <Grid item>
                        <Button
                          variant="contained"
                          sx={{ bgcolor: "#00b600", pl: 2 }}
                        >
                          <EditIcon />
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" sx={{ bgcolor: "#cf040c" }}>
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
      </Container> */
}
{
  /* <Typography>
     {data}
     </Typography> */
}
//     </>
//   );
// };

// export default Project;
