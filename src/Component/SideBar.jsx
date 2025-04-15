import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Data from './data'; 

function SideBar({ children }) {
  const [state, setState] = useState({ left: false });
  const [openIndex, setOpenIndex] = useState(null); // for submenu toggle

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


 
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Data.map((item, index) => (
          <div key={index}>
              <ListItemButton onClick={() => handleToggle(index)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              
                <ListItemIcon>{item.icon1}</ListItemIcon>
              </ListItemButton>
            
            {/* Show submenu if open */}
            {openIndex === index && item.subMenu && (
              <List component="div" disablePadding sx={{ pl: 4}}>
                {item.subMenu.map((subItem, subIndex) => (
                  <ListItem key={subIndex} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={subItem.title}/>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
          </div>
        ))}
      </List>


      <Divider />

{/* 
      <LIST>
        {Data.map((item,index)=>(
          <ListItem>
            <ListItemButton>
              <ListItemIcon>{item.title}</ListItemIcon>
            </ListItemButton>

          </ListItem>

        ))}
      </LIST> */}

      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    
    
    <div>
      <div onClick={toggleDrawer("left", true)}>{children}</div>
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer("left", false)}>
        {list("left")}
      </Drawer>
    </div>
  );
}

export default SideBar;

// import * as React from 'react';
// import { 
//   Box, 
//   Drawer, 
//   Button, 
//   List, 
//   Divider, 
//   ListItem, 
//   ListItemButton, 
//   ListItemIcon, 
//   ListItemText,
//   Toolbar,
//   Typography,
//   IconButton,
//   Badge
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Data from './data';

// // Sidebar component
// function SideBar({ children }) {
//   const [state, setState] = React.useState({
//     left: false,
//   });
 

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >

//       {Data.map((item, index) => (
//         <div key={index}>
//           {/* <label>{item.title}</label> */}
//           <ol style={ {listStyleType:'none'}}>
//             <li >{item.icon}{item.title}</li>
//             {/* Check if submenu exists */}
//             {item.subMenu && (
//               <ul>
//                 {item.subMenu.map((subItem, subIndex) => (
//                   <li key={subIndex}>{subItem.title}</li>
//                 ))}
//               </ul>
//             )}
//           </ol>
//         </div>
//       ))}

      
       
//      <Divider></Divider>
      
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <React.Fragment key={"left"}>
//         <div onClick={toggleDrawer("left", true)}>
//           {children}
//         </div>
//         <Drawer
//           anchor={"left"}
//           open={state["left"]}
//           onClose={toggleDrawer("left", false)}
//         >
//           {list("left")}
//         </Drawer>
//       </React.Fragment>
//     </div>
//   );
// }

// // Main App Component
// export default SideBar