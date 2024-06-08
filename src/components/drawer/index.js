import React from "react";
import Drawer from '@mui/material/Drawer';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ListItemText } from "@mui/material";
import MenuIcon from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240; // Ensure this matches the width set in the App component


const CustomDrawer = props => {
  const navigate = useNavigate();
  const itemsList = [
    {
      text: "Home",
      icon: <MenuIcon />,
      onClick: () => navigate("/")
    },
    {
      text: "About",
      icon: <IconButton />,
      onClick: () => navigate("/about")
    },
    {
      text: "Contact",
      icon: <IconButton />,
      onClick: () => navigate("/contact")
    }
  ];

  return (
    <Drawer variant="permanent" style={{width: "180px"}}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
