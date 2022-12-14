import { Box, Button, Link, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Profile from "./Profile";

const Settings = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box height="fit-content" width="100%">
      {/*Nav*/}
      <Box m={isNonMobile ? "0 30px 0 30px" : "0 60px 0 30px"} display="flex">
        <Box borderBottom="solid" borderColor="#f25d12">
          <Button>My Profile</Button>
        </Box>
        <Box borderBottom="solid 2px" borderColor="lightGrey">
          <Button sx={{ color: "grey" }}>Security</Button>
        </Box>
      </Box>
      {/*Content*/}
      <Profile />
    </Box>
  );
};

export default Settings;
