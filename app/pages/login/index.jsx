import React, { useContext, useEffect, useState } from "react";
import { auth, createUser, signIn } from "../../lib/firebase";
import { updateUser } from "../../lib/firebase";
import Router, { useRouter } from "next/router";
import { useUserData } from "../../lib/hooks";
import { useAuthState } from "react-firebase-hooks/auth";
import { GlobalContext, UserContext } from "../../lib/context";
import {
  Box,
  Button,
  InputAdornment,
  styled,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { tokens } from "../../theme";
import CustomTextField from "../../components/CustomTextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Link from "next/link";

const Login = () => {
  const context = useContext(UserContext);
  const { globalData, setGlobalContext } = useContext(GlobalContext);

  useEffect(() => {
    if (context.user) {
      Router.push("/");
    }
  }, [context]);

  const [serverError, setServerError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = yup.object().shape({
    username: yup.string().required("required"),
    password: yup.string().required("required"),
  });

  const initialValues = {
    username: "",
    password: "",
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values.username);
    loginEmail(values.username, values.password);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const loginEmail = async (emailTxt, passTxt) => {
    try {
      const userCredential = await signIn(auth, emailTxt, passTxt);
    } catch (error) {
      errorHandler(error);
    }
  };

  const errorHandler = (error) => {
    setServerError(!serverError);
    console.log(error);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const textFieldStyle = {
    gridColumn: "span 2",
    "& label.Mui-focused": {
      color: "#888888",
    },
    "& label": {
      color: "#888888",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: colors.orange[500],
        borderWidth: "2px",
      },
      "&:hover fieldset": {
        borderColor: colors.orange[500],
        boxShadow: "0 0 5px #888888",
      },
      "&.Mui-focused fieldset": {
        borderColor: colors.orange[500],
      },
    },
    "& .Mui-error fieldset": {
      borderColor: `${colors.orange[500]} !important`,
      backgroundColor: `${colors.redAccent[100]} !important`,
    },
    "& .MuiInputBase-input": {
      color: `${colors.black[500]} !important`,
    },
    "& .MuiFormHelperText-root": {
      fontSize: "14px",
    },
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      m="10vh"
      height="fit-content"
      maxWidth="500px"
      width="fit-content"
      minWidth="300px"
      backgroundColor="#ffffff"
      boxShadow="0 0 5px #888888"
      borderRadius="10px"
    >
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={loginSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              m="50px"
              width="20vw"
              maxWidth="300px"
              minWidth="200px"
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(2, minmax(0, 1fr))"
              // sx={{
              //   "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
              // }}
            >
              {serverError ? (
                <Typography
                  variant="h6"
                  sx={{
                    gridColumn: "span 2",
                    color: "#f44336",
                    textAlign: "center",
                  }}
                >
                  Username/password incorrect
                </Typography>
              ) : undefined}
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Username"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                name="username"
                error={!!touched.username && !!errors.username}
                helperText={
                  touched.username && errors.username
                    ? "Please enter a username"
                    : ""
                }
                sx={textFieldStyle}
              />
              <TextField
                fullWidth
                variant="outlined"
                type={showPassword ? "text" : "password"}
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={
                  touched.password && errors.password
                    ? "Please enter a password"
                    : ""
                }
                sx={textFieldStyle}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      sx={{
                        color: `${colors.black[500]} !important`,
                        cursor: "pointer",
                      }}
                      onMouseDown={handleClickShowPassword}
                      onMouseUp={handleClickShowPassword}
                    >
                      {showPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </InputAdornment>
                  ),
                }}
              />

              <>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    gridColumn: isNonMobile ? undefined : "span 2",
                    fontSize: "11px",
                    height: isNonMobile ? "35px" : undefined,
                    backgroundColor: `${colors.primary[500]} !important`,
                    "&:hover": {
                      backgroundColor: `${colors.orangeAccent[500]} !important`,
                      transition: "0.3s",
                    },
                  }}
                >
                  Sign In
                </Button>
              </>
              <Link href="/createAccount" pass>
                <Button
                  type=""
                  variant="contained"
                  sx={{
                    gridColumn: isNonMobile ? undefined : "span 2",
                    height: isNonMobile ? "35px" : undefined,
                    fontSize: "11px",
                    "&:hover": {
                      backgroundColor: `${colors.orangeAccent[500]} !important`,
                    },
                  }}
                >
                  Create Account
                </Button>
              </Link>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
