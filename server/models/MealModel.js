const mongoose = require("mongoose");
const mealSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        menu: [String],
        image: String,
        price: {
            type: Number,
            required: true,
        },
        seatsLeft: {
            type: Number,
            required: true,
        },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Meal",mealSchema);
//Meal is the model name