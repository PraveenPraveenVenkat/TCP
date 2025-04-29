
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
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EmailIcon from '@mui/icons-material/Email';
import FlakyIcon from '@mui/icons-material/Flaky';
import Groups2Icon from '@mui/icons-material/Groups2';
import AddLocationAltSharpIcon from '@mui/icons-material/AddLocationAltSharp';
import { Data } from './Data';

function SideBar({ children }) {
  const [state, setState] = useState({ left: false });
  const [openIndex, setOpenIndex] = useState(null); // for submenu toggle

  // Map icon names from the JSON to actual icon components
  const iconMap = {
    Home: <HomeIcon />,
    PermContactCalendar: <PermContactCalendarIcon />,
    SupportAgent: <SupportAgentIcon />,
    Email: <EmailIcon />,
    Flaky: <FlakyIcon />,
    Groups2: <Groups2Icon />,
    AddLocationAltSharp: <AddLocationAltSharpIcon />,
  };

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
    <Box sx={{ width: 250 }} role="presentation" onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {Data.map((item, index) => (
          <div key={index}>
            <ListItemButton onClick={() => handleToggle(index)}>
              <ListItemIcon>{iconMap[item.iconName]}</ListItemIcon>
              <ListItemText primary={item.title} />
              {item.subMenu && (
                <ListItemIcon>
                  <ArrowDropDownIcon />
                </ListItemIcon>
              )}
            </ListItemButton>

            {/* Submenu */}
            {openIndex === index && item.subMenu && (
              <List component="div" disablePadding sx={{ pl: 4 }}>
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
      <div onClick={toggleDrawer('left', true)}>{children}</div>
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </div>
  );
}

export default SideBar;
