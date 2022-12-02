import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import logo from "../public/logo.png";
import userPic from "../public/user.png";
import { useRouter } from "next/router";
import { UserContext } from "../lib/context";
import { getAuth, signOut } from "firebase/auth";
import Dropdown from "./Dropdown";
import { classNames } from "../lib/hooks";
import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { tokens } from "../theme";

var loggedIn = false;

const navigation = [
  // {
  //   name: "Home",
  //   href: "/",
  //   current: true,
  // },
  // {
  //   name: "Meet Our Team",
  //   href: "/about",
  //   current: false,
  // },
  // {
  //   name: "Contact",
  //   href: "/contact",
  //   current: false,
  // },
  //   { name: "Calendar", href: "#", current: false },
];

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname;
  const context = useContext(UserContext);
  const auth = getAuth();
  const [display, setDisplay] = useState(false);

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const signUserOut = () => {
    signOut(auth);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      zIndex="20"
      boxShadow="0 0 20px black"
    >
      <>
        <Box
          className={classNames(
            display
              ? "absolute h-full w-full bg-gray-400 top-0 right-0 bopttom-0 left-0 opacity-50"
              : "hidden"
          )}
          onClick={() => setDisplay(!display)}
        ></Box>
        <Box
          display="flex"
          justifyContent="center"
          maxWidth="80rem"
          width="100%"
          p="0 2rem 0 2rem"
        >
          <Box
            // className="flex items-center justify-between w-full h-16"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            height="4rem"
          >
            <Box>
              <Typography variant="h2" color="primary">
                Best Mobile
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              p={isNonMobile ? "0 0 0 0" : "0 0.5rem 0 0"}
              position={isNonMobile ? "static" : null}
              inset={isNonMobile ? "auto" : null}
              m={isNonMobile ? "0 0 0 1.5rem" : null}
            >
              {context.user ? (
                <Box display="flex" alignItems="center" position="relative">
                  {/* <Dropdown
                    hideable={true}
                    style="absolute top-[45px] right-0"
                    display={display}
                    components={
                      <Box p="0 0.5rem 0 0">
                        <button
                          className="bg-[#f25d12] p-2 rounded-xl hover:shadow-lg hover:bg-[#F24712]"
                          onClick={signUserOut}
                        >
                          <Box className="pl-2 pr-2 text-white ">Sign Out</Box>
                        </button>
                      </Box>
                    }
                  /> */}

                  <Box p="0 16px 0 0">Hi, {context.firstName}!</Box>

                  <IconButton
                    sx={{
                      padding: "0 !important",
                      "&:hover": {
                        backgroundColor: colors.primary[500],
                        transition: "0.3s",
                      },
                    }}
                    onClick={() => setDisplay(!display)}
                  >
                    <PersonOutlineOutlinedIcon
                      color="primary"
                      sx={{
                        width: "24px",
                        height: "24px",
                        "&:hover": { color: "white", transition: "0.3s" },
                      }}
                    />
                  </IconButton>
                </Box>
              ) : null}
              {/* Profile dropdown */}
              <Box
                sx={{ position: "absolute", top: "45px", right: "50px" }}
                backgroundColor="red"
              >
                <Collapse in={display}>
                  <List>
                    <ListItemButton>Sign Out</ListItemButton>
                  </List>
                </Collapse>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    </Box>
  );
}
