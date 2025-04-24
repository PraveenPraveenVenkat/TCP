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



function AppLayout() {
  const location = useLocation();
  const hideHeaderOnRoutes = ['/','/SignIn'];
  const hideFoter = ['/','/SignIn'];
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
        <Route path="/" element={<Login/>} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/OurGrowth" element={<OurGrowth />} />
        <Route path="/OurVision" element={<OurVision />} />
        <Route path="/LinkedIn" element={<LinkedIN/>} />
        <Route path="/ Website" element={< Website/>} />
        <Route path="/SignIn" element={< SignIn/>} />

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


// https://vdigtech.com/app-development/
// https://uicolors.app/
//https://images.pexels.com/photos/941195/pexels-photo-941195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1


