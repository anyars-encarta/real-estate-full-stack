const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../lib/prisma.js');

const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // HAS THE PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // CREATE A NEW USER AND SAVE TO DB
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        console.log(newUser);

        res.status(201).json({ message: "User created successfully" })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Failed to create user" })
    }
};

const login = async (req, res) => {
    const { username, password } = req.body

    try {
        // CHECK IF USER EXISTS
        const user = await prisma.user.findUnique({
            where: { username}
        })

        if(!user) return res.status(401).json({ message: "Invalid credentials!"});

        // CHECK IF PASSWORD IS CORRECT
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) return res.status(401).json({ message: "Invalid credentials!"});

        // GENERATE COOKIE TOKEN AND SEND TO USER
        // res.setHeader("Set-Cookie", "test=" + "myValue").json({message: "Login successful"})
        const age = 1000 * 60 * 60 * 24 * 7;

        const token = jwt.sign({
            id: user.id, 
            isAdmin: false,
        }, process.env.JWT_SECRET_KEY, {expiresIn: age});

        const { password: userPassword, ...userInfo } = user;

        res.cookie("token", token, {
            httpOnly: true,
            // secure: true,
            maxAge: age,
        }).status(200).json(userInfo)
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Failed to login!" })
    }
};

const logout = (req, res) => {
    res.clearCookie("token").status(200).json({message: "Logged out successfully!"});
};

module.exports = { register, login, logout };