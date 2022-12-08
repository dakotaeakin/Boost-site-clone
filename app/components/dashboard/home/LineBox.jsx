import React from "react";
import {
  Box,
  Button,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { tokens } from "../../../theme";

const LineBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box
      boxShadow="0 0 5px black"
      height="fit-content"
      m={isNonMobile ? "0 30px 0 30px" : "0 60px 0 30px"}
      borderRadius="5px"
      gridColumn="1 / span 2"
    >
      <Box display="grid" gridTemplateColumns="50% 50%">
        <Box m="15px" gridColumn={isNonMobile ? "1" : "1 / span 2"}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            My Line
          </Typography>
          <Typography variant="h6">(303) 999-1111</Typography>
          <Box
            sx={{
              border: "solid",
              borderWidth: "0.2px",
              borderRadius: "5px",
              borderColor: `${colors.black[100]}`,
              m: `${isNonMobile ? "15px 15px 0 0" : "15px 0px 0 0"}`,
            }}
          >
            <Box m="10px">
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Device
              </Typography>
              <Typography variant="h6">iPhone 14 Pro</Typography>
              <Link variant="h6"> {/*upArrowIcon*/}View Offers</Link>
            </Box>
          </Box>
          <Box
            sx={{
              border: "solid",
              borderWidth: "0.2px",
              borderRadius: "5px",
              borderColor: `${colors.black[100]}`,
              m: `${isNonMobile ? "15px 15px 0 0" : "15px 0px 0 0"}`,
            }}
          >
            <Box m="10px">
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Data Usage
              </Typography>
              <Box
                display="grid"
                gridTemplateColumns="repeat(2, 1fr)"
                gap="20px"
              >
                <Box
                  gridColumn={isNonMobile ? "1" : "1 / span 2"}
                  sx={{ height: "20px", width: "100%", m: "10px 10px 0 0" }}
                >
                  <Box
                    borderRadius="5px"
                    height="10px"
                    width="100%"
                    backgroundColor={colors.black[100]}
                  >
                    <Box
                      borderRadius="5px"
                      height="10px"
                      width="50%"
                      backgroundColor="green"
                    ></Box>
                  </Box>
                  <Box
                    display="flex"
                    height="40px"
                    alignItems="center"
                    justifyContent="center"
                    mt="15px"
                  >
                    <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                      3.0
                    </Typography>
                    <Typography
                      mt="10px"
                      variant="h4"
                      sx={{ fontWeight: "bold" }}
                    >
                      /6GB
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Typography mb="5px" variant="h5">
                      remaining
                    </Typography>
                    <Typography variant="h4">14 days left</Typography>
                  </Box>
                </Box>
                <Box
                  gridColumn={isNonMobile ? "2" : "1 / span 2"}
                  mt={isNonMobile ? "" : "100px"}
                >
                  <Typography>You've used 3.0GB so far this month</Typography>
                  <Typography>
                    Add more data to hold you over until next month
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="calc(100% - 30px)"
                    m="10px 0 10px 0"
                  >
                    <Button
                      sx={{
                        backgroundColor: `${colors.primary[500]} !important`,
                      }}
                      variant="contained"
                      size="large"
                    >
                      1GB
                    </Button>
                    <Button
                      sx={{
                        backgroundColor: `${colors.primary[500]} !important`,
                      }}
                      variant="contained"
                      size="large"
                    >
                      3GB
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <Box
          sx={{
            border: "solid",
            borderWidth: "0.2px",
            borderRadius: "5px",
            borderColor: `${colors.black[100]}`,
            m: "15px 15px 0 0",
            gridColumn: "2",
          }}
        >
          Plan
        </Box>
        <Box
          sx={{
            border: "solid",
            borderWidth: "0.2px",
            borderRadius: "5px",
            borderColor: `${colors.black[100]}`,
            m: "15px 15px 0 0",
            gridColumn: "2",
          }}
        >
          Extras
        </Box> */}
      </Box>
    </Box>
  );
};

export default LineBox;
