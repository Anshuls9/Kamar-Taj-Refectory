const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema(
    {
        studentRegNo: {
            type: String,
            required: true,
        },
        meal: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Meal",
            required: true,
        },
        status: {
            type: String,
            enum: ["confirmed", "cancelled", "redeemed"],
            default: "confirmed",
        },
        bookingDate: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Booking",bookingSchema);