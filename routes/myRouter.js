const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();

router.route('/').get(myController.inicio); 
router.route('/Datos').get(myController.datos); 
module.exports = router;