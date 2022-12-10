import {
  Box,
  Button,
  keyframes,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { tokens } from "../../../theme";
import iphone from "../../../public/iphone.png";

const Ad = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [circlesAnimationX, setCirclesAnimationX] = useState();
  const [circlesAnimationY, setCirclesAnimationY] = useState();
  const [playAnimation, setPlayAnimation] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  /*
  useEffect(() => {
    setHeight(ref.current.clientHeight);
    setWidth(ref.current.clientWidth);
    setCirclesAnimationX(keyframes`
			0% {
				transform: translateX(calc(${
          Math.random() * (ref.current.clientWidth - 0)
        }px - 100px))
		
				}
				`);
    setCirclesAnimationY(keyframes`
			0% {
				transform: translateY(${ref.current.clientHeight}px )
			}
			`);
  }, []);

  useEffect(() => {
    setPlayAnimation(true);
  }, [height, width]);
  */

  return (
    <Box
      ref={ref}
      display="flex"
      alignItems="center"
      boxShadow="0 0 5px black"
      minHeight="100px"
      height="fit-content"
      font-size="50px"
      m={isNonMobile ? "30px 30px 0 30px" : "0 60px 0 30px"}
      borderRadius="5px"
      gridColumn="1 / span 2"
      backgroundColor={colors.black[600]}
      position="relative"
      overflow="hidden"
    >
      <Box>
        <Box
          zIndex="1"
          sx={{ position: "absolute", top: "25px" }}
          hidden={!isNonMobile}
        >
          <Image height={200} width={200} src={iphone} />
        </Box>
      </Box>

      <Typography
        pr={isNonMobile ? "25%" : "5%"}
        color={colors.white[500]}
        align="right"
        variant="h3"
        zIndex="2"
        m="5px 0 5px auto"
      >
        Get the latest iPhone today!
      </Typography>
      <Button sx={{ mr: "30px", zIndex: "2" }} variant="outlined">
        Find out more
      </Button>
      <Box
        height="100px"
        width="100px"
        borderRadius="50%"
        position="absolute"
        top="-50px"
        left="600px"
        sx={{
          backgroundImage: `linear-gradient(${colors.black[400]}, ${colors.black[600]})`,
        }}
      ></Box>
      <Box
        fontSize="1em"
        position="absolute"
        zIndex="1"
        sx={{
          animationDelay: "3s",
          animation: `${circlesAnimationX} 10s  linear infinite alternate`,
        }}
      >
        <Box
          className="y"
          zIndex="10"
          height="100px"
          width="100px"
          borderRadius="50%"
          position="absolute"
          left="850px"
          sx={{
            backgroundImage: `linear-gradient(${colors.black[400]}, ${colors.black[600]})`,
            transform: "rotate(-90deg)",
            animation: `${circlesAnimationY} 2s linear infinite alternate`,
            opacity: "0.5",
          }}
        ></Box>
      </Box>
      <Box
        className="x"
        fontSize="1em"
        position="absolute"
        zIndex="1"
        sx={{
          transformOrigin: "0 0",
          animation: `${circlesAnimationX} 7s linear 2s infinite alternate`,
        }}
      >
        <Box
          className="y"
          zIndex="1"
          height="100px"
          width="100px"
          borderRadius="50%"
          position="absolute"
          top="20px"
          left="400px"
          sx={{
            backgroundImage: `linear-gradient(${colors.black[400]}, ${colors.black[600]})`,
            transform: "rotate(-50deg)",
            transformOrigin: "0 0",
            animation: `${circlesAnimationY} 7s linear infinite alternate`,
            opacity: "0.5",
          }}
        ></Box>
      </Box>
      <Box
        className="x"
        fontSize="1em"
        position="absolute"
        zIndex="1"
        sx={{
          animation: `${circlesAnimationX} 10s  linear infinite alternate`,
        }}
      >
        <Box
          className="y"
          zIndex="1"
          height="100px"
          width="100px"
          borderRadius="50%"
          position="absolute"
          top="-60px"
          left="200px"
          sx={{
            backgroundImage: `linear-gradient(${colors.black[400]}, ${colors.black[600]})`,
            transform: "rotate(-50deg)",
            animationDelay: "2s",
            animation: `${circlesAnimationY} 10s linear infinite alternate`,
            opacity: "0.5",
          }}
        ></Box>
      </Box>
      <Box
        className="x"
        fontSize="1em"
        position="absolute"
        zIndex="1"
        sx={{
          animation: `${circlesAnimationX} 10s  linear infinite alternate`,
        }}
      >
        <Box
          className="y"
          height="100px"
          width="100px"
          borderRadius="50%"
          position="absolute"
          top="-120px"
          sx={{
            backgroundImage: `linear-gradient(${colors.black[400]}, ${colors.black[600]})`,
            transform: "rotate(-50deg)",
            opacity: "0.5",
            animation: `${circlesAnimationY} 7s linear infinite alternate`,
          }}
        ></Box>
      </Box>
      <Box
        className="x"
        position="absolute"
        zIndex="1"
        sx={{
          animation: `${circlesAnimationX} 10s  linear infinite alternate`,
        }}
      >
        <Box
          className="y"
          zIndex="1"
          height="100px"
          width="100px"
          borderRadius="50%"
          position="absolute"
          top="-80px"
          left="720px"
          sx={{
            backgroundImage: `linear-gradient(${colors.black[400]}, ${colors.black[600]})`,
            transform: "rotate(-50deg)",
            opacity: "0.5",
            animation: `${circlesAnimationY} 7s linear infinite alternate`,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Ad;
