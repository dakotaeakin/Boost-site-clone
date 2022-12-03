import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box
      boxShadow="0 0 5px black"
      height="fit-content"
      width="100%"
      borderRadius="5px"
      gridColumn="2"
      display="grid"
    >
      <Box
        boxShadow="0 0 5px black"
        height="fit-content"
        // width="fit-content"
        m="30px"
        borderRadius="5px"
        gridColumn="1 / span 2"
      >
        <Box>Plan Ad</Box>
      </Box>
      <Box
        boxShadow="0 0 5px black"
        height="fit-content"
        // width="fit-content"
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
  );
};

export default Home;
