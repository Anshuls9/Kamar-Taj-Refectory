const checkHealth = (req,res) => {
    res.status(200).json({
        success: true,
        message: "Kamar-Taj API is healthy",
    });
};

module.exports = { checkHealth };