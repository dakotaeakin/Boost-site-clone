import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import Home from "../../components/dashboard/Home";
import Settings from "../../components/dashboard/Settings";
import Usage from "../../components/dashboard/Usage";

const Dashboard = (billData) => {
  const tabs = {
    home: { component: <Home billData={billData.billData} />, name: "home" },
    usage: { component: <Usage />, name: "usage" },
    settings: { component: <Settings />, name: "settings" },
  };
  const [activeTab, setActiveTab] = useState(tabs.home);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  console.log(isNonMobile);

  return (
    <Box
      // boxShadow="0 0 5px black"
      // borderRadius="5px"
      display="flex"
      // m="30px"
      width="100%"
      // height="100%"
      sx={{ height: "calc(100% - 60px)" }}
    >
      <Box
        boxShadow="0 0 5px black"
        height="fit-content"
        width="fit-content"
        m="60px 30px 30px 30px"
        borderRadius="5px"
        gridColumn="1"
        hidden={!isNonMobile}
      >
        <Box m="30px 0 30px 0">
          <List>
            <ListItem disablePadding sx={{ width: "150px" }}>
              <ListItemButton
                selected={activeTab.name === "home"}
                onClick={() => {
                  setActiveTab(tabs.home);
                }}
                sx={{
                  textAlign: "center",
                  "&.Mui-selected": {
                    boxShadow: "inset 0 0 5px black",
                  },
                }}
              >
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                selected={activeTab.name === "usage"}
                onClick={() => {
                  setActiveTab(tabs.usage);
                }}
                sx={{
                  textAlign: "center",
                  "&.Mui-selected": {
                    boxShadow: "inset 0 0 5px black",
                  },
                }}
              >
                <ListItemText primary="Usage" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                selected={activeTab.name === "settings"}
                onClick={() => {
                  setActiveTab(tabs.settings);
                }}
                sx={{
                  textAlign: "center",
                  "&.Mui-selected": {
                    boxShadow: "inset 0 0 5px black",
                  },
                }}
              >
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box m=" 30px 30px 30px 0" height="fit-content" width="100%">
        {activeTab.component}
      </Box>
    </Box>
  );
};

export default Dashboard;

Dashboard.requireAuth = true; //Require user to be logged in to view this page.
