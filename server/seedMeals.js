require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Meal = require("./models/MealModel");

const meals = [
    {
        id: "breakfast",
        name: "Breakfast",
        time: "7:30 AM – 9:00 AM",
        menu: ["Poha", "Bread", "Boiled Eggs", "Tea"],
        image: "/breakfast.jpeg",
        price: 40,
        seatsLeft: 45,
    },
    {
        id: "lunch",
        name: "Lunch",
        time: "12:00 PM – 2:00 PM",
        menu: ["Rice", "Roti", "Dal", "Paneer"],
        image: "/lunch.jpeg",
        price: 70,
        seatsLeft: 28,
    },
    {
        id: "dinner",
        name: "Dinner",
        time: "7:00 PM – 9:00 PM",
        menu: ["Roti", "Rice", "Mixed Vegetables", "Dal"],
        image: "/dinner.jpeg",
        price: 60,
        seatsLeft: 36,
    },
];

async function seedMeals() {
    try {
        await connectDB();
        await Meal.deleteMany({});
        await Meal.insertMany(meals);

    } catch(error) {
        console.error("Seeding failed",error.message);
    }
}