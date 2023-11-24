const express = require("express");
const app = express();
const mongoose=require('mongoose');//importing mongoose 

const port = process.env.PORT || 8000

const cors = require('cors')
app.use(cors());
require('dotenv').config();

app.use(express.json());

app.use('/api', require('./routes/detail'));


/* connectiontomongodb(); */
app.get('/', (req, res) => {
    res.send('Hey Matriye !');
})

mongoose.connect(process.env.URI).then(()=>{console.log("db connected")}).catch((err)=>{console.log(err)});


app.listen(port, () => {
    console.log("app listening");
});



