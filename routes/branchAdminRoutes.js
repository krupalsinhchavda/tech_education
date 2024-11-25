const express = require('express');
const router = express.Router();
const branchAdminController = require('../controllers/branchAdminController');

// Routes for branch admin management
router.post('/', branchAdminController.addBranchAdmin);          // Add a new branch admin
router.put('/:id', branchAdminController.updateBranchAdmin);     // Update a branch admin by ID
router.delete('/:id', branchAdminController.deleteBranchAdmin);  // Delete a branch admin by ID
router.get('/:id', branchAdminController.getBranchAdminById);    // Get a branch admin by ID
router.get('/', branchAdminController.getAllBranchAdmins); // Get all branch admins

module.exports = router;
