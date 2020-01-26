const express = require('express');
const router = express.Router();
const { check,validationResult } = require('express-validator/check');
// @route  Get api/users
// @desc    Reguster User
// @access   public 
router.post(
    '/',
[
    check('name','Name is requried')
    .not()
    .isEmpty(),
    check('email','Email is required').isEmail(),
    check('password','Please enter a password with 6 or more charracters').isLength({ min : 6})
],
(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    console.log(req.body);
    res.send('User Route');
});

module.exports = router;