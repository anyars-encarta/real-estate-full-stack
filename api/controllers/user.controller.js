const bcrypt = require('bcrypt');
const prisma = require("../lib/prisma.js");

const getUsers = async (req, res) => {
    console.log('It works')
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users)
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to get users!' })
    };
};

const getUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await prisma.user.findUnique({
            where: { id }
        });
        res.status(200).json(user)
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to get user!' })
    };
};


const updateUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    const { password, avatar, ...inputs } = req.body;

    if (id !== tokenUserId) {
        return res.status(403).json({ message: 'Not Authorized!' })
    }

    let updatedPassword = null;

    try {
        if (password) {
            updatedPassword = await bcrypt.hash(password, 10)
        }
        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                ...inputs,
                ...(updatedPassword && { password: updatedPassword }),
                ...(avatar && { avatar }),
            },
        });

        const { password: userPassword, ...rest } = updatedUser
        res.status(200).json(rest)
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to update user!' })
    };
};


const deleteUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;

    if (id !== tokenUserId) {
        return res.status(403).json({ message: 'Not Authorized!' })
    }

    try {
        await prisma.user.delete({
            where: { id }
        })

        res.status(200).json({ message: 'User deleted successfully!' })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to delete user!' })
    };
};

const savePost = async (req, res) => {
    const postId = req.body.postId;
    const tokenUserId = req.userId;

    try {
        const savedPost = await prisma.savedPost.findUnique({
            where: {
                userId_postId: {
                    userId: tokenUserId,
                    postId,
                },
            },
        });

        if (savedPost) {
            await prisma.savedPost.delete({
                where: {
                    id: savedPost.id,
                },
            });

            res.status(200).json({ message: 'Post removed successfully!' })
        } else {
            await prisma.savedPost.create({
                data: {
                    userId: tokenUserId,
                    postId,
                },
            });

            res.status(200).json({ message: 'Post saved successfully!' })
        }

    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to save post!' })
    }
};

const profilePosts = async (req, res) => {
    const tokenUserId = req.userId;

    try {
        const userPosts = await prisma.post.findMany({
            where: { userId: tokenUserId },
        });

        const saved = await prisma.savedPost.findMany({
            where: { userId: tokenUserId },
            include: {
                post: true,
            }
        });

        const savedPosts = saved.map((item) => item.post)

        res.status(200).json({ userPosts, savedPosts })
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to get profile posts!' })
    };
};

const getNotificationNumber = async (req, res) => {
    const tokenUserId = req.userId;

    try {
        const number = await prisma.chat.count({
            where: {
                userIDs: {
                    hasSome: [tokenUserId],
                },
                NOT: {
                    seenBy: {
                        hasSome: [tokenUserId],
                    },
                },
            },
        });

        res.status(200).json(number);
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to get notifications!' })
    };
};

module.exports = { getUsers, getUser, updateUser, deleteUser, savePost, profilePosts, getNotificationNumber }