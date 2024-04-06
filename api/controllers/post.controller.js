import prisma from '../lib/prisma.js';

export const getPosts = async (req, res) => {
    
    try {

        res.status(200).json()
    } catch(e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to get posts'})
    }
};

export const getPost = async (req, res) => {
    
    try {

        res.status(200).json()
    } catch(e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to get post'})
    }
};

export const addPost = async (req, res) => {
    
    try {

        res.status(200).json()
    } catch(e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to add post'})
    }
};

export const editPost = async (req, res) => {
    
    try {

        res.status(200).json()
    } catch(e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to update post'})
    }
};

export const deletePost = async (req, res) => {
    
    try {

        res.status(200).json()
    } catch(e) {
        console.log(e)
        res.status(500).json({ message: 'Failed to delete post'})
    }
};