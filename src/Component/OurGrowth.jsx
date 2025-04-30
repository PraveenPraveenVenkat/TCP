import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const features = [
  {
    title: "Continuously Growing Tech Stack",
    description:
      "Stay ahead with access to the latest in web, mobile, and cloud technologies.",
  },
  {
    title: "Accelerate Development Cycles",
    description:
      "Ready-made modules and APIs to speed up your product launches.",
  },
  {
    title: "Easily Deploy to Clients",
    description:
      "Share functional prototypes, MVPs, or production-ready apps instantly.",
  },
  {
    title: "Enterprise-Ready Solutions",
    description:
      "Use our systems in production environments with robust security and scaling.",
  },
  {
    title: "Cost-Efficient & Billable",
    description:
      "Monetize development hours effectively with built-in tracking and deployment features.",
  },
  {
    title: "Boost Your Online Presence",
    description:
      "Integrated SEO tools and analytics help you improve client results and reviews.",
  },
];

const OurGrowth = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://images.pexels.com/photos/7793726/pexels-photo-7793726.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "100vh",
        py: 8,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" align="center" sx={{ color: "white", mb: 4 }}>
        What We Offer You
      </Typography>

      <Box
        sx={{
          backgroundColor: "#77feb8cc",
          borderRadius: 3,
          p: 4,
          width: "90%",
          maxWidth: "1200px",
        }}
      >
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ p: 3, borderRadius: 2, height: "100%" }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 1, color: "black" }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, color: "black" }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurGrowth;

// import React from 'react';
// import { Grid, Box, Typography } from '@mui/material';

// const OurGrowth = () => {
//   return (
//     <Box
//       sx={{
//         backgroundImage: `url('https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=600')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         width: '100%',
//         height: '100vh', // You can adjust height as needed
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >    <Typography variant="h4" align="center" sx={{color:'white',marginTop:'-40rem',justifyContent:'center'}}>
//     What We Offer You
//   </Typography>
//       <Box sx={{ backgroundColor: '#77feb8aa', padding: 4, borderRadius: 2,height:'30rem',width:"70rem",justifyContent:'center' }}>
//         <Typography variant="h4" align="center">
//         Cost-Efficient & Billable
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default OurGrowth;

// Continuously Growing Tech Stack
// Stay ahead with access to the latest in web, mobile, and cloud technologies.

// Accelerate Development Cycles
// Ready-made modules and APIs to speed up your product launches.

// Easily Deploy to Clients
// Share functional prototypes, MVPs, or production-ready apps instantly.

// Enterprise-Ready Solutions
// Use our systems in production environments with robust security and scaling.

// Cost-Efficient & Billable
// Monetize development hours effectively with built-in tracking and deployment features.

// Boost Your Online Presence
// Integrated SEO tools and analytics help you improve client results and reviews.
