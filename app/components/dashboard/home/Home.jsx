import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import Image from "next/image";
import React from "react";
import { tokens } from "../../../theme";
import Ad from "./Ad";
import AppAd from "./AppAd";
import LineBox from "./LineBox";
import PaymentBox from "./PaymentBox";

const Home = (data) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box
      // boxShadow="0 0 5px black"
      height="fit-content"
      width="100%"
      // borderRadius="5px"
      gridColumn="2"
      gridTemplateColumns="50% 50%"
      display="grid"
      gap="30px"
    >
      <Ad />
      <AppAd />
      <PaymentBox billData={data.billData} sx={{ gridColumn: "span 1" }} />
      <LineBox />
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
