import { createTheme } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Teams from "./Teams";
import Login from "./Login";
import OurGrowth from "./OurGrowth";
import OurVision from "./OurVision";
import LinkedIN from "./LinkedIN";
import Website from "./Website";
import SignIn from "./SignIn";
import First from "./First";
import WebDevelopment from "./WebDevelopment";
import AppDevelopment from "./AppDevelopment";
import Architect from "./Architect";

function AppLayout() {
  const location = useLocation();
  const hideHeaderOnRoutes = ["/", "/SignIn", "/Login"];
  const hideFoter = ["/", "/SignIn", "/Login"];
  const notify = () => toast("Wow so easy!");

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      {/* //? Removing  Header And Footer in Pages */}

      {!hideHeaderOnRoutes.includes(location.pathname) && <Header />}
      {!hideFoter.includes(location.pathname) && <Footer />}

      {/* <div>
        <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
      {/* </div> */}
      {/* //? Routing */}
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/OurGrowth" element={<OurGrowth />} />
        <Route path="/OurVision" element={<OurVision />} />
        <Route path="/LinkedIn" element={<LinkedIN />} />
        <Route path="/ Website" element={<Website />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/AppDevelopment" element={<AppDevelopment />} />
        <Route path="/Architect" element={<Architect />} />
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

// 🧠 Core Front-End Skills
// HTML5: Semantic tags, forms, accessibility

// CSS3: Flexbox, Grid, Media Queries, animations, SCSS/SASS

// JavaScript (ES6+):

// Let/const, arrow functions, template literals

// Array methods (map, filter, reduce)

// Destructuring, spread/rest, promises, async/await

// DOM manipulation, event handling

// ⚛️ React.js Fundamentals
// JSX syntax

// Functional components

// Props and state

// Event handling

// Conditional rendering

// List rendering and keys

// 🔁 React Advanced Concepts
// React Hooks:

// useState, useEffect, useRef, useContext, useReducer, useMemo, useCallback

// Context API for state management

// Custom Hooks

// Component lifecycle (in functional components with hooks)

// React Router (v6+): Navigation, nested routes, params

// 📦 State Management
// Local state vs global state

// Redux Toolkit or alternatives like Zustand, Jotai, or Recoil

// Redux middleware: Thunk, Saga (basic understanding)

// 🌐 API Handling
// Fetching data using fetch or axios

// Handling loading and error states

// Integrating with REST APIs or GraphQL

// CRUD operations

// 🧪 Testing
// Unit testing with Jest

// Component testing with React Testing Library

// End-to-end testing with tools like Cypress (optional but nice to know)

// 🛠️ Development Tools
// Code versioning with Git and GitHub

// NPM / Yarn for dependency management

// Webpack, Vite, or Create React App (CRA) basics

// Browser DevTools debugging

// Linting & formatting: ESLint, Prettier

// 🧰 UI Libraries & Frameworks (Optional but useful)
// Tailwind CSS, Bootstrap, Material-UI (MUI), or Chakra UI

// 🧑‍💻 Other Good Practices
// Responsive and mobile-first design

// Accessibility (ARIA roles, screen reader support)

// Code splitting and lazy loading

// Performance optimization (memoization, debouncing, etc.)

// SEO basics for SPAs

// Deploying apps (e.g., Vercel, Netlify, GitHub Pages)
