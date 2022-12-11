import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import underConstruction from "../../../public/underConstruction.svg";

const Usage = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box
      m={isNonMobile ? null : "0 30px 0 30px"}
      width={isNonMobile ? "100%" : "calc(100% - 30px)"}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h2">Pardon the mess</Typography>
      <Typography variant="h3" mt="15px">
        This page is still under construction
      </Typography>
      <Box height="100%" width="100%" mt="30px">
        <Image objectFit="contain" src={underConstruction} />
      </Box>
    </Box>
  );
};

export default Usage;
