import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Experts } from "./Data.js";

const Teams = () => {
  // const Item = styled (theme)
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <>
      <Typography variant="h3" align="center" gutterBottom>
        Created For & Delivered By Experts
      </Typography>
      <Box sx={{ flexGrow: 1, mt: "6rem" }}>
        <Grid container spacing={3} justifyContent="center">
          {Experts.map((expert, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ height: "32rem" }}
            >
              <Paper
                elevation={3}
                sx={{ p: 2, textAlign: "center", height: "30rem" }}
              >
                <img
                  src={expert.image}
                  alt={expert.name}
                  style={{
                    width: "100%",
                    height: "20rem",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {expert.name}
                </Typography>
                <Typography variant="body2">{expert.role}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Teams;
