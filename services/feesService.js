const dbconnection = require('../config/database');

// Add a new fee record
const addFee = async (feeData) => {
    const { RegNo, CourseId, BranchId, Amount, Name } = feeData;
    const query = `INSERT INTO fees (RegNo, CourseId, BranchId, Amount, Name) VALUES (?, ?, ?, ?, ?)`;
    const values = [RegNo, CourseId, BranchId, Amount, Name];

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error, results) => {
            if (error) return reject(error);
            resolve({ FeesId: results.insertId });
        });
    });
};

// Update a fee record by ID
const updateFee = async (FeesId, feeData) => {
    const { RegNo, CourseId, BranchId, Amount, Name } = feeData;
    const query = `UPDATE fees 
                   SET RegNo = ?, CourseId = ?, BranchId = ?, Amount = ?, Name = ? 
                   WHERE FeesId = ?`;
    const values = [RegNo, CourseId, BranchId, Amount, Name, FeesId];

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error, results) => {
            if (error) return reject(error);
            resolve({ affectedRows: results.affectedRows });
        });
    });
};

// Delete a fee record by ID
const deleteFee = async (FeesId) => {
    const query = `DELETE FROM fees WHERE FeesId = ?`;

    return new Promise((resolve, reject) => {
        dbconnection.query(query, [FeesId], (error, results) => {
            if (error) return reject(error);
            resolve({ affectedRows: results.affectedRows });
        });
    });
};

// Get a fee record by ID
const getFeeById = async (FeesId) => {
    const query = `SELECT * FROM fees WHERE FeesId = ?`;

    return new Promise((resolve, reject) => {
        dbconnection.query(query, [FeesId], (error, results) => {
            if (error) return reject(error);
            resolve(results[0]);
        });
    });
};

// Get all fee records
const getAllFees = async () => {
    const query = `
        SELECT 
            f.FeesId,
            f.RegNo,
            f.Amount,
            f.CreatedOn,
            f.ModifiedOn,
            f.Name,
            b.BranchName,
            c.CourseName
        FROM 
            fees f
        JOIN 
            branch b ON f.BranchId = b.BranchId
        JOIN 
            course c ON f.CourseId = c.CourseId;
    `;

    return new Promise((resolve, reject) => {
        dbconnection.query(query, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

// Get fees by BranchID
const getFeesByBranch = async (branchID) => {
    const query = `SELECT * FROM studentfees WHERE BranchId = ?`;

    return new Promise((resolve, reject) => {
        dbconnection.query(query, [branchID], (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

module.exports = {
    addFee,
    updateFee,
    deleteFee,
    getFeeById,
    getAllFees,
    getFeesByBranch
};
