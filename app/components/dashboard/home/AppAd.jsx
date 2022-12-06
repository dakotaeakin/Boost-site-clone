import { Box, Button, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import { tokens } from "../../../theme";

const AppAd = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      boxShadow="0 0 5px black"
      height="fit-content"
      m="0 0 0 30px"
      borderRadius="5px"
      gridColumn="span 1"
      display="flex"
      flexDirection="column"
      alignItems="start"
      sx={{
        background: `linear-gradient(150deg, #FE6100 0%, #F36A21 32%, #F68F1E 62%, #FEB800 100%)`,
      }}
    >
      <Box m="15px 0 0 15px" display="grid" gap="5px">
        <Typography variant="h4" color={colors.white[500]}>
          Earn up to 100% off with our app
        </Typography>
        <Box>
          <Typography varinat="h3" color={colors.white[500]}>
            Exclusive Perks
          </Typography>
        </Box>
        <Box>
          <Typography varinat="h3" color={colors.white[500]}>
            Special Deals
          </Typography>
        </Box>
        <Box>
          <Typography varinat="h3" color={colors.white[500]}>
            Chances to win VIP experiances
          </Typography>
        </Box>
      </Box>
      <Box
        width="calc(100% - 15px)"
        display="grid"
        gridTemplateColumns="50% 50%"
        m="0 15px 0 15px"
      >
        <Box display="flex" gridColumn="1">
          <Image height={64} width={64} src="/../public/appStore128.png" />
          <Image height={64} width={64} src="/../public/playStore128.png" />
        </Box>
        <Box
          gridColumn="2"
          display="flex"
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            sx={{
              maxHeight: "50%",
              color: `${colors.orange[500]}`,
              "&.MuiButton-root": {
                backgroundColor: `${colors.white[500]}`,
              },
              "&:hover": {
                backgroundColor: `rgba(254, 97, 0, 0.3)`,
                color: `${colors.white[500]}`,
              },
            }}
            variant="contained"
          >
            Start Earning Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AppAd;
