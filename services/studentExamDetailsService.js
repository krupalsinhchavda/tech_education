const dbconnection = require('../config/database');

// Add new student exam details
const addStudentExamDetails = async (examData) => {
    const { StudentId, CorrectAnswers, TotalMarks, Grade, ExamDate } = examData;
    const query = 'INSERT INTO studentexamdetails (StudentId, CorrectAnswers, TotalMarks, Grade, ExamDate) VALUES (?, ?, ?, ?, ?)';
    const values = [StudentId, CorrectAnswers, TotalMarks, Grade, ExamDate];

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error, results) => {
            if (error) return reject(error);
            resolve({ StudentExamDetailsId: results.insertId });
        });
    });
};

// Update student exam details by ID
const updateStudentExamDetails = async (StudentExamDetailsId, examData) => {
    const { CorrectAnswers, TotalMarks, Grade, ExamDate } = examData;
    const query = 'UPDATE studentexamdetails SET CorrectAnswers = ?, TotalMarks = ?, Grade = ?, ExamDate = ? WHERE StudentExamDetailsId = ?';
    const values = [CorrectAnswers, TotalMarks, Grade, ExamDate, StudentExamDetailsId];

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error, results) => {
            if (error) return reject(error);
            resolve({ affectedRows: results.affectedRows });
        });
    });
};

// Delete student exam details by ID
const deleteStudentExamDetails = async (StudentExamDetailsId) => {
    const query = 'DELETE FROM studentexamdetails WHERE StudentExamDetailsId = ?';

    return new Promise((resolve, reject) => {
        dbconnection.query(query, [StudentExamDetailsId], (error, results) => {
            if (error) return reject(error);
            resolve({ affectedRows: results.affectedRows });
        });
    });
};

// Get student exam details by ID
const getStudentExamDetailsById = async (StudentExamDetailsId) => {
    const query = 'SELECT * FROM studentexamdetails WHERE StudentExamDetailsId = ?';

    return new Promise((resolve, reject) => {
        dbconnection.query(query, [StudentExamDetailsId], (error, results) => {
            if (error) return reject(error);
            resolve(results[0]);
        });
    });
};

// Get all student exam details
const getAllStudentExamDetails = async () => {
    const query = 'SELECT * FROM studentexamdetails';

    return new Promise((resolve, reject) => {
        dbconnection.query(query, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

module.exports = {
    addStudentExamDetails,
    updateStudentExamDetails,
    deleteStudentExamDetails,
    getStudentExamDetailsById,
    getAllStudentExamDetails,
};
