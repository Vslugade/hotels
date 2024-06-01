const mongoose = require('mongoose');

//define and import mongodb
const mongoUrl =  'mongodb://localhost:27017/hotels'

//set up mongodb connection
mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//get default connection
const db = mongoose.connection;//obj

//define event listenier
db.on('connected',() => {
    console.log('MongoDB connected');
});

db.on("error", (err) => {
    console.log("MongoDB connection error:",err);
});

db.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

//export database connection
module.exports=db;
