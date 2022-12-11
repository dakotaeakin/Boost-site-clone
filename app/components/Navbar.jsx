import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import { useRouter } from "next/router";
import { GlobalContext, UserContext } from "../lib/context";
import { getAuth, signOut } from "firebase/auth";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ToggleButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { tokens } from "../theme";
import Home from "./dashboard/home/Home";
import Usage from "./dashboard/Usage";
import Settings from "./dashboard/Settings";
import { Dashboard } from "@mui/icons-material";

export default function Navbar(billData) {
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

  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = {
    home: { component: <Home billData={billData.billData} />, name: "home" },
    usage: { component: <Usage />, name: "usage" },
    settings: { component: <Settings />, name: "settings" },
  };

  const [activeTab, setActiveTab] = useState(tabs.home);

  const { globalData, setGlobalContext } = useContext(GlobalContext);

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
          position="absolute"
          height="calc(100vh - 63px)"
          width="100%"
          backgroundColor={colors.grey[500]}
          top="63px"
          onClick={() => setDisplay(!display)}
          hidden={display ? false : true}
          sx={{ opacity: "0.5" }}
        ></Box>
        <Box
          display="flex"
          justifyContent="center"
          maxWidth="80rem"
          width="100%"
          p="0 2rem 0 2rem"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            height="64px"
            position="relative"
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
                  {isNonMobile ? (
                    <Box p="0 16px 0 0">Hi, {context.firstName}!</Box>
                  ) : null}
                  {isNonMobile ? (
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
                  ) : (
                    <IconButton
                      onClick={() => {
                        setDisplay(!display);
                      }}
                    >
                      {!display ? (
                        <MenuIcon
                          fontSize="large"
                          sx={{
                            padding: "0 !important",
                            color: colors.primary[500],
                            transition: "1s",
                          }}
                        />
                      ) : (
                        <CloseIcon
                          fontSize="large"
                          sx={{
                            padding: "0 !important",
                            color: colors.primary[500],
                          }}
                        />
                      )}
                    </IconButton>
                  )}
                </Box>
              ) : null}
              {/* Profile dropdown */}
              <Box
                sx={{
                  position: "absolute",
                  top: "63px",
                  right: "0",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
                backgroundColor={colors.white[500]}
                width={isNonMobile ? null : "200px"}
              >
                <Collapse in={display} sx={{ borderRadius: "5px" }}>
                  <List
                    sx={{
                      m: "10px",
                      borderRadius: "5px",
                      display: "flex",
                      flexDirection: `${isNonMobile ? null : "column"}`,
                      justifyContent: `${isNonMobile ? null : "center"}`,
                    }}
                  >
                    {isNonMobile ? null : (
                      <>
                        <ListItem disablePadding>
                          <ListItemButton
                            // selected={activeTab.name === "home"}
                            onClick={() => {
                              setGlobalContext("home");
                              setDisplay(!display);
                            }}
                            sx={{
                              textAlign: "center",
                              "&.Mui-selected": {
                                boxShadow: "inset 0 0 5px black",
                              },
                            }}
                          >
                            <ListItemText primary="Home" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            selected={activeTab.name === "usage"}
                            onClick={() => {
                              setGlobalContext("usage");
                              setDisplay(!display);
                            }}
                            sx={{
                              textAlign: "center",
                              "&.Mui-selected": {
                                boxShadow: "inset 0 0 5px black",
                              },
                            }}
                          >
                            <ListItemText primary="Usage" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            selected={activeTab.name === "settings"}
                            onClick={() => {
                              setGlobalContext("settings");
                              setDisplay(!display);
                            }}
                            sx={{
                              textAlign: "center",
                              "&.Mui-selected": {
                                boxShadow: "inset 0 0 5px black",
                              },
                            }}
                          >
                            <ListItemText primary="Settings" />
                          </ListItemButton>
                        </ListItem>
                      </>
                    )}
                    <Button
                      variant="contained"
                      sx={{
                        gridColumn: isNonMobile ? undefined : "span 2",
                        fontSize: "11px",
                        height: isNonMobile ? "35px" : "45px",
                        backgroundColor: `${colors.primary[500]} !important`,
                        mt: isNonMobile ? null : "10px",
                        "&:hover": {
                          backgroundColor: `${colors.orangeAccent[500]} !important`,
                          transition: "0.3s",
                        },
                      }}
                      onClick={() => {
                        signUserOut();
                        setDisplay(!display);
                      }}
                    >
                      Sign Out
                    </Button>
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
