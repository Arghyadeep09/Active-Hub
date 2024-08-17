const express = require("express");
const hardRepo=require("../models/hardRepo.js");

const Router=express.Router();

Router.get('/hardRepo',async(req,res)=>{
    try{
        const hardRepositories=await hardRepo.find();
        res.json(hardRepositories);
    }catch (error) {
        console.error('Error fetching repositories:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
});

module.exports=Router;