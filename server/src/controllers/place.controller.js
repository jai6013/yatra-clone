//PLACE CONTROLLER
var axios = require("axios").default;

//create a router
const express = require("express");
const router = express.Router();

//models
const Place = require("../models/place.model.js");

//Http Verbs will come here GET, GET by id, POST, PATCH, DELETE

// post place to the database 
router.post("/", async function (req, res) {
    try {
        const post = await Place.create(req.body);
        return res.status(201).send(post);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get all places from database
router.get("/", async function (req, res) {
    try {
        const get = await Place.find().lean().exec();
        return res.status(200).send(get);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get place by Id
router.get("/:id", async function (req, res) {
    try {
        const getById = await Place.findById().lean().exec();
        return res.status(200).send(getById);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get place by name
router.get("/query/:name", async function (req, res) {
    try {
        const getByName = await Place.find({placeName: req.params.name}).lean().exec();
        return res.status(200).send(getByName);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// search place by name
router.get("/search/:place", function (req, res) {

    //Get Airport Data
    var options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/airports/search',
        params: {query: req.params.place, locale: 'en_US'},
        headers: {
          'x-rapidapi-host': "travel-advisor.p.rapidapi.com",
          'x-rapidapi-key': "1aaf509890mshdf5875ff569dc0ap1a6a36jsn5ef23f045ff9"

        }
      }; 
      try{

          axios.request(options).then(function (response) {
              const airport = response.data[0];
              console.log("workng",airport)
              res.status(200).send(airport)
            })
        }catch(err){
            res.status(400).send(err)
        }

})


// Update the place in the database
router.patch("/:id", async function (req, res) {
    try {
        const update = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(update);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// delete the place from the database
router.delete("/:id", async function(req, res) {
    try {
        const remove = await Place.findByIdAndDelete(req.params.id);
        return res.status(204).send(remove);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

//export
module.exports = router;
