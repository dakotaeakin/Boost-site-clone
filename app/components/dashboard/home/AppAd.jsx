import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { tokens } from "../../../theme";
import CheckIcon from "@mui/icons-material/Check";
import appStore from "../../../public/appStore128.png";
import playStore from "../../../public/playStore128.png";

const AppAd = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box
      boxShadow="0 0 5px black"
      height="fit-content"
      m={isNonMobile ? "0 0 0 30px" : "0 60px 0 30px"}
      borderRadius="5px"
      gridColumn={isNonMobile ? "span 1" : "1 / span 2"}
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
            <CheckIcon sx={{ m: "0 5px 5px 0" }} />
            Exclusive Perks
          </Typography>
        </Box>
        <Box>
          <Typography varinat="h3" color={colors.white[500]}>
            <CheckIcon sx={{ m: "0 5px 5px 0" }} />
            Special Deals
          </Typography>
        </Box>
        <Box>
          <Typography varinat="h3" color={colors.white[500]}>
            <CheckIcon sx={{ m: "0 5px 5px 0" }} />
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
        <Box display="flex" justifySelf="flex-start" gap="5px" gridColumn="1">
          <Image height={64} width={64} src={appStore} />
          <Image height={64} width={64} src={playStore} />
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
