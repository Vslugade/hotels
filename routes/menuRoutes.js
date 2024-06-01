const express = require('express');
const router = express.Router();
const Menu = require('./../models/menu');

router.post('/',async (req,res)=>{
    try{
        const data =req.body;
        //create new person document using model
        const newMenu =new Menu(data);
        //save new person
        const savedmenu = await newMenu.save();
        console.log("data saved successfully");
        res.status(201).json(savedmenu);
    }
    catch(err){
        console.log("Error saving menu",err);
        res.status(500).json(error);
    }
})



router.get('/',async (req,res)=>{
    try{
        const data = await Menu.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log("Error saving menu",err);
        res.status(500).json(error);
    }
})

router.get('/:Taste',async (req,res)=>{
    try{
        const Taste = req.params.Taste;
        if(Taste=='Spicy' || Taste=='Sour' || Taste=='Sweet'){
            const response = await Menu.find({taste:Taste});
            console.log("data fetched");
            res.status(200).json(response);
        }
        else{
            res.status(400).json({error:"Invalid menu type"});
        }
    }
    catch(err){
        console.log("Internel server error",err);
        res.status(500).json(error);
    }
})

router.put('/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const data = req.body;
        const response = await Person.findByIdAndUpdate(id,data,{
            new : true,
            runValidators : true,
        })

        if(!response)
        {
            return res.status(404).json({error:"menu not found"});
        }
        console.log("data updated successfully");
        res.status(200).json(response);
    }
    catch(err){
        console.log("Error updating person",err);
        res.status(500).json(error);
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await Person.findByIdAndDelete(id);
        console.log("data deleted successfully");
        if(!response)
        {
            return res.status(404).json({error:"menu not found"});
        }
        res.status(200).json({messege: 'data deleted successfully'});
    }
    catch(err){
        console.log("Error deleting menu",err);
        res.status(500).json(error);
    }
})

module.exports = router;