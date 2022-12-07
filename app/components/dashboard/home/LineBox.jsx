import React from "react";
import {
  Box,
  Button,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";

const LineBox = () => {
  return (
    <Box
      boxShadow="0 0 5px black"
      height="fit-content"
      m="30px"
      borderRadius="5px"
      gridColumn="1 / span 2"
    >
      <Box>
        <Typography>My Line</Typography>
        <Typography>(303) 999-1111</Typography>
        <Box>
          <Typography>Device</Typography>
          <Link> {/*upArrowIcon*/}View Offers</Link>
        </Box>
        <Box>
          <Typography>Data Usage</Typography>
          <Box>
            <Box sx={{ height: "20px", width: "20px" }}>
              <svg>
                <rect width="100%" height="20px" fill="grey" rx="5" />
                <rect width="50%" height="20px" fill="green" rx="5" />
              </svg>
            </Box>
            <Box>
              <Typography>You've used 2.0GB so far this month</Typography>
              <Typography>
                Add more data to hold you over until next month
              </Typography>
              <Box>
                <Button>1GB</Button>
                <Button>3GB</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LineBox;
