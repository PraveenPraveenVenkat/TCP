import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import Home from './Home';
import Project from './Project';
import Teams from './Teams';
import Login from './Login';
import OurGrowth from './OurGrowth';
import OurVision from './OurVision';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea',
    },
    secondary: {
      main: '#e1bee7',
    },
  },
})

// Sub-component that handles layout with conditional rendering
function AppLayout() {
  const location = useLocation();
  const hideHeaderOnRoutes = ['/Login'];

  return (
    <>
      {/* ✅ Conditionally show Header */}
      {!hideHeaderOnRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/OurGrowth" element={<OurGrowth />} />
        <Route path="/OurVision" element={<OurVision />} />
      </Routes>

      {/* ✅ Always show sidebar & footer (optional to hide) */}
      <SideBar />
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppLayout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
// const theme = createTheme({


;

// function App() {

//   return (
//     <>
//       <Router>
//       <Header />
    

//       <Routes >
//       if(Route=== path="/Login"){
//         <Header not to Display></Header>
//       }
//         <Route path="/" element={<Home />} />
//         <Route path="/Project" element={<Project/>} />
//         <Route path="/Teams" element={<Teams/>} />
//         <Route path="/Login" element={<Login/>} />
//         <Route path="/OurGrowth" element={<OurGrowth />} />
//         <Route path="/ OurVision" element={< OurVision/>} />
       
        
//       </Routes>

//       {/* <FeaturePost /> */}
//       <SideBar />
//     </Router>
//     <Footer/>
    
//     </>
//   );

// }

// export default App;



 // const [loading,setLoading]=useState("true");


  
  //  fetch=("https://jsonplaceholder.typicode.com/posts");
  //  .then((response)=>{
  //   return response.data();
  //  })
  //  .then((data)=>{
    
  //  })
  //  console.log(data);

// https://vdigtech.com/app-development/

