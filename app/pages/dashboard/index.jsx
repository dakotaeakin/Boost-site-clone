import { Box, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <Box
      boxShadow="0 0 5px black"
      height="fit-content"
      width="fit-content"
      m="30px 0 30px 0"
      borderRadius="5px"
      display="grid"
      gap="30px"
    >
      <Box
        boxShadow="0 0 5px black"
        height="fit-content"
        width="fit-content"
        m="30px 0 30px 0"
        borderRadius="5px"
        gridColumn="1"
      >
        <Box m="30px">
          <List>
            <ListItemButton href="/settings">Settings</ListItemButton>
            <ListItemButton href="">Usage</ListItemButton>
          </List>
        </Box>
      </Box>

      <Box
        boxShadow="0 0 5px black"
        height="fit-content"
        width="fit-content"
        m="30px 0 30px 0"
        borderRadius="5px"
        gridColumn="2"
      >
        <Box>Ad box</Box>
      </Box>
      <Box
        boxShadow="0 0 5px black"
        height="fit-content"
        width="fit-content"
        m="30px 0 30px 0"
        borderRadius="5px"
        gridColumn="3"
      >
        <Box>Ad box</Box>
      </Box>
      <Box
        boxShadow="0 0 5px black"
        height="fit-content"
        width="100%"
        m="30px 0 30px 0"
        borderRadius="5px"
        gridColumn="2 / span 2"
      >
        <Box>Ad box</Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

Dashboard.requireAuth = true; //Require user to be logged in to view this page.
