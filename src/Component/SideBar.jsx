import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    // sx={{ backgroundColor:'#77feb8' }}
    <Box
      sx={{ width: 250, }}             
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List  >
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
                   <ListItemButton component={Link} to={subItem.path}>
                   <ListItemText primary={subItem.title} />
                     </ListItemButton>

                  </ListItem>
                ))}
              </List>
            )}
          </div>
        ))}
      </List>
      <Divider />
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



