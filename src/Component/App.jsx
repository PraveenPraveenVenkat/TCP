import { createTheme } from '@mui/material/styles';
import Header from './Header'
// import FeaturePost from "./FeaturePost";
import SideBar from "./SideBar";
import Home from "./Home";
import Project from './Project';
import LoginForm from './LoginForm';
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
        <Route path="/LoginForm" element={<LoginForm />} />
      </Routes>

      {/* <FeaturePost /> */}
      <SideBar />
    </Router>
    
    </>
  );

}

export default App;