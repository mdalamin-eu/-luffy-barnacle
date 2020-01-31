const express = require('express');
const router = express.Router();
const auth = require('./../../middleware/auth');
const User = require('../../models/User');
const { check,validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
// @route  Get api/auth
// @desc    Test route
// @access   public 
router.get('/', auth, async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route  Get api/users
// @desc    Authentication user and token
// @access   public 
router.post(
    '/',
[
    check('email','Please include a valid email').isEmail(),
    check('password','Password is Required').exists()
],
 async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }

    const { email, password } = req.body;
    try{
    // See if user exits
        let user = await User.findOne({ email });
        if(!user) {
            res.status(400).json({errors: [{ msg: 'Invalid Credentails'}] });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentails'}] });
        }

        const payload = {
            user: {
                id: user.id
            }
        } 
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 360000 },
            (err, token) => {
                if(err) throw err;
                res.json({ token });
            });
    } catch(err){
        console.error(err.message);
        res.status(600).send('Server Error');
    }
});
module.exports = router; 