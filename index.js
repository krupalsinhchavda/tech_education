const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

// Ensure 'uploads/customer' directory exists
const customerUploadsDir = path.join(__dirname, 'uploads/customer');
if (!fs.existsSync(customerUploadsDir)) {
    fs.mkdirSync(customerUploadsDir, { recursive: true });
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    optionsSuccessStatus: 204,
}));
app.use(bodyParser.json());

const authRoutes = require('./routes/authRoutes');
const branchAdminRoutes = require('./routes/branchAdminRoutes');
const branchRoutes = require('./routes/branchRoutes');
const courseRoutes = require('./routes/courseRoutes');
const examRoutes = require('./routes/examRoutes');
const feesRoutes = require('./routes/feesRoutes');
const qualificationDetailsRoutes = require('./routes/qualificationDetailsRoutes');
const registeredStudentsRoutes = require('./routes/registeredStudentsRoutes');
const studentExamDetailsRoutes = require('./routes/studentExamDetailsRoutes');
const userRoutes = require('./routes/userRoutes');
const youtubebannerRoutes = require('./routes/youtubebannerRoutes');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/branchAdmin', branchAdminRoutes);
app.use('/api/branch', branchRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/exam', examRoutes);
app.use('/api/fees', feesRoutes);
app.use('/api/qualificationDetails', qualificationDetailsRoutes);
app.use('/api/registeredStudents', registeredStudentsRoutes);
app.use('/api/studentExamDetails', studentExamDetailsRoutes);
app.use('/api/user', userRoutes);
app.use('/api/youtubebanner', youtubebannerRoutes);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
