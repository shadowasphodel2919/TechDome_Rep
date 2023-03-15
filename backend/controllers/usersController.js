const User = require('../models/User')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

const getAllUsers = asyncHandler(async(req, res)=>{
    const users = await User.find().select('-password').lean()
    if(!users?.length)
    return res.status(400).json({ message: 'No users found'})
    res.json(users);
})

const createNewUser = asyncHandler(async(req, res)=>{
    const {username, email, password, mobile, fields } = req.body

    if(!username||!email||!password||!mobile||!Array.isArray(fields)||!fields.length)
    return res.status(400).json({message:'All fields required'})

    const dup = await User.findOne({username}).lean().exec()
    if(dup)
    return res.status(409).json({message: 'Duplicate Username'})

    const hashedPwd = await bcrypt.hash(password,10)

    const userObject = { username, email, "password": hashedPwd, mobile, fields}

    const user = await User.create(userObject)
    if(user){
        res.status(201).json({message: 'New User created'})
    }
    else{
        res.status(400).json({message: 'Invalid data'})
    }
})

module.exports = {
    getAllUsers,
    createNewUser
}