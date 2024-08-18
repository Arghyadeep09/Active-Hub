import React, { useState } from 'react';
import Axios from 'axios';
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
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const theme = createTheme();

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNo: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('active-hub-three.vercel.app
/api/users/signup', formData);
      setMessage(response.data.message);
      setFormData({
        name: '',
        email: '',
        password: '',
        mobileNo: ''
      });
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh', // Ensure it covers the full viewport height
          backgroundColor: 'black', // Set the background color of the whole page
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: 'black', // Set the background color of the form container
              padding: 3,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: 'white' }}>
              Sign Up
            </Typography>
            <Box 
              component="form" 
              onSubmit={handleSubmit} 
              noValidate 
              sx={{ mt: 1, bgcolor: 'black', p: 3, borderRadius: 2, width: '100%', border: '1px solid grey' }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={formData.name}
                onChange={handleChange}
                InputProps={{ style: { border: '1px solid grey', color: 'white' } }} // Add border and text color to the TextField
                InputLabelProps={{ style: { color: 'white' } }} // Add label color to the TextField
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                InputProps={{ style: { border: '1px solid grey', color: 'white' } }} // Add border and text color to the TextField
                InputLabelProps={{ style: { color: 'white' } }} // Add label color to the TextField
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
                InputProps={{ style: { border: '1px solid grey', color: 'white' } }} // Add border and text color to the TextField
                InputLabelProps={{ style: { color: 'white' } }} // Add label color to the TextField
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="mobileNo"
                label="Mobile Number"
                id="mobileNo"
                autoComplete="mobile"
                value={formData.mobileNo}
                onChange={handleChange}
                InputProps={{ style: { border: '1px solid grey', color: 'white' } }} // Add border and text color to the TextField
                InputLabelProps={{ style: { color: 'white' } }} // Add label color to the TextField
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              {message && (
                <Alert severity="info" sx={{ mt: 2 }}>
                  {message}
                </Alert>
              )}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/api/users/login" style={{ color: 'white' }}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Signup;
