const user = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//register a student
exports.register = async (req,res) => {
    try{
        const {name, email, password } = req.body;

        if(!name || !email || !password ) {
            return res.status(400).json({
                message: "Name, email and password are required",
            });
        }

        if(password.length< 8){
            return res.status(400).json ({
                message: "Password must contain at least 8 characters",
            });
        }

        const normalizedEmail = email.trim().tolowerCase();
        const existingUser = await User.findOne({
            email: normalizedEmail,
        });

        if(existingUser){
            return res.status(409).json({
                message: " A accound with this email is already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            name:name.trim(),
            email:normalizedEmail,
            password:hashedPassword,
            role : "student",
        });

        return res.status(201).json({
            message:"student registered successffully",
            user: {
                id:user._id,
                name:user.name,
                email:user.email,
                role: user.role,
            },

        });

    } catch (error) {
        if(error.code === 11000){
            return res.status(409).json({
                message:"An account with this email already exists",
            });
        }
        console.error("Registration error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
    }
};

//login

// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password ){
            return res.status(400).json({
                message: "Email and Password are required",
            });
        }
        //finding user in mongodb
        const user  = await User.findOne({
            email: email.trim().tolowerCase(),
        }).select("+password");//........................3
        if(!user){
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.statuso(401).json({
                message: "Invalid  password",
            });
        }

        const token = jwt.sign(//creating jwt login token
            {userId: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );

        return res.status(200).json({
            message: "Login successful",
            token,
            users: {
                id: user._id,
                name: user.name,
                email:user.email,
                role: user.role,
            },
        });
    

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};