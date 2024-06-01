const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

router.post('/',async (req,res)=>{
    // const data = req.body;
    // ///create new person document using model
    // const newPerson =new Person(data);
    // //save new person
    // newPerson.save((error,savedperson)=>
    // {
    //     if(error)
    //     {
    //         console.log("Error saving person",error);
    //         res.status(500).json(error);
    //     }
    //     else{
    //         console.log("data saved successfully");
    //         res.status(201).json(savedperson);
    //     }
    // })
    try{
        const data =req.body;
        //create new person document using model
        const newPerson =new Person(data);
        //save new person
        const savedperson = await newPerson.save();
        console.log("data saved successfully");
        res.status(201).json(savedperson);
    }
    catch(err){
        console.log("Error saving person",err);
        res.status(500).json(error);
    }
})

router.get('/',async (req,res)=>{
    try{
        const data = await Person.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log("Error saving person",err);
        res.status(500).json(error);
    }
})

router.get('/:workType',async (req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType=='chef' || workType=='Manager' || workType=='waiter'){
            const response = await Person.find({work:workType});
            console.log("data fetched");
            res.status(200).json(response);
        }
        else{
            res.status(400).json({error:"Invalid work type"});
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
            return res.status(404).json({error:"person not found"});
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
            return res.status(404).json({error:"person not found"});
        }
        res.status(200).json({messege: 'data deleted successfully'});
    }
    catch(err){
        console.log("Error deleting person",err);
        res.status(500).json(error);
    }
})
module.exports = router;