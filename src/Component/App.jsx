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
import  FAQ from './FAQ';
import DropAMail from "./DropAMail";

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
        {/* items={items} in Project props */}
        <Route path="/Project" element={<Project />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/OurGrowth" element={<OurGrowth />} />
        <Route path="/OurVision" element={<OurVision />} />
        <Route path="/LinkedIn" element={<LinkedIN />} />
        <Route path="/Website" element={<Website />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/AppDevelopment" element={<AppDevelopment />} />
        <Route path="/Architect" element={<Architect />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/DropAMail" element={<DropAMail/>} />
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


// import React, { useState } from 'react';

// // Creating an array of 100 items: ['Item 1', 'Item 2', ..., 'Item 100']
// const items = Array.from({ length: 100 }, (_, i) => ` ${i + 1}`);

// // Defining the functional component named PaginationExample
// const PaginationExample = () => {

//   // useState hook to track the current page number. Initial value is 1.
//   const [currentPage, setCurrentPage] = useState(1);

//   // Number of items to display per page
//   const itemsPerPage = 10;

//   // Total number of pages = total items / items per page, rounded up
//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   // Calculate the starting index of the current page
//   const start = (currentPage - 1) * itemsPerPage;

//   // Get the current page items by slicing the main items array
//   const currentItems = items.slice(start, start + itemsPerPage);

//   // Function to change the page number when a page button is clicked
//   const goToPage = (page) => {
//     setCurrentPage(page);
//   };

//   // Return JSX to render UI
//   return (
//     <div>
//       {/* Title */}
//       <h3>Paginated List</h3>

//       {/* List of items for the current page */}
//       <ul>
//         {currentItems.map((item) => (
//           <li key={item}>{item}</li>  // Render each item as an <li> element with a unique key
//         ))}
//       </ul>

//       {/* Pagination controls */}
//       <div>
//         {/* Previous button: disabled on the first page */}
//         <button
//           disabled={currentPage === 1}
//           onClick={() => goToPage(currentPage - 1)}
//         >
//           Prev
//         </button>

//         {/* Buttons for each page */}
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i + 1}  // Unique key for React list rendering
//             onClick={() => goToPage(i + 1)}  // Go to that page on click
//             style={{ fontWeight: currentPage === i + 1 ? 'bold' : 'normal' }}  // Highlight current page
//           >
//             {i + 1}
//           </button>
//         ))}

//         {/* Next button: disabled on the last page */}
//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => goToPage(currentPage + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// // Export the component so it can be used in other files
// export default PaginationExample;












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
