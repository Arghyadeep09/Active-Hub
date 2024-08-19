import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CssBaseline,
  Avatar,
  Grid,
  GlobalStyles,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "./UserProvider";

const theme = createTheme();

const Login = ({ setUsertoken }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail && savedPassword) {
      setFormData({ email: savedEmail, password: savedPassword });
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setFormData({ email: "", password: "" }); // Reset form data when login is successful
    }
  }, [isSuccess]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "https://active-hub.onrender.com/api/users/login",
        formData
      );
      setMessage("Login successful!");
      setIsSuccess(true); // Set success flag to true
      const token = response.data.token;
      localStorage.setItem("token", token);

      if (rememberMe) {
        localStorage.setItem("email", formData.email);
        localStorage.setItem("password", formData.password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

      setUser({ loggedIn: true });
      console.log(token);
      setUsertoken(token);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMessage(error.response.data.error);
      setIsSuccess(false); // Set success flag to false
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: "black", color: "white" },
        }}
      />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            padding: 3,
            borderRadius: 1,
            border: "1px solid white",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: { color: "white" },
                sx: {
                  "& fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                sx: {
                  input: {
                    color: "white",
                    backgroundColor: "black",
                  },
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  color="primary"
                />
              }
              label="Remember Me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {message && (
              <Alert severity={isSuccess ? "success" : "error"} sx={{ mt: 2 }}>
                {message}
              </Alert>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/api/users/signup" style={{ color: "white" }}>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
