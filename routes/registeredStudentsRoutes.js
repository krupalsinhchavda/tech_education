const express = require('express');
const router = express.Router();
const registeredStudentsController = require('../controllers/registeredStudentsController');

// Routes for managing registered students
router.post('/', registeredStudentsController.addStudent);              // Add a new student
router.put('/:id', registeredStudentsController.updateStudent);         // Update a student by ID
router.delete('/:id', registeredStudentsController.deleteStudent);      // Delete a student by ID
router.get('/:id', registeredStudentsController.getStudentById);        // Get a student by ID
router.get('/', registeredStudentsController.getAllStudents);           // Get all students

module.exports = router;
