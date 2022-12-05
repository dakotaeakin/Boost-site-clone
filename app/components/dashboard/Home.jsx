import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import Image from "next/image";
import React from "react";
import { tokens } from "../../theme";
import Ad from "./Ad";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      boxShadow="0 0 5px black"
      height="fit-content"
      width="100%"
      borderRadius="5px"
      gridColumn="2"
      gridTemplateColumns="50% 50%"
      display="grid"
    >
      <Ad />
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
        <Box m="0 15px 0 15px">
          <Image height={64} width={64} src="/../public/appStore128.png" />
          <Image height={64} width={64} src="/../public/playStore128.png" />
          <Button
            sx={{
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
      <Box
        boxShadow="0 0 5px black"
        height="fit-content"
        // width="fit-content"

        m="30px"
        borderRadius="5px"
        gridColumn="span 1"
      >
        <Box>Payment box</Box>
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
