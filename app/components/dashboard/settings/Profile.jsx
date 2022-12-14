import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GlobalContext, UserContext } from "../../../lib/context";
import { Formik } from "formik";
import * as yup from "yup";
import { tokens } from "../../../theme";
import { deleteAccount, updateUser } from "../../../lib/firebase";

const Profile = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const userData = useContext(UserContext);
  const [edit, setEdit] = useState({ name: null, email: null });
  const [isError, setIsError] = useState();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { globalData, setGlobalContext } = useContext(GlobalContext);

  const initialValues = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
  };

  const loginSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().required("Required"),
  });

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

  const handleFormSubmit = (values) => {
    if (edit.name) {
      if (
        values.firstName !== userData.firstName ||
        values.lastName !== userData.lastName
      ) {
        updateUser({
          firstName: values.firstName,
          lastName: values.lastName,
          email: userData.email,
          uid: userData.user.uid,
        });
      } else {
        console.log("name not changed");
      }
      setEdit((prev) => {
        return {
          name: !prev.name,
        };
      });
    }

    if (edit.email) {
      if (values.email !== userData.email) {
        updateUser({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: values.email,
          uid: userData.user.uid,
        });
      } else {
        console.log("email not changed");
      }
      setEdit((prev) => {
        return {
          email: !prev.email,
        };
      });
    }
  };

  const handleDeleteButton = () => {
    localStorage.setItem("tab", "settings");

    deleteAccount(userData.user);
  };

  return (
    <Box>
      <Box
        boxShadow="0 0 5px black"
        height="fit-content"
        m={isNonMobile ? "30px 30px 0 30px" : "30px 60px 0 30px"}
        borderRadius="5px"
        gridColumn="1 / span 2"
      >
        <Box p="15px 15px 0 15px" display="flex" justifyContent="space-between">
          <Typography variant="h3">
            {userData.firstName} {userData.lastName}
          </Typography>
          <Box
            height="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">Account Number:</Typography>
            <Typography variant="h4">123456789</Typography>
          </Box>
        </Box>
        <Box p="15px">
          <Box borderBottom="solid 1px" pb="10px" mt="10px">
            <Box display="flex" justifyContent="space-between">
              <Typography>Full Name</Typography>
              <Box display="flex">
                <Typography pr="30px">
                  {userData.firstName} {userData.lastName}
                </Typography>
                <Link
                  underline="none"
                  ml="10px"
                  sx={{
                    "&.MuiLink-root": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() =>
                    setEdit((prev) => {
                      return {
                        name: !prev.name,
                      };
                    })
                  }
                >
                  {edit.name ? (
                    <Typography color="blue" sx={{ userSelect: "none" }}>
                      Cancel
                    </Typography>
                  ) : (
                    <Typography color="blue" sx={{ userSelect: "none" }}>
                      Edit
                    </Typography>
                  )}
                </Link>
              </Box>
            </Box>
            {edit.name ? (
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
                          touched.firstName && errors.firstName
                            ? "Required"
                            : ""
                        }
                        sx={{
                          ...textFieldStyle,
                          gridColumn: "span 1 !important",
                        }}
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
                        sx={{
                          ...textFieldStyle,
                          gridColumn: "span 1 !important",
                        }}
                      />

                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          backgroundColor: `${colors.primary[500]} !important`,
                          gridColumn: isNonMobile ? "2" : "span 2",
                          height: isNonMobile ? "35px" : undefined,
                          fontSize: "11px",
                          "&:hover": {
                            backgroundColor: `${colors.orangeAccent[500]} !important`,
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>
            ) : null}
          </Box>
          <Box pb="10px" mt="10px">
            <Box display="flex" justifyContent="space-between">
              <Typography>Email</Typography>
              <Box display="flex">
                <Typography pr="30px">{userData.email}</Typography>
                <Link
                  underline="none"
                  ml="10px"
                  sx={{
                    "&.MuiLink-root": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() =>
                    setEdit((prev) => {
                      return {
                        email: !prev.email,
                      };
                    })
                  }
                >
                  {edit.email ? (
                    <Typography color="blue" sx={{ userSelect: "none" }}>
                      Cancel
                    </Typography>
                  ) : (
                    <Typography color="blue" sx={{ userSelect: "none" }}>
                      Edit
                    </Typography>
                  )}
                </Link>
              </Box>
            </Box>
            {edit.email ? (
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
                        label="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        error={!!touched.email && !!errors.email}
                        helperText={
                          touched.email && errors.email ? "Required" : ""
                        }
                        sx={{
                          ...textFieldStyle,
                          gridColumn: "span 2 !important",
                        }}
                      />

                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          backgroundColor: `${colors.primary[500]} !important`,
                          gridColumn: isNonMobile ? "2" : "span 2",
                          height: isNonMobile ? "35px" : undefined,
                          fontSize: "11px",
                          "&:hover": {
                            backgroundColor: `${colors.orangeAccent[500]} !important`,
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>
            ) : null}
          </Box>
          {/* <Box
          display="flex"
          justifyContent="space-between"
          borderBottom="solid 1px"
          pb="10px"
          mt="10px"
        >
          <Typography>Address</Typography>
          <Typography>blah blah</Typography>
        </Box> */}
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end" m="30px">
        <Button
          onClick={handleDeleteButton}
          type=""
          variant="outlined"
          sx={{
            gridColumn: isNonMobile ? "2" : "span 2",
            height: isNonMobile ? "35px" : undefined,
            fontSize: "11px",
          }}
        >
          Delete Account
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
