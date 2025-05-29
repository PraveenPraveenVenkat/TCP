import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Pagination, Card, CardMedia, CardContent, Grid, CircularProgress } from "@mui/material";

const Website = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
        setLoading(false);
      } catch (error) {
        console.error("This is an error:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Product Details
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Grid container spacing={2}>
            {currentItems.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.thumbnail}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
            color="primary"
            style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}
          />
        </>
      )}
    </div>
  );
};

export default Website;

// import React, { useEffect, useState } from "react";
// import CallIcon from "@mui/icons-material/Call";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import axios from "axios";
// import { Typography } from "@mui/material";

// const Website = () => {

//    const [products,setProducts]=useState([]);

//   useEffect (()=>{

//     const fetchData = async () =>{

//       try{
//         const res=await axios.get ("https://dummyjson.com/products");
      
//         console.log(res.data.products);
//         setProducts(res.data.products)
//       }catch (error){
//         console.log('This Is A Error');
//       }
//     };
//     fetchData();

//   },[])


//   return (
//       <>
    
//     <div>
// <Typography variant="h2">
//   Product Deatils
// </Typography>

//   {products.map ((product)=>(
//   // <li  key={product.id} sx={{Color:'white'}}>{product.title}</li>


//    <img src={product.thumbnail}/>
//    ))}


   
//     </div>
//      </>
//   ); 
// };

// export default Website;







