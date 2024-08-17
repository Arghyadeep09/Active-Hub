const express = require("express");
const mediumRepo=require("../models/mediumRepo.js");

const Router=express.Router();

Router.get('/mediumRepo',async(req,res)=>{
    try{
        const mediumRepositories=await mediumRepo.find();
        res.json(mediumRepositories);
    }catch (error) {
        console.error('Error fetching repositories:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
});

module.exports=Router;