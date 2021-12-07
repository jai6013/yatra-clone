//TRANSACTION CONTROLLER

//create a router
const { request } = require("express");
const express = require("express");
const router = express.Router();


//models
const Booking = require("../models/booking.model.js");

//Http Verbs will come here GET, GET by id, POST, PATCH, DELETE

// postBooking to the database 

router.post("/", async function (req, res) {
    try {
        const post = await Booking.create(req.body);
        return res.status(201).send(post);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

// get all Booking from database

router.get("/", async function (req, res) {
    try {
        const get = await Booking.find().lean().exec();
        return res.status(200).send(get);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

// get Booking by Id

router.get("/:id", async function (req, res) {
    try {
        const getById = await Booking.findById().lean().exec();
        return res.status(200).send(getById);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});


// Update the Booking in the database

router.patch("/:id", async function (req, res) {
    try {
        const update = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(update);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

// delete the Booking from the database

router.delete("/:id", async function(req, res) {
    try {
        const remove = await Booking.findByIdAndDelete(req.params.id);
        return res.status(204).send(remove);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

//get all Booking of a user
router.get("/user/:id", async function (req, res) {
    console.log(req.params.id)
    try {
        const bookings = await Booking.find().lean().exec();
        bookings.filter(e => e.user._id === req.params.id)
        console.log(bookings)
        return res.status(200).send(bookings);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});

router.post("/allBooking", async function(req,res){
    try{
        const {originCode, destinationCode} = req.body;
        const API = "78fa726afb40b8998eb9997120d9f338"
        var axios = require('axios')
        axios.get(`http://api.aviationstack.com/v1/flights?access_key=${API}&dep_iata=${originCode}&arr_iata=${destinationCode}`)
        .then((response)=> {
            let data = response.data.data;
            data.map((e) =>
            e.price = Math.floor(Math.random()*(5000 - 2500) + 2500)
            )
            console.log(data)
            res.status(200).send(data)
        }
        )
    }catch(err){
        return res.status(400).send(err)
    }
})

//export
module.exports = router;
