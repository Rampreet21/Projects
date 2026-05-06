const user = require('../models/users'); 

const getUsers = async (req, res) => {
    let userData = await user.find();
    res.send(userData);
}

const register = async (req, res) => {
    let data = req.body;
    let userExists = await user.findOne({ email: data.email });
    if(userExists) {
        return res.status(400).send("User already exists");
    }
    let newUser = await user.create(data);
    res.send(newUser);
    console.log("User registered successfully");
};

module.exports = {
    getUsers,
    register
}