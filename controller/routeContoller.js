const express = require('express')
const router = express.Router()
const dataController = require('../controller/dataController')
const apiController = require('../controller/apiController')

// Index 
router.get('/', dataController.index, apiController.index)
// Create 
router.post('/', dataController.create, apiController.index)
// Show 
router.get('/:id', dataController.show, apiController.show)