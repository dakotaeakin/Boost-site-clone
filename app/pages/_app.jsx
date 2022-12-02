import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthGuard } from "../lib/AuthGuard";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";
import "../styles/globals.css";
import { ColorModeContext, useMode } from "../theme";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={userData}>
          <div className="app">
            <CssBaseline />
            <main className="content">
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                height="100vh"
              >
                <Navbar />
                <Box
                  display="flex"
                  zIndex="0"
                  height="fit-content"
                  width="100vw"
                  maxWidth="80rem"
                  minHeight="calc(100vh - 128px - 64px)"
                >
                  {Component.requireAuth ? (
                    <AuthGuard>
                      <Component {...pageProps} />
                    </AuthGuard>
                  ) : (
                    <Component {...pageProps} />
                  )}
                </Box>
                <Footer className="" />
              </Box>
            </main>
          </div>
        </UserContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
  // className="flex flex-col justify-start min-h-screen"
}

export default MyApp;
