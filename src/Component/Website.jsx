import React, { useEffect, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";
import { Typography } from "@mui/material";

const Website = () => {

  const [data,setData]=useState([]);

  useEffect (()=>{
    const fetchData =async () =>{
      try{
        const data=await axios.get ("https://dummyjson.com/products");
        // setData(response.data.)
        console.log(data.title);
      }catch (error){
        console.log('This Is A Error');
      }
    };

  },[])

  // useEffect(() => {
  //   // ?Get Method
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://dummyjson.com/recipes");
  //       setData(response.data.recipes);
  //     } catch (error) {
  //       console.log("Error fetching:", error);
  //     }
  //   };
  return (
    // <div sx={{backgroundcolor:white}}>
    //   <>
    //     {/* <img style={{width:"100rem", height:"30%",}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8SKpaoBT9EWK5cjkiXwD5BqMmHEVqwGnysRb5n8nr1dNDh4ANNV1uP4rjGjjakloPnQ&usqp=CAU"    alt="" /> */}
    //     <Grid item xs={2}>
    //       <Grid>
    //         <Box sx={{ paddingTop: "12rem", paddingLeft: "14rem" }}>
    //           <Typography variant="h2" sx={{ fontSize: "3rem" }}>
    //             Get in Touch with <br /> TCP International 👋
    //           </Typography>

    //           <Typography
    //             variant="body1"
    //             sx={{ marginTop: "1rem", maxWidth: "600px" }}
    //           >
    //             Feel free to connect with us for any of your needs regarding our{" "}
    //             <br />
    //             services. Our support team is ready to solve any of your issues.{" "}
    //             <br />
    //             Just push a text to us and we will get back to you immediately.
    //           </Typography>
    //         </Box>
    //       </Grid>
    //     </Grid>
    //     <Grid>
    //       <Box>
    //         <Typography>Drop Us a Message</Typography>
    //       </Box>
    //     </Grid>

    //     <Typography
    //       variant="body1"
    //       sx={{ marginLeft: "14rem", marginTop: "1rem", fontSize: "1.3rem" }}
    //     >
    //       <LocationOnIcon sx={{ marginTop: "2" }} /> Bhubaneswar, Odisha 751024
    //       <br />
    //       <MailIcon sx={{ paddingTop: "2" }} />
    //       info@TCP.com
    //       <br />
    //       <CallIcon sx={{ paddingTop: "2" }} /> +91 7008166042
    //       <br />
    //     </Typography>
    //   </>
    // </div>
    <div>
<Typography variant="h2">
  ddzfgdfgxfgbxfgb
</Typography>
    </div>
  );
};

export default Website;
