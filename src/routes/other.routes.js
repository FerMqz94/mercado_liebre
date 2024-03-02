// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

// '/' raiz
router.???('/', mainController.index); 
router.???('/search', mainController.search); 

module.exports = router;