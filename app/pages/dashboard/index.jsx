import { Box, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <Box
      boxShadow="0 0 5px black"
      borderRadius="5px"
      display="flex"
      m="30px"
      width="100%"
      // height="100%"
      sx={{ height: "calc(100% - 60px)" }}
    >
      <Box
        boxShadow="0 0 5px black"
        height="fit-content"
        width="fit-content"
        m="30px"
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
        width="100%"
        m="30px"
        borderRadius="5px"
        gridColumn="2"
        display="grid"
      >
        <Box
          boxShadow="0 0 5px black"
          height="fit-content"
          width="fit-content"
          m="30px"
          borderRadius="5px"
          gridColumn=""
        >
          <Box>Ad box</Box>
        </Box>
        <Box
          boxShadow="0 0 5px black"
          height="fit-content"
          width="fit-content"
          m="30px"
          borderRadius="5px"
          gridColumn=""
        >
          <Box>Ad box</Box>
        </Box>
        <Box
          boxShadow="0 0 5px black"
          height="fit-content"
          // width="fit-content"
          m="30px"
          borderRadius="5px"
          gridColumn="1 / span 2"
        >
          <Box>Ad box</Box>
        </Box>
        <Box
          boxShadow="0 0 5px black"
          height="fit-content"
          // width="fit-content"
          m="30px"
          borderRadius="5px"
          gridColumn="1 / span 2"
        >
          <Box>Ad box</Box>
        </Box>
        <Box
          boxShadow="0 0 5px black"
          height="fit-content"
          // width="fit-content"
          m="30px"
          borderRadius="5px"
          gridColumn="1 / span 2"
        >
          <Box>Ad box</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

Dashboard.requireAuth = true; //Require user to be logged in to view this page.
