const dbconnection = require('../config/database');

// Add a new student
const addStudent = async (data) => {
    const {
        FormNo, CenRegNo, AdmissionDate, courseId, RoleId, branchId, RegFees, Surname, Name,
        SonOfDaughterOf, Email, BirthDate, Gender, Address, City, State, Pincode, MobileNumber, Password, StudentImage, CourseStartDate, CourseEndDate
    } = data;

    const query = `
        INSERT INTO registeredstudents 
        (FormNo, CenRegNo, AdmissionDate, CourseID, RoleId, BranchId, RegFees, Surname, Name, SonOfDaughterOf, Email,
         BirthDate, Gender, Address, City, State, Pincode, MobileNumber, Password, 
         StudentImage, CourseStartDate, CourseEndDate)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        FormNo, CenRegNo, AdmissionDate, courseId, RoleId, branchId, RegFees, Surname, Name,
        SonOfDaughterOf, Email, BirthDate, Gender, Address, City, State, Pincode, MobileNumber,
        Password, StudentImage, CourseStartDate, CourseEndDate
    ];

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error, results) => {
            if (error) return reject(error);
            resolve({ StudentId: results.insertId });
        });
    });
};

const addUser = async (userData) => {
    const {
        FirstName, LastName, Email, PhoneNumber, Address, UserName, Password, RoleId, StudentId,
        branchId, ProfilePicture
    } = userData;

    const query = `
        INSERT INTO users 
        (FirstName, LastName, Email, PhoneNumber, Address, UserName, Password, RoleId, StudentId, BranchId, ProfilePicture)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        FirstName, LastName, Email, PhoneNumber, Address, UserName, Password, RoleId, StudentId, branchId, ProfilePicture
    ];

    return new Promise((resolve, reject) => {
        dbconnection.query(query, values, (error, results) => {
            if (error) return reject(error);
            resolve({ UserID: results.insertId });
        });
    });
};

// Function to add a student and also add it to the users table
const addStudentAndUser = async (studentData) => {
    try {
        // Step 1: Add the student to the registeredstudents table
        const student = await addStudent(studentData);

        // Step 2: Add the student as a user to the users table
        const user = await addUser({
            FirstName: studentData.Name,
            LastName: studentData.Surname,
            Email: studentData.Email || "", // Optional email field
            PhoneNumber: studentData.MobileNumber,
            Address: studentData.Address,
            UserName: studentData.FormNo, // Assuming UserName is FormNo
            Password: studentData.Password,
            RoleId: studentData.RoleId,
            StudentId: student.StudentId, // Use the returned StudentId
            BranchId: studentData.BranchId,
            ProfilePicture: studentData.StudentImage
        });

        return {
            success: true,
            message: 'Student and user added successfully',
            studentID: student.StudentId,
            userID: user.UserID
        };
    } catch (error) {
        return {
            success: false,
            message: 'Error occurred while adding student or user',
            error: error.message
        };
    }
};

// Update a student by ID
const updateStudent = async (StudentId, data) => {
    const { FormNo, CenRegNo, AdmissionDate, CourseID, RoleId, BranchId, RegFees, Surname, Name,
        SonOfDaughterOf, Email, BirthDate, Gender, Address, City, State, Pincode, MobileNumber, Password, StudentImage, CourseStartDate, CourseEndDate } = data;

    const query = `UPDATE registeredstudents SET FormNo = ?, CenRegNo = ?, AdmissionDate = ?, CourseID = ?, 
                   RoleId = ?, BranchId = ?, RegFees = ?, Surname = ?, Name = ?, SonOfDaughterOf = ?, Email = ?,
                   BirthDate = ?, Gender = ?, Address = ?, City = ?, State = ?, Pincode = ?, MobileNumber = ?, Password = ?, StudentImage = ?, CourseStartDate = ?, CourseEndDate = ?
                   WHERE StudentId = ?`;

    const values = [FormNo, CenRegNo, AdmissionDate, CourseID, RoleId, BranchId, RegFees, Surname, Name,
        SonOfDaughterOf, Email, BirthDate, Gender, Address, City, State, Pincode, MobileNumber, Password, StudentImage, CourseStartDate, CourseEndDate, StudentId];

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
    const query = `
        SELECT 
            s.*,
            b.BranchName,
            c.CourseName
        FROM 
            registeredstudents s
        JOIN 
            branch b ON s.BranchId = b.BranchId
        JOIN 
            course c ON s.CourseID = c.CourseId;
    `;

    return new Promise((resolve, reject) => {
        dbconnection.query(query, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

// Get students by BranchID
const getStudentsByBranch = async (branchID) => {
    const query = `SELECT 
            s.*,
            b.BranchName,
            c.CourseName
        FROM 
            registeredstudents s
        JOIN 
            branch b ON s.BranchId = b.BranchId
        JOIN 
            course c ON s.CourseID = c.CourseId
             WHERE s.BranchId = ?`;

    return new Promise((resolve, reject) => {
        dbconnection.query(query, [branchID], (error, results) => {
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
    getStudentsByBranch,
    addStudentAndUser
};
