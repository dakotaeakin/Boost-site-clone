import {
  Box,
  Button,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { tokens } from "../../../theme";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { parseDate } from "../../../lib/hooks";

const PaymentBox = (data) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box
      boxShadow="0 0 5px black"
      height="100%"
      m={isNonMobile ? "0 30px 0 0" : "0 60px 30px 30px"}
      borderRadius="5px"
      display="flex"
      justifyContent="space-between"
      gridColumn={isNonMobile ? "2" : "1 / span 2"}
    >
      <Box p="15px 0 0 30px">
        <Typography pb="6px" variant="h4">
          Payment
        </Typography>
        <Typography pb="6px" variant="h5">
          Due {parseDate(data.billData.dueDate)}
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          ${data.billData.amount}
          <IconButton sx={{ color: "black", p: "0" }}>
            <HelpOutlineIcon
              sx={{ p: "0 0 6px 6px", height: "22px", width: "22px" }}
            />
          </IconButton>
        </Typography>
      </Box>
      <Box
        p="15px"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{ direction: "rtl" }}
      >
        <Box sx={{ direction: "ltr" }}>
          <Link href="#" variant="h6" underline="none" color="#0165BC">
            View Payment History
            <ArrowForwardIosIcon
              sx={{ height: "12px", width: "12px", color: "#0165BC" }}
            />
          </Link>
        </Box>
        <Box>
          <Button
            sx={{
              backgroundColor: `${colors.primary[500]} !important`,
              width: `${isNonMobile ? "150%" : "100%"}`,
            }}
            variant="contained"
            size="large"
          >
            Make a Payment
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentBox;
