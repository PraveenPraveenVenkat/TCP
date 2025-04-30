import {
  Button,
  Typography,
  Grid,
  Box,
  ThemeProvider,
  Divider,
  Container,
  Stack,
  useMediaQuery,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { useState } from "react";
import { keyframes } from "@emotion/react";
import { services } from "./Data.js";
import { steps } from "./Data.js";

// Create a responsive theme with custom breakpoints
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

// Define keyframes for scrolling animation
const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

// Styled components for reusability
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
const StyledButton = styled(Button)(({ theme }) => ({
  border: "2px solid white",
  color: "white",
  height: "55px",
  width: "10rem",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#77feb8",
    color: "black",
    transform: "translateY(-3px)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "8rem",
    height: "45px",
    fontSize: "0.8rem",
  },
}));

const ServiceImage = styled("img")({
  maxWidth: "100%",
  width: "100%",
  height: "8rem",
  marginTop: "0.5rem",
  objectFit: "cover",
});

const Home = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleClick = (section) => {
    setOpenSection((prev) => (prev === section ? null : section)); // toggle
  };

  // Use theme breakpoints for responsive logic
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="2xl" disableGutters sx={{ overflow: "hidden" }}>
        {/* // Hero Section */}
        <Box sx={{ color: "white", pt: { xs: 4, sm: 6, md: 8, lg: 12 } }}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: {
                      xs: "2.5rem",
                      sm: "3.5rem",
                      md: "4.5rem",
                      lg: "5.5rem",
                    },
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  Best <br /> Place for Creative <br /> Digital Solution
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                    mb: 4,
                  }}
                >
                  Unlock the Power of Web Presence with our <br />
                  Professional Website Designing Service! Elevate <br />
                  Your Online Presence with Stunning Website <br />
                  Designs.
                </Typography>

                <Stack
                  direction={{ xs: "row", sm: "row" }}
                  spacing={{ xs: 2, sm: 4 }}
                  sx={{ mb: 6 }}
                >
                  <StyledButton>
                    GET STARTED <TrendingFlatIcon sx={{ ml: 1 }} />
                  </StyledButton>
                  <StyledButton>
                    ABOUT US <TrendingFlatIcon sx={{ ml: 1 }} />
                  </StyledButton>
                </Stack>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Placeholder for hero image */}
                <Box
                  sx={{
                    bgcolor: "#333",
                    width: "100%",
                    height: "400px",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#777",
                  }}
                >
                  <img
                    style={{ width: "7rem", height: "7rem" }}
                    src="https://vdigtech.com/wp-content/uploads/2024/03/banner_home02-DD9Q8T2.jpg"
                    alt="Banner"
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box>
          <Container>
            <Grid
              item={2}
              sx={{
                backgroundColor: "#77feb8",
                height: "30rem",
                width: "40rem",
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: "black", marginLeft: "30rem", pt: 4 }}
              >
                250{" "}
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "black", marginLeft: "30rem", pt: 1 }}
              >
                PROJECT{" "}
              </Typography>
              <Divider
                sx={{
                  color: "black",
                  mb: 2,
                  fontWeight: "bold",
                  justifyContent: "end",
                }}
              />
              <Typography
                variant="h2"
                sx={{ color: "black", marginLeft: "30rem", pt: 4 }}
              >
                125{" "}
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "black", marginLeft: "30rem", pt: 1 }}
              >
                CLIENTS{" "}
              </Typography>
              <Divider
                sx={{ color: "black", fontWeight: "bold", width: "-40rem" }}
              />
              <Typography
                variant="h2"
                sx={{ color: "black", marginLeft: "30rem", pt: 4 }}
              >
                25{" "}
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "black", marginLeft: "30rem", pt: 1 }}
              >
                EXPERTS{" "}
              </Typography>
              <Divider
                sx={{ color: "black", fontWeight: "bold", width: "-40rem" }}
              />

              {/* //? Left Side Image */}
              <Grid>
                <img
                  style={{
                    width: "26.6rem",
                    height: "27.6rem",
                    marginTop: "-27rem",
                    marginLeft: "1rem",
                  }}
                  src="https://vdigtech.com/wp-content/uploads/2024/03/person_home02-USU94UZ.png"
                />
              </Grid>
              {/* <Grid sx={{backgroundColor:'white',height:'12rem'}}>  

    </Grid> */}
            </Grid>
          </Container>
        </Box>

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

              {/* <Grid item xs={12} md={6}lg={4}sx={{ 
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {/* Placeholder for marketing image */}
              {/* <Box sx={{ 
                  bgcolor: '#f5f5f5', 
                  width: '100%', 
                  height: '400px',
                  borderRadius: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#777',
                }}>
                  Marketing Image Placeholder
                </Box>
              </Grid> */}
            </Grid>
          </Container>
        </Box>

        <box>
          <Container>
            <Grid container spacing={6} item={4}>
              {steps.map((step, index) => (
                <Grid
                  item
                  xs={4}
                  sm={6}
                  md={8}
                  lg={12}
                  key={index}
                  direction={{ xs: "row", sm: "row", lg: "" }}
                >
                  <Box
                    sx={{
                      backgroundColor: step.bgColor,
                      color: step.color,
                      borderRadius: "16px",
                      padding: 4,
                      minHeight: { xs: "auto", md: "18rem" },
                      boxShadow: 4,
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ opacity: 0.7, fontWeight: 600 }}
                    >
                      {step.step}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold", my: 1 }}>
                      {step.title}
                    </Typography>
                    <Divider
                      sx={{
                        backgroundColor:
                          step.color === "white" ? "#ffffffaa" : "#00000088",
                        width: "60%",
                        mb: 2,
                      }}
                    />
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      {step.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </box>

        {/* E-commerce FAQ Section */}
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Container>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                mb: 2,
              }}
            >
              E-commerce Integration
            </Typography>

            <Typography variant="body1" sx={{ mb: 4 }}>
              Specializing the website with unique E-commerce features
              integration to develop a user-centric web page.
            </Typography>

            {/* FAQ Items */}
            {[
              {
                id: 1,
                question:
                  "WHICH TYPE OF E-COMMERCE WEBSITES HAVE YOU DEVELOPED IN THE PAST?",
                answer:
                  "We are a leading company designing websites for various prospects. Our experts have capability of designing websites in any language as well as WordPress...",
              },
              {
                id: 2,
                question:
                  "HOW MUCH TIME DOES IT NEED FOR AN ONLINE STORE TO GO LIVE?",
                answer:
                  "It depends. Actually, developing an E-commerce website is not an easy thing...",
              },
              {
                id: 3,
                question:
                  "WHAT IF I FACE ANY ISSUES ON MY E-COMMERCE WEBSITE AFTER DELIVERY?",
                answer:
                  "No need to worry about it as you will not face any major issues on your website...",
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

                <Divider sx={{ width: "100%", mt: 1.5 }} />
              </Box>
            ))}
          </Container>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
