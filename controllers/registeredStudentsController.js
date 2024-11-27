const registeredStudentsService = require('../services/registeredStudentsService');

// Add a new student
const addStudent = async (req, res) => {
    try {
        const data = req.body;
        const result = await registeredStudentsService.addStudentAndUser(data);
        res.status(201).json({ message: "Student added successfully", data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a student by ID
const updateStudent = async (req, res) => {
    try {
        const StudentId = req.params.id;
        const data = req.body;
        const result = await registeredStudentsService.updateStudent(StudentId, data);
        res.status(200).json({ message: "Student updated successfully", data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a student by ID
const deleteStudent = async (req, res) => {
    try {
        const StudentId = req.params.id;
        const result = await registeredStudentsService.deleteStudent(StudentId);
        res.status(200).json({ message: "Student deleted successfully", data: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a student by ID
const getStudentById = async (req, res) => {
    try {
        const StudentId = req.params.id;
        const result = await registeredStudentsService.getStudentById(StudentId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all students
const getAllStudents = async (req, res) => {
    try {
        const result = await registeredStudentsService.getAllStudents();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get students by BranchID
const getStudentsByBranch = async (req, res) => {
    const { branchID } = req.params;

    try {
        if (!branchID) {
            return res.status(400).json({ error: "BranchID is required" });
        }

        const result = await registeredStudentsService.getStudentsByBranch(branchID);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addStudent,
    updateStudent,
    deleteStudent,
    getStudentById,
    getAllStudents,
    getStudentsByBranch
};
