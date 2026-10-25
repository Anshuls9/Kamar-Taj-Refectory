require("dotenv").config(); //loads .env

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");


const app = express();
app.use(cors());
app.use(express.json());

const mealRoutes = require("./routes/mealRoutes");
const healthRoutes = require("./routes/healthRoutes");

const bookingRoutes = require("./routes/bookingRoutes");

app.get("/",(req,res)=> {
    res.send("Kamar Taj backend is running");
});


app.use("/api/health",healthRoutes);
app.use("/api/meals",mealRoutes);
app.use("/api/bookings",bookingRoutes);

const PORT = process.env.PORT || 5001;

connectDB().then(() => {
    app.listen(PORT,() => {
        console.log(`Server running on PORT ${PORT}`);
    });
});