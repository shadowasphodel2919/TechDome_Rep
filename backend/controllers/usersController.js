const User = require('../models/User')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc  Get all users (without passwords)
// @route GET /users
// @access Private (admin)
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.findAll()
    if (!users?.length)
        return res.status(400).json({ message: 'No users found' })
    res.json(users)
})

// @desc  Create a new user
// @route POST /users
// @access Public
const createNewUser = asyncHandler(async (req, res) => {
    const { username, email, password, mobile, fields } = req.body

    if (!username || !email || !password || !mobile || !Array.isArray(fields) || !fields.length)
        return res.status(400).json({ message: 'All fields required' })

    // Check for duplicate username
    const dup = await User.existsByUsername(username)
    if (dup)
        return res.status(409).json({ message: 'Username already taken' })

    const hashedPwd = await bcrypt.hash(password, 10)

    const user = await User.create({
        username,
        email,
        password: hashedPwd,
        mobile,
        fields,
    })

    if (user) {
        res.status(201).json({ message: 'Account created successfully' })
    } else {
        res.status(400).json({ message: 'Invalid data received' })
    }
})

module.exports = { getAllUsers, createNewUser }