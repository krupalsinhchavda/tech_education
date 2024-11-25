const dbconnection = require('../config/database');

// Add a new qualification detail
const addQualificationDetail = async (data) => {
    const { StudentId, Board, Grade, PassingYear, QualificationImage } = data;
    const query = `INSERT INTO qualificationdetails (StudentId, Board, Grade, PassingYear, QualificationImage) 
                   VALUES (?, ?, ?, ?, ?)`;
    const values = [StudentId, Board, Grade, PassingYear, QualificationImage];

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error, results) => {
            if (error) return reject(error);
            resolve({ QualificationDetailsId: results.insertId });
        });
    });
};

// Update qualification detail by ID
const updateQualificationDetail = async (QualificationDetailsId, data) => {
    const { StudentId, Board, Grade, PassingYear, QualificationImage } = data;
    const query = `UPDATE qualificationdetails 
                   SET StudentId = ?, Board = ?, Grade = ?, PassingYear = ?, QualificationImage = ? 
                   WHERE QualificationDetailsId = ?`;
    const values = [StudentId, Board, Grade, PassingYear, QualificationImage, QualificationDetailsId];

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error, results) => {
            if (error) return reject(error);
            resolve({ affectedRows: results.affectedRows });
        });
    });
};

// Delete qualification detail by ID
const deleteQualificationDetail = async (QualificationDetailsId) => {
    const query = `DELETE FROM qualificationdetails WHERE QualificationDetailsId = ?`;

    return new Promise((resolve, reject) => {
        dbconnection.query(query, [QualificationDetailsId], (error, results) => {
            if (error) return reject(error);
            resolve({ affectedRows: results.affectedRows });
        });
    });
};

// Get qualification detail by ID
const getQualificationDetailById = async (QualificationDetailsId) => {
    const query = `SELECT * FROM qualificationdetails WHERE QualificationDetailsId = ?`;

    return new Promise((resolve, reject) => {
        dbconnection.query(query, [QualificationDetailsId], (error, results) => {
            if (error) return reject(error);
            resolve(results[0]);
        });
    });
};

// Get all qualification details
const getAllQualificationDetails = async () => {
    const query = `SELECT * FROM qualificationdetails`;

    return new Promise((resolve, reject) => {
        dbconnection.query(query, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

module.exports = {
    addQualificationDetail,
    updateQualificationDetail,
    deleteQualificationDetail,
    getQualificationDetailById,
    getAllQualificationDetails,
};
