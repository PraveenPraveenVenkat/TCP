import { createTheme } from '@mui/material/styles';
import Header from './Header'
// import FeaturePost from "./FeaturePost";
import SideBar from "./SideBar";
import Home from "./Home";
import Project from './Project';
import Teams from './Teams';
import Login from './Login';
import OurGrowth from './OurGrowth';
import Footer from './Footer';
import OurVision from './OurVision';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';





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

  // const [loading,setLoading]=useState("true");


  
  //  fetch=("https://jsonplaceholder.typicode.com/posts");
  //  .then((response)=>{
  //   return response.data();
  //  })
  //  .then((data)=>{
    
  //  })
  //  console.log(data);




  return (
    <>
      <Router>
      <Header />
    

      <Routes >
      {/* if(Route=== path="/Login") */}
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project/>} />
        <Route path="/Teams" element={<Teams/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/OurGrowth" element={<OurGrowth />} />
        <Route path="/ OurVision" element={< OurVision/>} />
       
        
      </Routes>

      {/* <FeaturePost /> */}
      <SideBar />
    </Router>
    <Footer/>
    
    </>
  );

}

export default App;

// https://vdigtech.com/app-development/

