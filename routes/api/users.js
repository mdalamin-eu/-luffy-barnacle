const express = require('express');
const router = express.Router();

// @route  Get api/users
// @desc    Reguster User
// @access   public 
router.post('/',(req,res) => {
    console.log(req.body);
    res.send('User Route');
});

module.exports = router;