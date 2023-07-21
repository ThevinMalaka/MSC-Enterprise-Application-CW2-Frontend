import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { userRegistrationRequest } from "../actions";
import { getUserRegistrationSuccess } from "../selectors";

const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    backgroundColor: "#fff",
  },
}));

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

export default function RegistrationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegistrationSuccess = useSelector(getUserRegistrationSuccess);

  useEffect(() => {
    if (userRegistrationSuccess) {
      navigate("/"); // redirect to login page
    }
  }, [userRegistrationSuccess, navigate]);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    height: "",
    weight: "",
    dateOfBirth: "",
  });

  const handleChange = (type, event) => {
    event.preventDefault();
    setValues({ ...values, [type]: event.target.value });
  };

  const submitUser = useCallback(
    (info) => {
      dispatch(userRegistrationRequest(info));
    },
    [dispatch]
  );

  const validateForm = () => {
    const errors = [];

    if (!values.name) {
      errors.push("Please enter your full name");
    }
    if (!values.email) {
      errors.push("Please enter your email");
    }
    if (!values.password) {
      errors.push("Please enter your password");
    }
    if (!values.height) {
      errors.push("Please enter your height");
    }
    if (!values.weight) {
      errors.push("Please enter your weight");
    }
    if (!values.dateOfBirth) {
      errors.push("Please enter your birthday");
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }
    // handle form submission logic here
    submitUser(values);
  };

  const handleSignupClick = () => {
    navigate("/");
  };

  return (
    <StyledRoot>
      <Container maxWidth="sm">
        <StyledContent>
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Already have an account?{" "}
            <Button variant="text" color="primary" onClick={handleSignupClick}>
              Sign In
            </Button>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              value={values.name}
              onChange={(event) => {
                handleChange("name", event);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => {
                handleChange("email", event);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={values.password}
              onChange={(event) => {
                handleChange("password", event);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="height"
              label="Height (cm)"
              name="height"
              value={values.height}
              onChange={(event) => {
                handleChange("height", event);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="weight"
              label="Weight (kg)"
              name="weight"
              value={values.weight}
              onChange={(event) => {
                handleChange("weight", event);
              }}
            />
            <Typography
              variant="body1"
              align="left"
              style={{ marginBottom: -10, marginTop: 10 }}
            >
              Enter your birthday
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="birthday"
              label=""
              type="date"
              id="birthday"
              autoComplete=""
              value={values.dateOfBirth}
              onChange={(event) => {
                handleChange("dateOfBirth", event);
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </StyledContent>
      </Container>
    </StyledRoot>
  );
}
