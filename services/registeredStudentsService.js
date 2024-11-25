const dbconnection = require('../config/database');

// Add a new student
const addStudent = async (data) => {
    const { FormNo, CenRegNo, AdmissionDate, CourseID, RoleId, BranchId, RegFees, Surname, Name,
        SonOfDaughterOf, BirthDate, GenderId, Address, City, State, Pincode, MobileNumber,
        AlternateMobileNumber, Password, StudentImage, CourseStartDate, CourseEndDate } = data;

    const query = `INSERT INTO registeredstudents (FormNo, CenRegNo, AdmissionDate, CourseID, RoleId, BranchId, 
                  RegFees, Surname, Name, SonOfDaughterOf, BirthDate, GenderId, Address, City, State, Pincode, 
                  MobileNumber, AlternateMobileNumber, Password, StudentImage, CourseStartDate, CourseEndDate)
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [FormNo, CenRegNo, AdmissionDate, CourseID, RoleId, BranchId, RegFees, Surname, Name,
        SonOfDaughterOf, BirthDate, GenderId, Address, City, State, Pincode, MobileNumber,
        AlternateMobileNumber, Password, StudentImage, CourseStartDate, CourseEndDate];

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error, results) => {
            if (error) return reject(error);
            resolve({ StudentId: results.insertId });
        });
    });
};

// Update a student by ID
const updateStudent = async (StudentId, data) => {
    const { FormNo, CenRegNo, AdmissionDate, CourseID, RoleId, BranchId, RegFees, Surname, Name,
        SonOfDaughterOf, BirthDate, GenderId, Address, City, State, Pincode, MobileNumber,
        AlternateMobileNumber, Password, StudentImage, CourseStartDate, CourseEndDate } = data;

    const query = `UPDATE registeredstudents SET FormNo = ?, CenRegNo = ?, AdmissionDate = ?, CourseID = ?, 
                   RoleId = ?, BranchId = ?, RegFees = ?, Surname = ?, Name = ?, SonOfDaughterOf = ?, 
                   BirthDate = ?, GenderId = ?, Address = ?, City = ?, State = ?, Pincode = ?, MobileNumber = ?, 
                   AlternateMobileNumber = ?, Password = ?, StudentImage = ?, CourseStartDate = ?, CourseEndDate = ?
                   WHERE StudentId = ?`;

    const values = [FormNo, CenRegNo, AdmissionDate, CourseID, RoleId, BranchId, RegFees, Surname, Name,
        SonOfDaughterOf, BirthDate, GenderId, Address, City, State, Pincode, MobileNumber,
        AlternateMobileNumber, Password, StudentImage, CourseStartDate, CourseEndDate, StudentId];

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error, results) => {
            if (error) return reject(error);
            resolve({ affectedRows: results.affectedRows });
        });
    });
};

// Delete a student by ID
const deleteStudent = async (StudentId) => {
    const query = `DELETE FROM registeredstudents WHERE StudentId = ?`;

    return new Promise((resolve, reject) => {
        dbconnection.query(query, [StudentId], (error, results) => {
            if (error) return reject(error);
            resolve({ affectedRows: results.affectedRows });
        });
    });
};

// Get a student by ID
const getStudentById = async (StudentId) => {
    const query = `SELECT * FROM registeredstudents WHERE StudentId = ?`;

    return new Promise((resolve, reject) => {
        dbconnection.query(query, [StudentId], (error, results) => {
            if (error) return reject(error);
            resolve(results[0]);
        });
    });
};

// Get all students
const getAllStudents = async () => {
    const query = `SELECT * FROM registeredstudents`;

    return new Promise((resolve, reject) => {
        dbconnection.query(query, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

module.exports = {
    addStudent,
    updateStudent,
    deleteStudent,
    getStudentById,
    getAllStudents,
};
