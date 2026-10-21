const mongoose = require("mongoose");
async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongodb Connected successfully");
    } catch (error) {
        console.log("MongodB conncetion failed", error.message);
        process.exit(1);
        
    }
    
}

module.exports = connectDB;