import { createTheme } from '@mui/material/styles';
import Header from './Header'
// import FeaturePost from "./FeaturePost";
import SideBar from "./SideBar";
import Home from "./Home";
import Project from './Project';
import Teams from './Teams';
import Login from './Login';
import OurGrowth from './OurGrowth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





const theme = createTheme({

  palette: {
    primary: {
      main: '#6200ea',
    },
    secondary: {
      main: '#e1bee7',
    },
  },
});

function App() {


  return (
    <>
      <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project/>} />
        <Route path="/Teams" element={<Teams/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/OurGrowth" element={<OurGrowth />} />
        
      </Routes>

      {/* <FeaturePost /> */}
      <SideBar />
    </Router>
    
    </>
  );

}

export default App;

