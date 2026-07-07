const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
    findUserByEmail,
    createUser
} = require("../models/authModel");

const register = async (req, res) => {
    try {
        const { fullName, email, password, role } = req.body;

        const existingUser = await findUserByEmail(email);

        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await createUser(
            fullName,
            email,
            hashedPassword,
            role || "customer"
        );

        res.status(201).json({
            message: "User registered successfully.",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
 

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password."
            });
        }

        const validPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!validPassword) {
            return res.status(400).json({
                message: "Invalid email or password."
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.json({
            message: "Login successful.",
            token
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    register,
    login
};