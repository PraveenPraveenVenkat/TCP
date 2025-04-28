import { createTheme, } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import Home from './Home';
import Project from './Project';
import Teams from './Teams';
import Login from './Login';
import OurGrowth from './OurGrowth';
import OurVision from './OurVision';
import LinkedIN from './LinkedIN';
import Website from './Website';
import SignIn from './SignIn';
import First from './First';




function AppLayout() {
  const location = useLocation();
  const hideHeaderOnRoutes = ['/','/SignIn','/Login'];
  const hideFoter = ['/','/SignIn','/Login'];
  const notify = () => toast("Wow so easy!");

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
    
      {/* ✅ Conditionally show Header */}
      {!hideHeaderOnRoutes.includes(location.pathname) && <Header />}
      {!hideFoter.includes(location.pathname) && <Footer />}
      
      {/* <div>
        <button onClick={notify}>Notify!</button> */}
        <ToastContainer />
      {/* </div> */}
      <Routes>
        <Route path="/" element={<First/>} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/OurGrowth" element={<OurGrowth />} />
        <Route path="/OurVision" element={<OurVision />} />
        <Route path="/LinkedIn" element={<LinkedIN/>} />
        <Route path="/ Website" element={< Website/>} />
        <Route path="/SignIn" element={< SignIn/>} />
        <Route path="/Login" element={< Login/>} />

      </Routes>

      
      <SideBar />
     
     
    </>
  );
}

function App() {

  return (
      <Router>
        <AppLayout />
      </Router>
  );
}

export default App;

// https://clinicalvisuals.com/
// https://vdigtech.com/app-development/
// https://uicolors.app/
//https://images.pexels.com/photos/941195/pexels-photo-941195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1







             {/* <Grid container spacing={3} columnGap={2} sx={{paddingLeft:"20rem",gap:14,paddingTop:"12rem",}}> */}
                    {/* //?Container 1 */}
              {/* <Grid item xs={3}>
                <Box sx={{backgroundColor:"#172146",height:'15rem',width:'17rem',}}>
                  <Typography variant='p'>
                           Step 01
                  </Typography>
                  <Typography variant='h5'>
                        Web Inspection
                  </Typography>
                  <Divider sx={{color:'white',width:'10rem',}}/>
                  <Typography variant='p'>
                  Proper inspection of a website with <br/>the best tools for the next stage.
                  </Typography>
                </Box>

            </Grid> */}
                  {/* //?Container 2 */}
            {/* <Grid item xs={3}>
                <Box sx={{backgroundColor:"#77feb8",height:'15rem',width:'17rem', color:'black'}}>
                  <Typography variant='p'>
                  Step 02
                  </Typography>
                  <Typography variant='h5'>
                  Deep Optimization
                  </Typography>
                  <Divider sx={{color:'white',width:'10rem',}}/>
                  <Typography variant='p'>
                 
Optimizing the website with special strategies by covering all its needs
                  </Typography>
                </Box>

            </Grid> */}


              {/* //?Container 3 */}
            {/* <Grid item xs={3}>
                <Box sx={{backgroundColor:"#172146",height:'15rem',width:'17rem',}}>
                  <Typography variant='p'>
                  Step 03
                  </Typography>
                  <Typography variant='h5'>
                  Analyze Growth
                  </Typography>
                  <Divider sx={{color:'white',width:'10rem',}}/>
                  <Typography variant='p'>
                  Expert analysis of website data for deploying a strategy for further growth.
                  </Typography>
                </Box>

            </Grid>
            
            </Grid> */}
