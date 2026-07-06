const home = (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Tsehay Mehari API"
    });
};

module.exports = { home };