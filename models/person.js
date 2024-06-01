const mongoose = require('mongoose');

//define schema 
//kind of info of tables in database
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    work:{
        type: String,
        enum : ['chef','waiter','manager'],
        required: true
    },
    mobile:
    {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String
    },
    salary:{
        type: Number,
        required:true
    }
});

//create models used for performing database operation tables
const Person = mongoose.model('Person',personSchema);
module.exports = Person;