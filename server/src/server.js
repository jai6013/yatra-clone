//connect to express
const express = require("express");
const app = express();
const connect = require('./config/dbconfig')
const cors = require("cors");
const PORT = process.env.PORT || 2345;

// controllers
const userController = require('./controllers/user.controller');
const placeController = require("./controllers/place.controller.js");
const bookingController = require("./controllers/booking.controller.js");



//middlewares
app.use(cors())
app.use(express.json());


//routes
app.use("/users", userController);
app.use("/places", placeController);
app.use("/bookings", bookingController);



//connect
app.listen(PORT, async () => {
  try {
    await connect();
    console.log("listening on:", PORT);
  } catch (err) {
    console.log(err);
  }
});