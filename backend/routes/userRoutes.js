const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Adjust the path as necessary
const secretKey = 'addyscrapper1234'; // Define your secret key or import it from your config

const Router = express.Router();

// Signup Endpoint
Router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, mobileNo } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        
        // Create a new user document using the mongoose model
        const newUser = new User({
            name,
            email,
            password,
            mobileNo
        });

        // Save the new user to the database
        const response = await newUser.save();
        console.log('Data saved');

        // Create JWT payload
        const payload = {
            id: response.id,
            email: response.email
        };

        // Generate JWT
        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

        // Respond with the JWT and user info
        res.json({
            message: 'User registered successfully',
            token,
            user: {
                id: response.id,
                name: response.name,
                email: response.email,
                mobileNo: response.mobileNo
            }
        });
    } catch (err) {
        console.error('Error registering user:', err.stack);
        res.status(500).json({ message: 'Error registering user', error: err.message });
    }
});

// Login Route
Router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Log the incoming request payload
        console.log(`Login attempt: email=${email}, password=${password}`);

        // Find the user by email
        const user = await User.findOne({ email });

        // Log the user found in the database
        console.log('User found:', user);

        // Check if user exists
        if (!user) {
            console.error('User not found');
            return res.status(401).json({ error: 'Invalid email ' });
        }
        console.log(password);
        // Check if password match
        const isMatch = await user.comparePassword(password);

        // Log the result of password comparison
        console.log('Password match:', isMatch);

        if (!isMatch) {
            console.error('Password does not match');
            return res.status(401).json({ error: 'Invalid password' });

        } 
        // Generate JWT token
        const payload = {
            id: user.id,
            email: user.email
        };
        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

        // Return token as response
        res.json({ message: 'Successfully logged in',token });
    } catch (err) {
        console.error('Error authenticating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = Router;
