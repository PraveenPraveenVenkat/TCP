import {
  Button,
  Typography,
  Grid,
  Box,
  ThemeProvider,
  Divider,
  Container,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
//   import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { useState } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
//   import { useState } from 'react';
import { keyframes } from "@emotion/react";
import { services } from "./Data.js";
import { steps } from "./Data.js";

const WebDevelopment = () => {
  const handleClick = (section) => {
    setOpenSection((prev) => (prev === section ? null : section)); // toggle
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // Mobile
        sm: 576, // Large mobile/Small tablet
        md: 768, // Tablet
        lg: 1024, // Laptop
        xl: 1280, // Desktop
        xxl: 1536, // Large Desktop
      },
    },
    palette: {
      primary: {
        main: "#172146",
      },
      secondary: {
        main: "#77feb8",
      },
    },
  });
  const scaling = keyframes`
  0% { transform: translate(0%); }
  100% { transform: translate(100%); }
`;

  const ServiceBox = styled(Box)(({ theme, bgColor }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #ccc",
    padding: "1rem",
    height: "19rem",
    width: "16rem",
    borderRadius: "8px",
    gap: "1rem",
    textAlign: "center",
    backgroundColor: bgColor || "transparent",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    },
    [theme.breakpoints.down("md")]: {
      height: "16rem",
      padding: "0.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "19rem",
    },
  }));

  const ServiceImage = styled("img")({
    maxWidth: "100%",
    width: "100%",
    height: "8rem",
    marginTop: "0.5rem",
    objectFit: "cover",
  });

  const [openSection, setOpenSection] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="2xl" disableGutters sx={{ overflow: "hidden" }}>
        {/* Services Section */}
        <Box sx={{ py: { xs: 6, md: 12 } }}>
          <Container>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 2,
              }}
            >
              Our Services
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                mb: 6,
              }}
            >
              Comprehensive Website Services to Ignite Your Online Success.
              Empower Your Business with Powerful Online Services from our
              Website Designs.
            </Typography>

            <Grid container spacing={4} sx={{ justifyContent: "center" }}>
              {services.map((service, index) => (
                <Grid item key={index} xs={12} sm={6} md={6} lg={4}>
                  <ServiceBox bgColor={service.bgColor || "transparent"}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: "100%",
                      }}
                    >
                      <ArrowOutwardIcon
                        sx={{ color: service.bgColor ? "black" : "inherit" }}
                      />
                    </Box>
                    <ServiceImage
                      src={service.icon}
                      sx={{ width: "4rem", height: "4rem", mr: 15 }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        color: service.bgColor ? "black" : "inherit",
                        fontWeight: "bold",
                        "&:hover": { color: "#77feb8" },
                      }}
                    >
                      {service.title}
                    </Typography>
                    <ServiceImage src={service.image} alt={service.alt} />
                  </ServiceBox>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Scrolling Banner */}
        <Box
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            // width:{l:'100%', xl:'100%',xxl:'100%'},
            width: "100%",
            py: { xs: 2, md: 3 },
            backgroundColor: "#77feb8",
            color: "black",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "inline-block",
              padding: "10px",
              animation: `${scroll} 20s linear infinite`,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            <AutoAwesomeIcon sx={{ mx: 2 }} />
            Creative People
            <AutoAwesomeIcon sx={{ mx: 2 }} />
            Good Reviews
            <AutoAwesomeIcon sx={{ mx: 2 }} />
            Awesome Design
            <AutoAwesomeIcon sx={{ mx: 2 }} />
            Fast Delivery
          </Typography>
        </Box>

        {/* Digital Marketing Section */}
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2.2rem",
                      md: "2.5rem",
                      lg: "3rem",
                    },
                    mb: 3,
                  }}
                >
                  One-stop digital marketing <br /> services 🎯
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ mb: 4, pt: "2rem", fontSize: { lg: "1.2rem" } }}
                >
                  Get benefits with the best Digital Marketing Service with
                  unique
                  <br />
                  strategies. Improve the search visibility of your website with{" "}
                  <br />
                  the proper techniques of our digital marketing experts. Boost
                  sales <br />
                  and optimize your page for more user engagement.
                </Typography>

                <Grid container spacing={2} item={3}>
                  {[
                    "CONVERSION",
                    "OPTIMIZATION",
                    "ECOMMERCE",
                    "ANALYTIC",
                    "LINK BUILDING",
                    "STRATEGY",
                  ].map((text) => (
                    <Grid
                      item
                      xs={8}
                      sm={8}
                      md={8}
                      lg={6}
                      key={text}
                      sx={{ pt: "2rem" }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "white",
                          color: "black",
                          height: { xs: "5rem", md: "5rem" },
                          width: "10rem",
                          borderRadius: "50px",

                          fontSize: {
                            xs: "0.7rem",
                            sm: "0.8rem",
                            md: "0.9rem",
                          },
                          whiteSpace: "nowrap",
                          "&:hover": {
                            backgroundColor: "#77feb8",
                          },
                          fontWeight: "bold",
                        }}
                      >
                        {text}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ gap: "6rem" }}
          >
            {steps.map((step, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                key={index}
                sx={{
                  backgroundColor: "#77feb8",
                  height: "17rem",
                  width: "18rem",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "black", pt: "2rem", pl: "6rem" }}
                >
                  {step.step}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    my: 1,
                    color: "black",
                    pt: "0.5rem",
                    pl: "4rem",
                  }}
                >
                  {step.title}
                </Typography>
                <Divider
                  sx={{
                    backgroundColor:
                      step.color === "white" ? "#ffffffaa" : "#00000088",
                    width: "0%",
                    mb: 2,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    lineHeight: 1.6,
                    color: "black",
                    pt: "2rem",
                    alignItems: "center",
                  }}
                >
                  {step.desc}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Container>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                mb: 2,
              }}
            >
              Expertise
            </Typography>

            <Typography variant="body1" sx={{ mb: 4 }}>
              Here is a list of our expertisation in developing websites for any
              platform. <br />
              We follow a unique strategy to cover all sections of our client’s{" "}
              <br />
              requirements. Our expertise generally includes;
            </Typography>

            {/* Flex Container for FAQs and Image */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                alignItems: "flex-start",
              }}
            >
              {/* Left Side: FAQ List */}
              <Box sx={{ flex: 1 }}>
                {[
                  {
                    id: 1,
                    question: "Responsive Design:",
                    answer:
                      "A website is nothing without a responsive design. A user-responsive website always attracts more possible users towards the website. Our expert developers give a magical hand to design a responsive website that users love to use again and again.",
                  },
                  {
                    id: 2,
                    question: "SEO-Friendly Design:",
                    answer:
                      "A website requires responsive design as well, and it must align the SEO-friendly requirements. Without SEO integration the website may face difficulties in its presence in search engines. Our professionals develop the website by keeping beat-by-beat features of SEO techniques to make the website SEO-friendly",
                  },
                  {
                    id: 3,
                    question: "E-commerce Design:",
                    answer:
                      "There are a lot of websites available in this world. These websites are separated by category, language, and other ongoing features. An E-commerce website is now a popular part of the business. People prefer to run their websites through a e-commerce website",
                  },
                ].map((item) => (
                  <Box key={item.id} sx={{ mb: 2 }}>
                    <Typography
                      onClick={() => handleClick(item.id)}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontFamily: "Arial",
                        fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.25rem" },
                        fontWeight: "medium",
                        py: 1.5,
                      }}
                    >
                      {item.question}
                      <ArrowForwardIcon
                        sx={{
                          color: "#77feb8",
                          transform:
                            openSection === item.id ? "rotate(90deg)" : "none",
                          transition: "transform 0.3s",
                          ml: "1rem",
                        }}
                      />
                    </Typography>

                    {openSection === item.id && (
                      <Typography
                        variant="body1"
                        sx={{ py: 2, pl: 2, borderLeft: "3px solid #77feb8" }}
                      >
                        {item.answer}
                      </Typography>
                    )}

                    <Divider
                      sx={{ width: "90%", mt: 1.5, backgroundColor: "white" }}
                    />
                  </Box>
                ))}
              </Box>

              {/* Right Side: Image */}
              {/* <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img
          src="https://vdigtech.com/wp-content/uploads/2024/03/faq_services-details-style02-PQBW3XN-887x1024.jpg"
          alt="Expertise Visual"
          style={{ width: '100%', maxWidth: '30rem', height: 'auto', marginTop:'-12rem',marginLeft:'18rem', }}
        />
      </Box>
    </Box>
  </Container>
</Box> */}
              <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <Box
                  component="img"
                  src="https://vdigtech.com/wp-content/uploads/2024/03/faq_services-details-style02-PQBW3XN-887x1024.jpg"
                  alt="Expertise Visual"
                  sx={{
                    width: "100%",
                    maxWidth: "30rem",
                    marginTop: "-12rem",
                    marginLeft: "18rem",
                    height: { xs: "15rem", md: "23rem", lg: "34rem" },
                    wigth: { xs: "20rem", md: "23rem", lg: "34rem" },
                    xs: { paddingLeft: "22rem" },
                  }}
                />
              </Box>
            </Box>
          </Container>
        </Box>

        {/* E-commerce FAQ Section */}
        {/* <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Container>
            <Typography variant='h3' sx={{ 
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
              mb: 2,
            }}>
              Expertise
            </Typography>

            <Typography variant="body1" sx={{ mb: 4 }}>
            Here is a list of our expertisation in developing websites for any platform. <br/>We follow a unique strategy to cover all sections of our client’s <br/>requirements. Our expertise generally includes;
            </Typography>

            {/* FAQ Items 
            {[
              {
                id: 1,
                question: 'Responsive Design:',
                answer: 'A website is nothing without a responsive design. A user-responsive website always attracts more possible users towards the website. Our expert developers give a magical hand to design a responsive website that users love to use again and again.' 
              },
              {
                id: 2,
                question: 'SEO-Friendly Design:',
                answer: 'A website requires responsive design as well, and it must align the SEO-friendly requirements. Without SEO integration the website may face difficulties in its presence in search engines. Our professionals develop the website by keeping beat-by-beat features of SEO techniques to make the website SEO-friendly'
              },
              {
                id: 3,
                question: 'E-commerce Design:',
                answer: 'There are a lot of websites available in this world. These websites are separated by category, language, and other ongoing features. An E-commerce website is now a popular part of the business. People prefer to run their websites through a e-commerce website'
              }
            ].map((item) => (
              <Box key={item.id} sx={{ mb: 2 }}>
                <Typography 
                  onClick={() => handleClick(item.id)} 
                  sx={{ 
                    cursor: 'pointer', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'Arial', 
                    fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.25rem' },
                    fontWeight: 'medium',
                    py: 1.5
                  }}
                >
                  {item.question}
                  <ArrowForwardIcon sx={{ color: '#77feb8', transform: openSection === item.id ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s',ml:'19rem' }} />
                </Typography>
                
                {openSection === item.id && (
                  <Typography variant="body1" sx={{ py: 2, pl: 2, borderLeft: '3px solid #77feb8' }}>
                    {item.answer}
                  </Typography>
                )}
                
                <Divider sx={{ width: '90%', mt: 1.5,backgroundColor:'white',}} />
              </Box>
            ))}
             <img src='https://vdigtech.com/wp-content/uploads/2024/03/faq_services-details-style02-PQBW3XN-887x1024.jpg' style={{width:'30rem'}}/>
          </Container>
         
        </Box> */}
      </Container>
    </ThemeProvider>
  );
};

export default WebDevelopment;
