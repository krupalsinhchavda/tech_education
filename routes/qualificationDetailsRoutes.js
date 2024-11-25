const express = require('express');
const router = express.Router();
const qualificationDetailsController = require('../controllers/qualificationDetailsController');

// Routes for managing qualification details
router.post('/', qualificationDetailsController.addQualificationDetail);           // Add a new qualification detail
router.put('/:id', qualificationDetailsController.updateQualificationDetail);      // Update a qualification detail by ID
router.delete('/:id', qualificationDetailsController.deleteQualificationDetail);   // Delete a qualification detail by ID
router.get('/:id', qualificationDetailsController.getQualificationDetailById);     // Get a qualification detail by ID
router.get('/', qualificationDetailsController.getAllQualificationDetails);        // Get all qualification details

module.exports = router;
