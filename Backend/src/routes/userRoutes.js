//this section main task in to assigning roles and responsiblity
// : handles user endpoints, such as profile and dashboards.
const express =require("express");
const router =  express.Router();

const {
    protect,
    allowRoles,
} = require("../middleware/authMiddleware");

// /me -> it gives the detail of logged user
router.get("/me",protect, (req,res)=>{
    res.json({user: req.user});
});

router.get(
    "/staff-dashboard",
    protect,
    allowRoles("staff", "admin"),
    (req, res) => {
        res.json({message:"Welcome to the staff dashboard"});

    }
);

router.get(
    "/admin-dashboard",
    protect,
    allowRoles("admin"),
    (req, res) => {
        res.json({message: "Welcome to the admin dashboard"});

    }
);
module.exports = router; //move into server.js