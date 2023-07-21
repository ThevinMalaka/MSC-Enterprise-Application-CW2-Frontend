// @mui
import { useState, useCallback } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Container,
  Typography,
  Divider,
  Stack,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Checkbox,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

// hooks
import useResponsive from "../../../hooks/useResponsive";
// components
import Iconify from "../../../components/iconify";
import BackgroundImage from "../../../assets/images/background/login-bg.png";
import { userLoginRequest } from "../actions";

// ----------------------------------------------------------------------
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

const StyledSection = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 480,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive("up", "md");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const userLogin = useCallback(
    (info) => {
      dispatch(userLoginRequest(info));
    },
    [dispatch]
  );

  return (
    <>
      <StyledRoot>
        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Welcome to Fitness Tracker
            </Typography>
            <img src={BackgroundImage} alt="login" />
          </StyledSection>
        )}
        <Container maxWidth="sm" style={{ backgroundColor: "#fff" }}>
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Sign in to Fitness Tracking
            </Typography>

            <Stack spacing={3}>
              <TextField
                name="email"
                label="Email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <TextField
                name="password"
                label="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        <Iconify
                          icon={
                            showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              {/* Add sigup link here */}
              <Link
                variant="subtitle2"
                component={Button}
                onClick={handleSignupClick}
              >
                If you don't have an account, sign up here
              </Link>
            </Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => {
                userLogin({ email, password });
              }}
            >
              Login
            </LoadingButton>
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
