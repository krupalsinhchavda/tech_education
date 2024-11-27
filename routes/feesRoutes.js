const express = require('express');
const router = express.Router();
const feesController = require('../controllers/feesController');

// Routes for managing fee records
router.post('/', feesController.addFee);           // Add a new fee record
router.put('/:id', feesController.updateFee);      // Update a fee record by ID
router.delete('/:id', feesController.deleteFee);   // Delete a fee record by ID
router.get('/:id', feesController.getFeeById);     // Get a fee record by ID
router.get('/', feesController.getAllFees);        // Get all fee records
router.get('/branch/:branchID', feesController.getFeesByBranch);

module.exports = router;
