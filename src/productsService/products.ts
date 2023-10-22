const express = require('express');
const router = express.Router();

router.get('/all', (req, res) => {
    res.status(200).json({message: "You have reached products API"});
});

module.exports = router;