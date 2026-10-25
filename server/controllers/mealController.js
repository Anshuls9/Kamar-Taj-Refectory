const Meal = require("../models/MealModel");
const getMeals = async(req,res) => {
    try {
        const meals = await Meal.find(); //brings the data
        res.status(200).json({
            success: true,
            meals,
        });

    } catch(err) {
        res.status(500).json({
            success: false,
            message: "failed to bring",
        });
    }
};

module.exports = { getMeals };