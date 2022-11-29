import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

const CustomTextField = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <input type="text" id="username" name="username"></input>
    </Box>
  );
};

export default CustomTextField;
