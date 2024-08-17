const express = require("express");
const easyRepo=require("../models/easyRepo.js");

const Router=express.Router();

Router.get('/easyRepo',async(req,res)=>{
    try{
        const easyRepositories=await easyRepo.find();
        res.json(easyRepositories);
    }catch (error) {
        console.error('Error fetching repositories:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
});

module.exports=Router;