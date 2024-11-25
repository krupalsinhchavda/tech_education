const dbconnection = require('../config/database');

// Add a new branch admin
const addBranchAdmin = async (adminData) => {
    const { FirstName, LastName, PhoneNumber, Address, Email, Image, UserName, Password, IsActive, BranchID, RoleId } = adminData;
    const query = `
        INSERT INTO branchadmin 
        (FirstName, LastName, PhoneNumber, Address, Email, Image, UserName, Password, IsActive, BranchID, RoleId) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [FirstName, LastName, PhoneNumber, Address, Email, Image, UserName, Password, IsActive, BranchID, RoleId];

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error, results) => {
            if (error) return reject(error);
            resolve({ BranchAdminID: results.insertId });
        });
    });
};

// Update a branch admin by ID
const updateBranchAdmin = async (BranchAdminID, adminData) => {
    const { FirstName, LastName, PhoneNumber, Address, Email, Image, UserName, Password, IsActive, BranchID, RoleId } = adminData;
    const query = `
        UPDATE branchadmin 
        SET FirstName = ?, LastName = ?, PhoneNumber = ?, Address = ?, Email = ?, Image = ?, 
            UserName = ?, Password = ?, IsActive = ?, BranchID = ?, RoleId = ?
        WHERE BranchAdminID = ?`;
    const values = [FirstName, LastName, PhoneNumber, Address, Email, Image, UserName, Password, IsActive, BranchID, RoleId, BranchAdminID];

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error, results) => {
            if (error) return reject(error);
            resolve({ affectedRows: results.affectedRows });
        });
    });
};

// Delete a branch admin by ID
const deleteBranchAdmin = async (BranchAdminID) => {
    const query = 'DELETE FROM branchadmin WHERE BranchAdminID = ?';

    return new Promise((resolve, reject) => {
        dbconnection.query(query, [BranchAdminID], (error, results) => {
            if (error) return reject(error);
            resolve({ affectedRows: results.affectedRows });
        });
    });
};

// Get a branch admin by ID
const getBranchAdminById = async (BranchAdminID) => {
    const query = 'SELECT * FROM branchadmin WHERE BranchAdminID = ?';

    return new Promise((resolve, reject) => {
        dbconnection.query(query, [BranchAdminID], (error, results) => {
            if (error) return reject(error);
            resolve(results[0]);
        });
    });
};

// Get all branch admins
const getAllBranchAdmins = async () => {
    const query = 'SELECT * FROM branchadmin';

    return new Promise((resolve, reject) => {
        dbconnection.query(query, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

module.exports = {
    addBranchAdmin,
    updateBranchAdmin,
    deleteBranchAdmin,
    getBranchAdminById,
    getAllBranchAdmins, // Add this to the exports
};
