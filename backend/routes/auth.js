const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')

const {body, validationResult} = require('express-validator')

router.post('/', [
    body('name', 'Enter a valid name').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({min: 5}),
], async (req, res) => {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        let user = await User.findOne({email: req.body.email});
        if (user) {
            return res.status(400).json({error: "Sorry a user with this email is already registered"})
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });
        res.json(user)
    } catch(error) {
        res.status(500).json(error)
    }
})

module.exports = router