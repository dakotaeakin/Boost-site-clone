import { Box, Button, Link, Typography, useMediaQuery } from "@mui/material";
import React from "react";

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
      <Box
        boxShadow="0 0 5px black"
        height="fit-content"
        m={isNonMobile ? "30px 30px 0 30px" : "30px 60px 0 30px"}
        borderRadius="5px"
        gridColumn="1 / span 2"
      >
        <Box>
          <Typography>FirstName LastName</Typography>
          <Box>
            <Typography>Account Number:</Typography>
            <Typography>123456789</Typography>
          </Box>
        </Box>
        <Box p="15px">
          <Box
            display="flex"
            justifyContent="space-between"
            borderBottom="solid 1px"
            mt="10px"
          >
            <Typography>Full Name</Typography>
            <Box display="flex">
              <Typography>FirstName LastName</Typography>
              <Link
                ml="10px"
                sx={{
                  "&.MuiLink-root": {
                    cursor: "pointer",
                  },
                }}
              >
                Edit
              </Link>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            borderBottom="solid 1px"
            mt="10px"
          >
            <Typography>Email</Typography>
            <Box display="flex">
              <Typography>blah.com</Typography>
              <Link
                ml="10px"
                sx={{
                  "&.MuiLink-root": {
                    cursor: "pointer",
                  },
                }}
              >
                Edit
              </Link>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            borderBottom="solid 1px"
            mt="10px"
          >
            <Typography>Address</Typography>
            <Typography>blah blah</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
