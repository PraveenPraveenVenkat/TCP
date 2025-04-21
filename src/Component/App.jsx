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
import LinkedIN from './LinkedIN';



// Sub-component that handles layout with conditional rendering
function AppLayout() {
  const location = useLocation();
  const hideHeaderOnRoutes = ['/'];

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
      {/* ✅ Conditionally show Header */}
      {!hideHeaderOnRoutes.includes(location.pathname) && <Header />}
     
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/OurGrowth" element={<OurGrowth />} />
        <Route path="/OurVision" element={<OurVision />} />
        <Route path="/LinkedIn" element={<LinkedIN/>} />

      </Routes>

      {/* ✅ Always show sidebar & footer (optional to hide) */}
      <SideBar />
      <Footer />
     
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


