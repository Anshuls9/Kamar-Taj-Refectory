const Booking = require("../models/Booking");
const Meal = require("../models/MealModel");

const createBooking = async (req,res) => {
    try {
        const { StudentRegNo,mealId} = req.body;

        if(!StudentRegNo || !mealId) {
            res.status(400).json({
                success: false,
                message: "Student Reg number and Meal id required",
            });
        }

        const meal = await Meal.findOneAndUpdate(
            { _id: mealId, seatsLeft: {$gt: 0}},
            {$inc: { seatsLeft:-1 }},
            {new : true}
        );

        if(!meal) {
            return res.status(400).json({
                success: false,
                message: "Meal not found or seats unavailable",
            });
        }

        const booking = await Booking.create({
            StudentRegNo,
            meal: meal._id,
        });
        res.status(201).json({
            success: true,
            message: "Meal booked successfully",
            booking,
        })

    } catch(err) {
        res.status(500).json({
            success: false,
            message: "Booking failed"
        });
    }
};

module.exports = {createBooking};