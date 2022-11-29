import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Formik } from "formik";
import Link from "next/link";
import React, { useContext, useState } from "react";
import * as yup from "yup";
import { auth, createUser, updateUser } from "../../lib/firebase";
import { tokens } from "../../theme";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const createAccount = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({});
  const [isError, setIsError] = useState();

  const createWithEmail = async (values) => {
    try {
      const userCredential = await createUser(
        auth,
        values.email,
        values.password
      );

      setUser((prevUser) => ({
        ...prevUser,
        uid: userCredential.user.uid,
      }));
      console.log(userCredential.user.uid);
      updateUser(user, userCredential.user.uid);
    } catch (error) {
      errorHandler(error);
    }
  };

  const errorHandler = (error) => {
    console.log(error.code);
    switch (error.code) {
      case "auth/invalid-email":
        setIsError("Please use a valid email address");
        break;
      case "auth/email-already-in-use":
        setIsError(
          "Email is already associated with an account, please choose a different email or login."
        );
        break;
      default:
        setIsError("An error occured please try again");
    }
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const loginSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().required("Required"),
    password: yup
      .string()
      .required("Required")
      .min(6, "Password must be at least 6 digits"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const textFieldStyle = {
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
    "& .Mui-error input": {
      zIndex: "10",
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
        onSubmit={createWithEmail}
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
              sx={{
                "& > div": { gridColumn: "span 2" },
              }}
            >
              {isError ? (
                <Typography
                  variant="h6"
                  sx={{
                    gridColumn: "span 2",
                    color: "#f44336",
                    textAlign: "center",
                  }}
                >
                  {isError}
                </Typography>
              ) : undefined}
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={
                  touched.firstName && errors.firstName ? "Required" : ""
                }
                sx={{ ...textFieldStyle, gridColumn: "span 1 !important" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={
                  touched.lastName && errors.lastName ? "Required" : ""
                }
                sx={{ ...textFieldStyle, gridColumn: "span 1 !important" }}
              />
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email ? "Required" : ""}
                sx={{ ...textFieldStyle, gridColumn: "span 2 !important" }}
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
                helperText={touched.password && errors.password}
                sx={{ ...textFieldStyle, gridColumn: "span 2 !important" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      sx={{
                        color: `${colors.black[500]} !important`,
                        cursor: "pointer",
                      }}
                      onMouseDown={() => setShowPassword(!showPassword)}
                      onMouseUp={() => setShowPassword(!showPassword)}
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
              <TextField
                fullWidth
                variant="outlined"
                type={showPassword ? "text" : "password"}
                label="Confirm Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                name="confirmPassword"
                error={!!touched.confirmPassword && !!errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
                sx={{ ...textFieldStyle, gridColumn: "span 2 !important" }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: `${colors.primary[500]} !important`,
                  gridColumn: isNonMobile ? undefined : "span 2",
                  height: isNonMobile ? "35px" : undefined,
                  fontSize: "11px",
                  "&:hover": {
                    backgroundColor: `${colors.orangeAccent[500]} !important`,
                  },
                }}
              >
                Submit
              </Button>
              <Link href="/login" pass>
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
                  Cancel
                </Button>
              </Link>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default createAccount;
