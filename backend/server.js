const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const db=require("./db");
const cors=require("cors");
const app = express();
const mediumRepo= require('./models/mediumRepo.js');
const easyRepo=require('./models/easyRepo.js');
const hardRepo = require('./models/hardRepo.js');
app.use(cors({
  origin: 'https://active-hub-frontend.vercel.app'
}));
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

//  User Route
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// easyRepo Route 
const easyRepoRoutes=require('./routes/easyRepoRoutes.js');
app.use('/api/easyRepo', easyRepoRoutes);

//---------// Easy Route er jonno ekhane endpoint banabo 
app.get('/easyRepoData',async(req,res)=>{
  try{
    const easyData=await easyRepo.find();
    res.json(easyData);
  }
  catch(error){
    console.log("Error fetching response",error);
    res.status(502).send("Internal server error");
  }
});

//medium repo routes
const mediumRepoRoutes=require('./routes/mediumRepoRoutes.js');
app.use('/api/mediumRepo', mediumRepoRoutes);

app.get('/mediumRepoData',async(req,res)=>{
  try{
    const mediumData=await mediumRepo.find();
    res.json(mediumData);
  }
  catch(error){
    console.log("Error fetching response",error);
    res.status(502).send("Internal server error");
  }
});

const hardRepoRoutes=require('./routes/hardRepoRoutes.js');
app.use('/api/hardRepo', hardRepoRoutes);

app.get('/hardRepoData',async(req,res)=>{
  try{
    const hardData=await hardRepo.find();
    res.json(hardData);
  }
  catch(error){
    console.log("Error fetching response",error);
    res.status(502).send("Internal server error");
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
