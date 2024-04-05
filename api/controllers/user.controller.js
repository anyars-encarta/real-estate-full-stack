import bcrypt from 'bcrypt';
import prisma from "../lib/prisma.js";

export const getUsers = async (req, res) => {
    console.log('It works')
    try {
        const users =  await prisma.user.findMany();
        res.status(200).json(users)
    } catch(e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to get users!'})
    };
};

export const getUser = async (req, res) => {
    const id = req.params.id
    try {
        const user =  await prisma.user.findUnique({
            where: { id }
        });
        res.status(200).json(user)
    } catch(e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to get user!'})
    };
};


export const updateUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    const { password, ...inputs } = req.body;

    if(id !== tokenUserId) {
        return res.status(403).json({ message: 'Not Authorized!'})
    }

    let updatedPassword = null;

    try {
        if(password) {
            updatedPassword = await bcrypt.hash(password, 10)
        }
        const updatedUser =  await prisma.user.update({
            where: { id }, 
            data: {
                ...inputs,
                ...(updatedPassword && { password: updatedPassword }),
            },
        });

        res.status(200).json(updatedUser)
    } catch(e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to update user!'})
    };
};


export const deleteUser = async (req, res) => {
    try {

    } catch(e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to delete user!'})
    };
};