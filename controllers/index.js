// import calculateAge and use it
const calculateAge = require("../services/calculateAge");

// use the calculateAge function
exports.index = (req, res) => {
    const dob = req.query.dob;
    const age = calculateAge(dob);

    // Check for errors
    if (!dob) {
        res.status(400).send("Please provide a date of birth");
    } else if (age < 0) {
        res.status(400).send("Please provide a valid date of birth");
    } else {
        res.send(age);
    }
}

