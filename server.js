const express = require('express')
const app = express()
const db = require('./db');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());// store data in req.body 

app.get('/', function (req, res) {
res.send('Welcome to my hotel...How i can help you ?')
})

//post route to add a person
app.get('/chicken',(req, res)=>{
    res.send('sure sir,i would love to serve chicken')
})

app.get('/idli',(req, res)=>{
    var customized_idli = {
        name: 'rava idli',
        size:'10cm diamter',
        is_sambhar:true,
        is_chutney:false
    }
    res.send(customized_idli)
})

app.post('/items',(req, res)=>{
    res.send("save data");
})

//import personRoutes
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');
//use personRoutes
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
    console.log('Listenin on port 3000');
})
