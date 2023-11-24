const express = require('express');
const router = express.Router();
const User=require('../models/Userdetails');

router.post('/adduser', async (req, res) => {

    try {
       /*  const { name, number, city, latitude, longitude, landmark } = req.body; */
        const newuser = new User(req.body);
        const saveduser = await newuser.save();

        res.status(201).send({ success: true, saveduser });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }


})


router.get('/getuser', async (req, res) => {

    try {
        
        
        let detail =await User.find({  });

        if (detail) {
            res.json({ success: true, detail });
        }
        else {
            res.status(500).send({ success: false, msg: "Not found item in cart" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, msg: "something wen wrong" });

    }


})

module.exports=router;