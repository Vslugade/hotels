const mongoose = require('mongoose');

//define schema 
//kind of info of tables in database
const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste:{
        type: String,
        enum : ['Spicy','Sour','Sweet'],
        required: true
    },
    is_drink:
    {
        type: Boolean,
        default: false
    },
    ingredients:{
        type: [String],
        default: []
    },
    num_sales:{
        type: Number,
        default: 0
    }
});

//create models used for performing database operation tables
const Menu = mongoose.model('Menu',menuSchema);
module.exports = Menu;